import React, {useState} from 'react';
import cx from 'classnames';
import FormAnimation from './FormAnimation';
import NumberTicker from './NumberTicker';
import Modal from '../../components/Modal';
import './index.less';
import {Privacy} from './constant.ts';

const FormPage: React.FC = () => {
  const [formShown, setFormShown] = useState(false);
  const [checked, setChecked] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAnimationFinish = () => {
    setFormShown(true);
  };

  const openPrivacyModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalVisible(true);
  };

  const closePrivacyModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <FormAnimation onFinish={handleAnimationFinish} />

      {formShown && (
          <div className={'form'}>
            <div className={'form-number'}>
              <div className={'form-number-text'}>
                <NumberTicker end={200} duration={2000} />
              </div>
            </div>
            <div className={'form-input'}>
              <input type="tel" placeholder="请输入您的手机号码" maxLength={11}/>
            </div>
            <div className={'form-btn'}/>
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
  );
};

export default FormPage;
