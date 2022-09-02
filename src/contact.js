export { loadContact }

const loadContact = () => {
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us'
    
    content.appendChild(h1);
  }