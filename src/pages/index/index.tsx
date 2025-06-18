import React, {useState} from 'react';
import './index.less';
import {useNavigate} from 'react-router-dom';
import {ListData, Rules} from './constant';
import Modal from '../../components/Modal';



const IndexPage: React.FC = () => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleDraw = () => {
    navigate('/form');
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
        今日参与次数：6次
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
