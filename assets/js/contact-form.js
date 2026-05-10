/**
 * Contact form submission handler
 * Submits to Web3Forms (https://web3forms.com) and shows success/error states.
 */
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const loading = form.querySelector('.loading');
  const successEl = form.querySelector('.error-message.success');
  const sentMessage = form.querySelector('.sent-message');
  const errorEl = form.querySelector('.error-message:not(.success)');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const name = form.querySelector('#name').value;

    loading.classList.add('d-block');
    errorEl.classList.remove('d-block');
    sentMessage.classList.remove('d-block');
    successEl.classList.remove('open');

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      loading.classList.remove('d-block');

      if (response.ok && result.success) {
        form.reset();
        successEl.classList.add('open');
        successEl.innerHTML = `Thank you for your message, ${name}!`;
        setTimeout(() => successEl.classList.remove('open'), 4000);
      } else {
        errorEl.classList.add('d-block');
        errorEl.innerHTML = result.message || 'Something went wrong. Please try again.';
      }
    } catch (err) {
      loading.classList.remove('d-block');
      errorEl.classList.add('d-block');
      errorEl.innerHTML = 'Network error. Please try again later.';
    }
  });
})();
