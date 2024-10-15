import createErrorBanner from './banner.js';

async function addToMyList(id) {
 
  const button = document.getElementById('toggleBtn');
  let isButtonDisabled = false;
  async function fetchMyListData() {
    try {
      const response = await fetch('/api/mylist');
      if (!response.ok) {
        const customErrorBanner = createErrorBanner("There was a problem requesting mylist data");
        document.body.appendChild(customErrorBanner);
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }

  async function updateButtonState(idExistsInResponse) {
    button.variant = idExistsInResponse ? 'secondary' : 'primary';
    button.icon = idExistsInResponse ? '/assets/icons/checkmark.svg' : '/assets/icons/add.svg';
    button.value = idExistsInResponse ? 'Remove From My List' : 'Add To My List';
  }

  async function updateMyList() {
    if (isButtonDisabled) {
      return; // Exit if the button is already disabled
    }

    try {
      const data = await fetchMyListData();
      const idExistsInResponse = data.includes(id);

      let updatedData;
      if (idExistsInResponse) {
        updatedData = data.filter(item => item !== id);
      } else {
        updatedData = [...data, id];
      }

      // Disable the button during the POST request
      button.disabled = true;
      isButtonDisabled = true;

      const response = await fetch('/api/mylist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      
      if (!response.ok) {
        const customErrorBanner = createErrorBanner("There was a problem with sending mylist data");
        document.body.appendChild(customErrorBanner);
        throw new Error(`Request failed with status: ${response.status}`);
      }

      await updateButtonState(!idExistsInResponse);

      // Re-enable the button after a delay (e.g., half a second)
      setTimeout(() => {
        button.disabled = false;
        isButtonDisabled = false;
      }, 500);
    } catch (error) {
      console.error(error);
    }
  }

  try {
    const data = await fetchMyListData();
    await updateButtonState(data.includes(id));

    button.addEventListener('click', async () => {
      await updateMyList();
    });
  } catch (error) {
    console.error(error);
  }
}

export default addToMyList;
