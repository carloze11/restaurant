export { loadMenu }

const loadMenu = () => {
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    h1.textContent = 'menu';
    
    content.appendChild(h1);
  };