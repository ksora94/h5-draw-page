import React from 'react';
import { useNavigate } from 'react-router-dom';
import { awardList } from './constant';
import './index.less';

const HistoryPage: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="history-page">
      <div className="history-header">
        <div className="history-back" onClick={goBack}></div>
        <div className="history-title">我的奖品</div>
      </div>

      <div className="history-list">
        {awardList.map((item, index) => (
          <div className="history-item" key={index}>
            <div className="history-item-left">
              {item.image ? (
                <img className="history-item-image" src={item.image} alt={item.name} />
              ) : (
                <div className="history-item-placeholder">
                  <img src="/public/award_light.png" alt="奖品" />
                </div>
              )}
            </div>
            <div className="history-item-right">
              <div className="history-item-name">{item.name}</div>
              <div className="history-item-expire">有效期至：{item.expireDate}</div>
              {item.status === 'used' && <div className="history-item-tag used">已使用</div>}
              {item.status === 'expired' && <div className="history-item-tag expired">已过期</div>}
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
