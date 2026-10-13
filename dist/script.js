document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const subject = `Portfolio inquiry from ${form.elements.name.value.trim()}`;
  const body = `Hi Ayush,\n\n${form.elements.message.value.trim()}\n\nFrom: ${form.elements.name.value.trim()}\nEmail: ${form.elements.email.value.trim()}`;
  window.location.href = `mailto:ayushparihar560@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#form-status').textContent = 'Email draft requested. If your email app does not open, use the email link beside this form.';
});
