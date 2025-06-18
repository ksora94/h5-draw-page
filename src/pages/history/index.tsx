import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './index.less';
import {fetchHistory} from '../../public/service.ts';

const HistoryPage: React.FC = () => {
  const navigate = useNavigate();
  const [awardList, setAwardList] = useState<any[]>([]);

  const goBack = () => {
    navigate('/');
  };

  const handleClick = (item: any) => {
    if (item.landpage.indexOf('/') === 0) {
      navigate(item.landpage);
    } else {
      window.open(item.landpage, '_blank');
    }
  }

  useEffect(() => {
    fetchHistory().then(res => {
      setAwardList(res);
    });
  }, []);

  return (
    <div className="history-page">
      <div className="history-header">
        <div className="history-back" onClick={goBack}></div>
        <div className="history-title">我的奖品</div>
      </div>

      <div className="history-list">
        {awardList.map((item, index) => (
          <div className="history-item" key={index} onClick={() => handleClick(item)}>
            <div className="history-item-left">
              <img className="history-item-image" src={item.creative.mainImage} alt={item.creative.title} />
            </div>
            <div className="history-item-right">
              <div className="history-item-name">{item.creative.title}</div>
              <div className="history-item-expire">{item.creative.subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      {awardList.length === 0 && (
        <div className="history-empty">
          <div className="history-empty-text">暂无中奖记录</div>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
