import React from 'react';
import './index.less';

const FormPage: React.FC = () => {

  return (
    <div className="result">
      <div className={'scene--1'}>
        <div className={'result-title'}/>
        <div className={'result-seal'}>
          <div className={'result-seal-item result-seal-item--1'}></div>
          <div className={'result-seal-item result-seal-item--2'}></div>
          <div className={'result-seal-item result-seal-item--3'}></div>
        </div>
        <div className={'result-scene--1'}>
          <div className={'result-light'}>
            <div className={'result-light-item result-light-item--1'}/>
            <div className={'result-light-item result-light-item--2'}/>
            <div className={'result-light-item result-light-item--3'}/>
          </div>
          <div className={'result-coupon-bg'}/>
          <div className={'result-coupon'}/>
        </div>
        <div className={'result-hand'}>
          <div className={'result-hand-light'}/>
          <div className={'result-hand-main'}/>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
