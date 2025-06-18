import React, {useState} from 'react';
import Cookie from 'js-cookie';
import {useNavigate} from 'react-router-dom';
import {ListData, Rules} from './constant';
import Modal from '../../components/Modal';
import {getInitialData, reportLog} from '../../public/service.ts';
import './index.less';

const initialCount = Cookie.get('count') ? parseInt(Cookie.get('count') || '0', 10) : 0;

const IndexPage: React.FC = () => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const [count, setCount] = useState(initialCount);

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleDraw = () => {
    reportLog('ACTIVITY_PLAY');
    getInitialData().then(res => {
      if (res) {
        setCount(prevCount => {
          const newCount = prevCount + 1;
          // 第二天 0 点
          const expires = new Date();

          expires.setHours(24, 0, 0, 0); // 设置为第二天的 0 点
          Cookie.set('count', newCount.toString(), { expires });
          return newCount;
        });
        reportLog('ADVERT_SHOW', res.id);
        reportLog('ADVERT_CLICK', res.id);
        if (res.landpage.indexOf('/') === 0) {
          navigate(res.landpage);
        } else {
          window.open(res.landpage, '_blank');
        }
      }
    })
  };

  const goToHistory = () => {
    navigate('/history');
  };

  return (
    <div className="index">
      <div className={'index-btn'} onClick={handleDraw}/>

      <div className={'index-hand'}/>

      <div className={'index-water'}/>

      <div className={'index-count'}>
        今日参与次数：{count}次
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
          {Rules}
        </pre>
      </Modal>
    </div>
  );
};

export default IndexPage;
