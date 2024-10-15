import createErrorBanner from './banner.js';
import renderBillboardBoxarts from './cardList.js';
import './component-library/index.js';

async function fetchVideoData() {
  const response = await fetch('/api/videos');

  if (!response.ok) {
    const errorMessage = "There was a problem requesting video data";
    const customErrorBanner = createErrorBanner(errorMessage);
    document.body.appendChild(customErrorBanner);
    throw new Error(`Request failed with status: ${response.status}`);
  }

  return await response.json();
}

async function fetchBillboardData() {
  const response = await fetch('/api/billboard');

  if (!response.ok) {
    const errorMessage = "There was a problem requesting billboard data";
    const customErrorBanner = createErrorBanner(errorMessage);
    document.body.appendChild(customErrorBanner);
    throw new Error(`Request failed with status: ${response.status}`);
  }

  return await response.json();
}

function createBillboardSection() {
  const billboardTemplate = document.getElementById('billboard');
  const templateClone = billboardTemplate.content.cloneNode(true);
  return templateClone.querySelector('section');
}

function renderVideoRows(rows, videoMap) {
  const videoRowTemplate = document.getElementById('row');
  const boxartTemplate = document.getElementById('boxart');

  return rows.map((row, i) => {
    const rowTmpl = videoRowTemplate.content.cloneNode(true);
    const rowEl = rowTmpl.querySelector('.video-row');
    const rowItems = row.map((videoId) => {
      const data = videoMap[videoId];

      const boxartTmpl = boxartTemplate.content.cloneNode(true);
      const boxartEl = boxartTmpl.querySelector('.boxart');
      const img = boxartEl.querySelector('img');
      img.src = data.boxart;
      img.title = data.title;
      img.alt = data.title;
      return boxartEl;
    });

    rowEl.append(...rowItems);
    return rowEl;
  });
}

function appendRows(rowItems) {
  const main = document.querySelector('main');
  main.append(...rowItems);
}

function appendBillboard(billboardRow) {
  const billboardEl = document.querySelector('main .billboard');
  if (billboardRow) {
    billboardEl.appendChild(billboardRow);
  }
}

async function render() {
  let videoData, billboardDataResponse;

  try {
    videoData = await fetchVideoData();
  } catch (error) {
    console.error(error);
  }

  if (videoData) {
    const { rows, videos } = videoData;
    const rowItems = renderVideoRows(rows, videos);
    appendRows(rowItems);
  }

  try {
    billboardDataResponse = await fetchBillboardData();
  } catch (error) {
    console.error("error ");

    // Handle the billboard error by removing it and changing the class
    const billboardEl = document.querySelector('.billboard');
    if (billboardEl) {
      billboardEl.style.height = 0;
    }
  }

  if (billboardDataResponse) {
    const billboardBoxartsData = billboardDataResponse;

    if (billboardBoxartsData.length > 0) {
      const section = createBillboardSection();
      renderBillboardBoxarts(section, billboardBoxartsData);
      appendBillboard(section);
    }
  }
}

export default render;
