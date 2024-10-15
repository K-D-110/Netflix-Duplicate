import addToMyList from './addToMyList.js';

function createBoxartElement(boxartData) {
  const boxartTemplate = document.getElementById('boxart');
  const boxartClone = boxartTemplate.content.cloneNode(true);
  const boxartEl = boxartClone.querySelector('.boxart');

  const img = boxartEl.querySelector('img');
  img.src = boxartData.metadata.boxart;
  img.title = boxartData.title;
  img.alt = boxartData.title;

  boxartEl.addEventListener('click', () => handleBoxartClick(boxartEl, boxartData));

  return boxartEl;
}

function handleBoxartClick(boxartEl, boxartData) {
  const billboardEl = document.querySelector('.billboard');
  const storyartEl = billboardEl.querySelector('.storyart');
  const titleEl = billboardEl.querySelector('h2');
  const loglineEl = billboardEl.querySelector('.logline');
  const metadataTopTen = billboardEl.querySelector('.topTen');
  const metadataEl = billboardEl.querySelector('.metadata-row');

  // Remove the border from any previously selected boxart
  const previouslySelectedBoxart = document.querySelector('.boxart.selected-boxart');
  if (previouslySelectedBoxart) {
    previouslySelectedBoxart.classList.remove('selected-boxart');
  }

  // Add the dark class to make the billboard image dark
  billboardEl.classList.add('billboard-dark');

  // Add a border to the clicked boxart
  boxartEl.classList.add('selected-boxart');

  storyartEl.src = boxartData.metadata.storyart;
  storyartEl.title = boxartData.title;
  storyartEl.alt = boxartData.title;

  titleEl.innerText = boxartData.title;
  loglineEl.innerText = boxartData.logline;

  addToMyList(boxartData.id);

  const topTenText = boxartData.metadata.topTen || '';

  if (topTenText) {
    const topTenEl = `
      <div>
        <img src='/assets/icons/topTen.svg' alt="topTen Icon">
        ${topTenText}
      </div>
    `;

    metadataTopTen.innerHTML = topTenEl;
  } else {
    // Clear the content or hide the element when topTenText is empty.
    metadataTopTen.innerHTML = '';
  }

  const infoContent = `
    <p>
      ${boxartData.metadata.releaseYear}
      <p class="rating">
        ${boxartData.metadata.rating}
      </p>
      ${boxartData.metadata.extra}
    </p>
  `;

  metadataEl.innerHTML = infoContent;

  // Remove the dark class after updating the background
  setTimeout(() => {
    billboardEl.classList.remove('billboard-dark');
  }, 200);
}

function renderBillboardBoxarts(billboardRow, billboardBoxartsData) {
  const boxartCol = billboardRow.querySelector('.boxart-col');
  
  return billboardBoxartsData.map((boxartData) => {
    const boxartEl = createBoxartElement(boxartData);
    boxartCol.appendChild(boxartEl);

    return billboardRow;
  });
}

export default renderBillboardBoxarts;
