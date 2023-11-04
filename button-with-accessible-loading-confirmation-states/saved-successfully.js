const saveButton = document.querySelector('.save-button');
const saveStatus = document.getElementById('save-status');
const textarea = document.getElementById('message');

// timeout id for cancelling loading message
let loadingTimeout;

saveButton.addEventListener('click', function() {
  const isDisabled = saveButton.getAttribute('aria-disabled') === 'true';
  
  if (!isDisabled) {
    setLoading();
  }
});

textarea.addEventListener('input', function() {
  const isSaveDisabled = saveButton.getAttribute('aria-disabled') === 'true';
  if (isSaveDisabled) {
    setAvailable();
  }
});

function setLoading() {
  saveButton.classList.add('loading');
  saveButton.setAttribute('aria-disabled', 'true');
  saveButton.tabIndex = -1;
  
  // use a timeout for the loading message
  // if the saved state happens very quickly,
  // we don't need to explicitly announce the intermediate loading state
  loadingTimeout = window.setTimeout(() => {
    saveStatus.textContent = 'Loading';
  }, 200);
  
  // set timeout for saved state, to mimic loading
  const fakeTimeout = Math.random() * 2000;
  window.setTimeout(setSaved, fakeTimeout);
}

function setSaved() {
  saveButton.classList.remove('loading');
  saveButton.classList.add('saved');
  saveButton.setAttribute('aria-disabled', 'true');
  saveButton.tabIndex = -1;

  window.clearTimeout(loadingTimeout);
  saveStatus.textContent = 'Saved successfully';
}

function setAvailable() {
  saveButton.classList.remove('loading');
  saveButton.classList.remove('saved');
  saveButton.removeAttribute('aria-disabled');
  saveButton.removeAttribute('tabindex');
  
  saveStatus.textContent = '';
}