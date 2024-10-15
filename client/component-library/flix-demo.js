import './index.js';

async function render() {
  const infoBannerBtn = document.getElementById('info-banner-btn');
  const infoBanner = document.getElementById('info-banner');
  const errorBannerBtn = document.getElementById('error-banner-btn');
  const errorBanner = document.getElementById('error-banner');

  infoBannerBtn.addEventListener('click', () => (infoBanner.visible = true));
  errorBannerBtn.addEventListener('click', () => (errorBanner.visible = true));
}

export default render;
