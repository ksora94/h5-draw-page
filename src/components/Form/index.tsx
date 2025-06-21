import React, {useMemo, useRef, useState} from 'react';
import cx from 'classnames';
import { useSearchParams } from 'react-router-dom';
import Modal from '../Modal';
import toast from '../Toast';
import { Privacy } from '../../public/constant.ts';
import { postCallback } from '../../public/service.ts';
import './index.less';

export interface FormComponentProps {
  numberTickerComponent: React.ReactNode;
  wyCallbackId: string;
  className?: string;
  backgroundImage: string;
  numberColor: string;
  customStyles?: React.CSSProperties;
}

const FormComponent: React.FC<FormComponentProps> = ({
  numberTickerComponent,
  wyCallbackId,
  className = 'form',
  backgroundImage,
  numberColor,
  customStyles
}) => {
  const [searchParams] = useSearchParams();
  const [checked, setChecked] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const privacy = useMemo(() => Privacy({
    contact: searchParams.get('contact')
  }), [searchParams])

  const formStyles = {
    backgroundImage: `url(${backgroundImage})`,
    ...customStyles
  };

  const numberTextStyles = {
    color: numberColor
  };

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
      postCallback(wyCallbackId, 1003, phoneNumber);
    }
  };

  return (
    <>
      <div className={className} style={formStyles}>
        <div className={`${className}-number`}>
          <div className={`${className}-number-text`} style={numberTextStyles}>
            {numberTickerComponent}
          </div>
        </div>
        <div className={`${className}-input`}>
          <input ref={inputRef} type="tel" placeholder="请输入您的手机号码" maxLength={11}/>
        </div>
        <div className={`${className}-btn`} onClick={handleSubmit}/>
        <div className={`${className}-hand`}/>
        <div className={`${className}-checkbox`}>
          <span
            className={cx(`${className}-checkbox-trigger`, checked && `${className}-checkbox-trigger--checked`)}
            onClick={() => setChecked(!checked)}
          />
          提交视为已阅读并同意
          <a onClick={openPrivacyModal}>《个人信息授权与保护声明》</a>
        </div>
      </div>

      <Modal
        visible={modalVisible}
        onClose={closePrivacyModal}
        title="个人信息授权与保护声明"
      >
        <pre style={{fontSize: 14, lineHeight: 1.5, whiteSpace: 'break-spaces'}}>{privacy}</pre>
      </Modal>
    </>
  );
};

export default FormComponent;
