import React from 'react';
import './index.less';

const ListData = [
  {
    "name": "杨**",
    "action": "领取幸运福袋"
  },
  {
    "name": "李**",
    "action": "领取幸运福袋"
  },
  {
    "name": "姚**",
    "action": "领取幸运福袋"
  },
  {
    "name": "蔡**",
    "action": "领取幸运福袋"
  },
  {
    "name": "汪**",
    "action": "领取幸运福袋"
  },
  {
    "name": "姚**",
    "action": "领取幸运福袋"
  },
  {
    "name": "汪**",
    "action": "领取幸运福袋"
  },
  {
    "name": "杨**",
    "action": "领取幸运福袋"
  },
  {
    "name": "李**",
    "action": "领取幸运福袋"
  },
  {
    "name": "杨**",
    "action": "领取幸运福袋"
  },
  {
    "name": "李**",
    "action": "领取幸运福袋"
  },
  {
    "name": "姚**",
    "action": "领取幸运福袋"
  },
  {
    "name": "蔡**",
    "action": "领取幸运福袋"
  },
  {
    "name": "汪**",
    "action": "领取幸运福袋"
  },
  {
    "name": "杨**",
    "action": "领取幸运福袋"
  },
  {
    "name": "李**",
    "action": "领取幸运福袋"
  },
  {
    "name": "姚**",
    "action": "领取幸运福袋"
  },
  {
    "name": "蔡**",
    "action": "领取幸运福袋"
  },
  {
    "name": "汪**",
    "action": "领取幸运福袋"
  },
  {
    "name": "姚**",
    "action": "领取幸运福袋"
  },
  {
    "name": "汪**",
    "action": "领取幸运福袋"
  },
  {
    "name": "杨**",
    "action": "领取幸运福袋"
  },
  {
    "name": "李**",
    "action": "领取幸运福袋"
  },
  {
    "name": "杨**",
    "action": "领取幸运福袋"
  },
  {
    "name": "李**",
    "action": "领取幸运福袋"
  },
  {
    "name": "姚**",
    "action": "领取幸运福袋"
  },
  {
    "name": "蔡**",
    "action": "领取幸运福袋"
  },
  {
    "name": "汪**",
    "action": "领取幸运福袋"
  },
  {
    "name": "杨**",
    "action": "领取幸运福袋"
  },
  {
    "name": "李**",
    "action": "领取幸运福袋"
  },
  {
    "name": "姚**",
    "action": "领取幸运福袋"
  },
  {
    "name": "蔡**",
    "action": "领取幸运福袋"
  },
  {
    "name": "汪**",
    "action": "领取幸运福袋"
  },
  {
    "name": "姚**",
    "action": "领取幸运福袋"
  },
  {
    "name": "汪**",
    "action": "领取幸运福袋"
  },
  {
    "name": "杨**",
    "action": "领取幸运福袋"
  },
  {
    "name": "李**",
    "action": "领取幸运福袋"
  },
  {
    "name": "杨**",
    "action": "领取幸运福袋"
  },
  {
    "name": "李**",
    "action": "领取幸运福袋"
  },
  {
    "name": "姚**",
    "action": "领取幸运福袋"
  },
  {
    "name": "蔡**",
    "action": "领取幸运福袋"
  },
  {
    "name": "汪**",
    "action": "领取幸运福袋"
  }
]

const IndexPage: React.FC = () => {

  // const handleDraw = () => {
  //   // 模拟抽奖操作
  //   setTimeout(() => {
  //     navigate('/result');
  //   }, 1000);
  // };

  return (
    <div className="index">
      <div className={'index-btn'}/>

      <div className={'index-hand'}/>

      <div className={'index-water'}></div>

      <div className={'index-count'}>
        今日参与次数：6次
      </div>

      <div className={'index-rule'}>
        规则
      </div>

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
    </div>
  );
};

export default IndexPage;
