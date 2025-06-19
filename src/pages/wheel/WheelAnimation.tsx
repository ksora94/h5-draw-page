import React, {useEffect, useRef, useState} from 'react';
import cx from 'classnames';
import './animate.less';
import confetti from 'canvas-confetti';

interface WheelAnimationProps {
  onFinish?: () => void;
}

const WheelAnimation: React.FC<WheelAnimationProps> = ({onFinish}) => {
  const [scene, setScene] = useState(0);
  const confettiRef = useRef<HTMLCanvasElement>(null);


  useEffect(() => {
    setTimeout(() => setScene(1), 1000);
  }, []);

  function handleBtnClick() {
    setScene(2);
    setTimeout(() => setScene(3), 2000);
    setTimeout(() => setScene(4), 3000);
    setTimeout(() => {
      if (confettiRef.current) {
        const myConfetti = confetti.create(confettiRef.current, {
          resize: true
        });

        myConfetti({
          particleCount: 200,
          spread: 70,
          origin: { x: 0.5, y: 1.0 }, // 底部中间
          shapes: ['square', 'circle']
        });
      }
    }, 3500);
    setTimeout(() => {
      onFinish?.();
    }, 4500);
  }

  return (
      <div className={'anime'}>
        {[1, 2, 3, 4].includes(scene)  && (
            <div className={'anime-wheel'}>
              <div className={'anime-wheel-light'}/>
              <div className={cx('anime-wheel-main', scene === 2 && 'anime-wheel-main--rotate')}/>
              <div className={'anime-wheel-arr'}/>
              <div className={'anime-wheel-btn'} onClick={handleBtnClick}/>
              <div className={'anime-wheel-hand'}/>
              {scene === 3 && (
                  <>
                    <div className={'anime-wheel-boom'}/>
                    <div className={'anime-wheel-boom anime-wheel-boom--2'}/>
                  </>
              )}
            </div>
        )}

        {scene === 4 && (
            <div className={'anime-result'}>
              <div className={'anime-result-lamp'}/>
              <div className={'anime-result-light'}/>
              <div className={'anime-result-stars'}/>
              <div className={'anime-result-circle'}/>
              <div className={'anime-result-title'}/>
              <div className={'anime-result-subtitle'}/>
              <div className={'anime-result-hands'}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
        )}

        {scene === 0 && (
            <div className={'anime-overlay'}>
              <div className={'anime-overlay-main'}/>
            </div>
        )}

        <canvas className={'anime-confetti'} ref={confettiRef}/>
      </div>
  )
}

export default WheelAnimation;

