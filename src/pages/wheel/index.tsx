import React from 'react';
import WheelAnimation from './WheelAnimation.tsx';


const WheelPage: React.FC = () => {

  function handleAnimationEnd() {
    console.log('done')
  }

  return (
      <>
        <WheelAnimation onFinish={handleAnimationEnd}/>
      </>
  )
}

export default WheelPage;

