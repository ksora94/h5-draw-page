import React, {useEffect, useState} from 'react';
import WheelAnimation from './WheelAnimation.tsx';
import {useSearchParams} from 'react-router-dom';
import {postCallback} from '../../public/service.ts';
import NumberTicker from '../form/NumberTicker.tsx';
import FormComponent from '../../components/Form';


const WheelPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formShown, setFormShown] = useState(false);
  const [animationShown, setAnimationShown] = useState(true);
  const wyCallbackId = searchParams.get('wyCallbackId') || '';

  function handleAnimationEnd() {
    setFormShown(true);
    setTimeout(() => {
      setAnimationShown(false);
    }, 1000);
  }

  useEffect(() => {
    postCallback(wyCallbackId, 1001);
  }, []);

  return (
      <>
        {animationShown && <WheelAnimation onFinish={handleAnimationEnd}/>}

        {formShown && (
          <FormComponent
            numberTickerComponent={<NumberTicker end={200} duration={2000} />}
            wyCallbackId={wyCallbackId}
            backgroundImage="/public/modal2.webp"
            numberColor="#459BF5"
          />
        )}
      </>
  )
}

export default WheelPage;
