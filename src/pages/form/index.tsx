import React, {useState} from 'react';
import cx from 'classnames';
import FormAnimation from './FormAnimation';
import NumberTicker from './NumberTicker';
import './index.less';

const FormPage: React.FC = () => {
  const [formShown, setFormShown] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleAnimationFinish = () => {
    setFormShown(true);
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
              <a>《个人信息授权与保护声明》</a>
            </div>
          </div>
      )}
    </>
  );
};

export default FormPage;
