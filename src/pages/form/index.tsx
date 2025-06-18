import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import './index.less';

const FormPage: React.FC = () => {
  const confettiRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (confettiRef.current) {
      const myConfetti = confetti.create(confettiRef.current, {
        resize: true
      });

      myConfetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 1.0 }, // 底部中间
        shapes: ['square', 'circle']
      });
    }
  }, []);

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
          <canvas className={'result-confetti'} ref={confettiRef}/>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
