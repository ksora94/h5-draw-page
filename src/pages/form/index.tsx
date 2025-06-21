import React, {useEffect, useState} from 'react';
import { useSearchParams} from 'react-router-dom';
import FormAnimation from './FormAnimation';
import NumberTicker from './NumberTicker';
import FormComponent from '../../components/Form';
import { postCallback } from '../../public/service.ts';
import modalImage from '@/assets/images/modal.png';

const FormPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formShown, setFormShown] = useState(false);
  const [animationShown, setAnimationShown] = useState(true);
  const wyCallbackId = searchParams.get('wyCallbackId') || '';

  const handleAnimationFinish = () => {
    setFormShown(true);
    setTimeout(() => {
      setAnimationShown(false);
    }, 1000);
  };

  useEffect(() => {
    postCallback(wyCallbackId, 1001);
  }, []);

  return (
    <>
      {animationShown && <FormAnimation onFinish={handleAnimationFinish} />}

      {formShown && (
        <FormComponent
          numberTickerComponent={<NumberTicker end={200} duration={2000} />}
          wyCallbackId={wyCallbackId}
          backgroundImage={modalImage}
          numberColor="#209e3d"
        />
      )}
    </>
  );
};

export default FormPage;
