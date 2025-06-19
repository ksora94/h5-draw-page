import Cookie from 'js-cookie';
import request from './request';
import cst from './constant.ts';

// 定义接口类型
export interface InfoType {
  appKey: string;
  did: string;
  [key: string]: any;
}

export interface AdvertCreativeType {
  id: number;
  type: number;
  mainImage: string;
  icon: string;
  title: string;
  subtitle: string;
}

export interface AdvertType {
  id: number;
  landpage: string;
  creative: AdvertCreativeType;
}

function updateInfo(info: InfoType) {
  // 更新本地存储的用户信息
  localStorage.setItem('info', JSON.stringify(info));
  cst.Info = info;
}

/**
 * 请求活动页面初始数据
 * @param info 用户信息
 */
export function getInitialData() {
  let adverts: any = [];

  try {
    adverts = Cookie.get('adverts') ? JSON.parse(Cookie.get('adverts') || '[]') : [];
  } catch (e) {}

  return request<any>({
    path: '/activity/show',
    method: 'POST',
    data: {
      info: cst.Info,
      adverts: adverts.length ? 0 : 1,
    }
  }).then(res => {
    updateInfo(res.info);

    if (res.adverts?.length) {
      // 缓存五分钟
      Cookie.set('adverts', JSON.stringify(res.adverts), { expires: 5 / (24 * 60) });
      Cookie.set('advertsIndex', '0', { expires: 5 / (24 * 60) });
      return res.adverts[0]
    } else {
      const advertsIndex = parseInt(Cookie.get('advertsIndex') || '0', 10) + 1;

      Cookie.set('advertsIndex', advertsIndex.toString(), { expires: 5 / (24 * 60) });
      return adverts[advertsIndex % adverts.length];
    }
  });
}

/**
 * 获取抽奖历史
 * @param info 用户信息
 */
export function fetchHistory() {
  return request<any>({
    path: '/activity/history',
    method: 'POST',
    data: {
      info: cst.Info
    }
  }).then(res => {
    updateInfo(res.info);

    return res.adverts || [];
  });
}

/**
 * 上报日志
 * @param info 用户信息
 * @param eventName 事件名称
 * @param advertId 广告ID（仅ADVERT_SHOW和ADVERT_CLICK时必传）
 */
export function reportLog(eventName: string, advertId?: number) {
  const event: { name: string; advertId?: number } = {
    name: eventName,
    advertId
  };

  return request<any>({
    path: '/activity/log',
    method: 'POST',
    data: {
      info: cst.Info,
      event
    }
  }).then(res => {
    updateInfo(res.info);

    return res;
  });
}

export function postCallback(wyCallbackId: string, event: 1001 | 1002 | 1003) {
  return request<any>({
    path: '/api/callback',
    method: 'POST',
    data: {
      wyCallbackId,
      event
    }
  })
}
