import React, {useState, useEffect, useRef} from 'react';
import Cookie from 'js-cookie';
import {useNavigate} from 'react-router-dom';
import {ListData, Rules} from './constant';
import Modal from '../../components/Modal';
import {getInitialData, reportLog} from '@/public/service.ts';
import cst from '@/public/constant.ts';
import './index.less';


const initialCount = Cookie.get('count') ? parseInt(Cookie.get('count') || '0', 10) : 0;

const IndexPage: React.FC = () => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const [count, setCount] = useState(Math.max(8 - initialCount, 0));
  const [rule, setRule] = useState('')
  const source = useRef<any>(null);

  useEffect(() => {
    // 在组件挂载后预加载 form 页面的图片
    getInitialData().then(res => {
      source.current = res;
      setRule(Rules(cst.Activity));
    });
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
        window.location.href = data.landpage;
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
          title="活动规则"
      >
        <pre style={{fontSize: 14, lineHeight: 1.5, whiteSpace: 'break-spaces'}}>
          {rule}
        </pre>
      </Modal>
    </div>
  );
};

export default IndexPage;
