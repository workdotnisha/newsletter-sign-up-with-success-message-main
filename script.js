document.addEventListener('DOMContentLoaded', () => {
    const card_1 = document.querySelector('.container');
    const form = document.getElementById('form');
    const emailInput = document.getElementById('input');
    // const subscribeButton = document.getElementById('subscribe');
    const thanksMessage = document.querySelector('.thanks-message');
    const dismissButton = document.getElementById('dismiss');
    const emailPlaceholder = document.querySelector('.thanks-mess-para span');
  
   
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
   
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = emailInput.value.trim();
  
      if (isValidEmail(email)) {
        card_1.classList.add('hide');
        thanksMessage.classList.remove('hide');
        emailPlaceholder.textContent = email;
        emailInput.classList.remove('error');
      } else {
        emailInput.classList.add('error');
        emailInput.placeholder = 'Invalid email address';
        emailInput.value = '';
      }
    });
  
  
    dismissButton.addEventListener('click', () => {
     
      thanksMessage.classList.add('hide');
      card_1.classList.remove('hide');
      emailInput.value = '';
      emailInput.placeholder = 'email@company.com';
      emailInput.classList.remove('error');
    });
  });

