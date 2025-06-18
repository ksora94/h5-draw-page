import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import './animation.less';

interface FormAnimationProps {
  onFinish?: () => void;
}

const FormAnimation: React.FC<FormAnimationProps> = ({ onFinish }) => {
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

    setTimeout(() => {
      if (onFinish) {
        onFinish();
      }
    }, 7000);
  }, []);

  return (
    <div className="anime">
      <div className={'scene--1'}>
        <div className={'anime-title'}/>
        <div className={'anime-seal'}>
          <div className={'anime-seal-item anime-seal-item--1'}></div>
          <div className={'anime-seal-item anime-seal-item--2'}></div>
          <div className={'anime-seal-item anime-seal-item--3'}></div>
        </div>
        <div className={'anime-scene--1'}>
          <div className={'anime-light'}>
            <div className={'anime-light-item anime-light-item--1'}/>
            <div className={'anime-light-item anime-light-item--2'}/>
            <div className={'anime-light-item anime-light-item--3'}/>
          </div>
          <div className={'anime-coupon-bg'}/>
          <div className={'anime-coupon'}/>
        </div>
        <div className={'anime-hand'}>
          <div className={'anime-hand-light'}/>
          <div className={'anime-hand-main'}/>
          <canvas className={'anime-confetti'} ref={confettiRef}>
          </canvas>
        </div>
      </div>
    </div>
  );
};

export default FormAnimation;
