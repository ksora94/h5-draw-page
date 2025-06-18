/**
 * 安全打开新窗口工具函数
 * 通过创建一个临时的 <a> 标签并模拟用户点击来打开新窗口
 * 这种方式可以避免某些浏览器对直接调用 window.open 的限制
 *
 * @param url 要打开的 URL
 * @param target 目标窗口，默认为 _blank
 */
export const safeWindowOpen = (url: string, target: string = '_blank') => {
  if (!url) return;

  // 创建一个临时的 <a> 标签
  const a = document.createElement('a');
  a.href = url;
  a.target = target;
  a.rel = 'noopener noreferrer'; // 增加安全性

  // 模拟点击事件
  document.body.appendChild(a);
  a.click();

  // 清理 DOM
  setTimeout(() => {
    document.body.removeChild(a);
  }, 100);
};

