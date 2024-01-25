export const rem = () => {
  let w = window.innerWidth > 750 ? 1920 : 750;
  let size = (window.innerWidth / w) * 10;
  document.documentElement.style.fontSize = size + 'px';
};
rem();
window.addEventListener('pageshow', rem);
window.addEventListener('resize', rem);


