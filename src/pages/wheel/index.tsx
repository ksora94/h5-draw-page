import React, {useEffect, useRef, useState} from 'react';
import cx from 'classnames';
import WheelAnimation from './WheelAnimation.tsx';
import {useSearchParams} from 'react-router-dom';
import {postCallback} from '../../public/service.ts';
import toast from '../../components/Toast';
import NumberTicker from '../form/NumberTicker.tsx';
import {Privacy} from '../../public/constant.ts';
import Modal from '../../components/Modal';
import './index.less';


const WheelPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formShown, setFormShown] = useState(false);
  const [animationShown, setAnimationShown] = useState(true);
  const [checked, setChecked] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const wyCallbackId = searchParams.get('wyCallbackId') || '';

  function handleAnimationEnd() {
    setFormShown(true);
    setTimeout(() => {
      setAnimationShown(false);
    }, 1000);
  }

  const openPrivacyModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalVisible(true);
  };

  const closePrivacyModal = () => {
    setModalVisible(false);
  };

  const handleSubmit = () => {
    const phoneNumber = inputRef.current?.value.trim();

    postCallback(wyCallbackId, 1002)
    if (!phoneNumber || !/^1\d{10}$/.test(phoneNumber)) {
      toast('请输入正确的手机号码');
      return;
    }
    if (!checked) {
      toast('请同意个人信息授权与保护声明');
      return;
    }

    const targetUrl = searchParams.get('targetUrl') || '';

    if (targetUrl) {
      const url = new URL(targetUrl);

      url.searchParams.set('phone', btoa(phoneNumber));
      url.searchParams.set('wyCallbackId', wyCallbackId);

      window.location.href = url.toString();
      postCallback(wyCallbackId, 1003);
    }
  }

  useEffect(() => {
    postCallback(wyCallbackId, 1001);
  }, []);

  return (
      <>
        {animationShown && <WheelAnimation onFinish={handleAnimationEnd}/>}

        {formShown && (
            <div className={'form'}>
              <div className={'form-number'}>
                <div className={'form-number-text'}>
                  <NumberTicker end={200} duration={2000} />
                </div>
              </div>
              <div className={'form-input'}>
                <input ref={inputRef} type="tel" placeholder="请输入您的手机号码" maxLength={11}/>
              </div>
              <div className={'form-btn'} onClick={handleSubmit}/>
              <div className={'form-hand'}/>
              <div className={'form-checkbox'}>
              <span className={cx('form-checkbox-trigger', checked && 'form-checkbox-trigger--checked')}
                    onClick={() => setChecked(!checked)}/>
                提交视为已阅读并同意
                <a onClick={openPrivacyModal}>《个人信息授权与保护声明》</a>
              </div>
            </div>
        )}

        <Modal
            visible={modalVisible}
            onClose={closePrivacyModal}
            title="个人信息授权与保护声明"
        >
          <pre style={{fontSize: 14, lineHeight: 1.5, whiteSpace: 'break-spaces'}}>{Privacy}</pre>
        </Modal>
      </>
  )
}

export default WheelPage;

