export {pageLoad}

const pageLoad = () => {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    header.textContent = "Eevee's Eateries!"
    const img = document.createElement('img');
    img.src="#"
    const p = document.createElement('p');
    p.textContent = "Welcome to Eevee's Eateries! The best place for all felines to feast. Try our brand new dish 'Deep Dish Catnip'!"

    content.appendChild(header);
    content.appendChild(img);
    content.appendChild(p);

    return content;
}