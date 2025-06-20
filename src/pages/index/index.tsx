import React, {useState, useEffect, useRef} from 'react';
import Cookie from 'js-cookie';
import {useNavigate} from 'react-router-dom';
import {ListData, Rules} from './constant';
import Modal from '../../components/Modal';
import {getInitialData, reportLog} from '../../public/service.ts';
import {safeWindowOpen} from '../../public/util.ts';
import './index.less';

// 预加载 form 页面的图片资源
const preloadFormImages = () => {
  const images = [
    '/public/modal.png',
    '/public/phone.png',
    '/public/submit.png',
    '/public/hand.webp',
    '/public/check1.png',
    '/public/check2.png',
    '/public/title1.png',
    '/public/tag.png',
    '/public/circle1.png',
    '/public/circle2.png',
    '/public/circle3.png',
    '/public/award_light.png',
    '/public/coupon.png',
    '/public/hand2.png',
    '/public/light_hand.png'
  ];

  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

const initialCount = Cookie.get('count') ? parseInt(Cookie.get('count') || '0', 10) : 0;

const IndexPage: React.FC = () => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const [count, setCount] = useState(Math.max(8 - initialCount, 0)); // 初始值为 8 次减去已参与次数
  const source = useRef<any>(null);

  useEffect(() => {
    // 在组件挂载后预加载 form 页面的图片
    preloadFormImages();
    getInitialData().then(res => source.current = res);
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleDraw = () => {
    const data = source.current;

    reportLog('ACTIVITY_PLAY');
    if (data && count > 0) {
      setCount(prevCount => {
        const newCount = prevCount - 1;
        // 第二天 0 点
        const expires = new Date();

        expires.setHours(24, 0, 0, 0); // 设置为第二天的 0 点
        Cookie.set('count', newCount.toString(), { expires });
        return newCount;
      });
      reportLog('ADVERT_SHOW', data.id);
      reportLog('ADVERT_CLICK', data.id);
      if (data.landpage.indexOf('/') === 0) {
        navigate(data.landpage);
      } else {
        safeWindowOpen(data.landpage)
      }

      getInitialData().then(res => source.current = res);
    }
  };

  const goToHistory = () => {
    navigate('/history');
  };

  return (
    <div className="index">
      <div className={`index-btn ${count === 0 ? 'index-btn-disabled' : ''}`} onClick={handleDraw}/>

      {count <= 3 && count > 0 && (
          <div className={'index-btn-tooltip'}>
            还有{count}次机会
          </div>
      )}

      {count > 0 && (
          <>
            <div className={'index-hand'}/>
            <div className={'index-water'}/>
          </>
      )}

      <div className={'index-count'}>
        今日可参与次数：{count}次
      </div>

      <div className={'index-rule'} onClick={() => setModalVisible(true)}>
        规则
      </div>

      <div className={'index-history'} onClick={goToHistory}/>

      <div className={'index-list'}>
        <div className={'index-list-box'}>
          {ListData.map((item, index) => (
            <div className={'index-list-item'} key={index}>
              <div className={'index-list-name'}>
                {item.name}
              </div>
              <div className={'index-list-text'}>
                {item.action}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
          visible={modalVisible}
          onClose={closeModal}
          title="活��规则"
      >
        <pre style={{fontSize: 14, lineHeight: 1.5, whiteSpace: 'break-spaces'}}>
          {Rules}
        </pre>
      </Modal>
    </div>
  );
};

export default IndexPage;
