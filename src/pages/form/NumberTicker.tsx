import React, { useEffect, useState } from 'react';

interface NumberTickerProps {
  end: number;
  duration?: number; // 动画持续时间(毫秒)
  start?: number;    // 起始数字
  decimals?: number; // 小数位数
  className?: string;
}

const NumberTicker: React.FC<NumberTickerProps> = ({
  end,
  duration = 1000,
  start = 0,
  decimals = 0,
  className,
}) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (start === end) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // 使用easeOutExpo缓动函数，使动画看起来更自然
      const easeOutExpo = progress === 1
        ? 1
        : 1 - Math.pow(2, -10 * progress);

      const currentCount = start + (end - start) * easeOutExpo;
      setCount(parseFloat(currentCount.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [start, end, duration, decimals]);

  return <span className={className}>{count}</span>;
};

export default NumberTicker;
