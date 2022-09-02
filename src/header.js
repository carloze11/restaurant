const header = () => {
  
  const body = document.querySelector('body');
  const content = document.querySelector('#content');
  const div = document.createElement('div');
  const btn = document.createElement('button');
  const header = div.appendChild(div.cloneNode()); 
  body.insertBefore(header, content);
  let homeTab = header.appendChild(btn.cloneNode());
  homeTab.classList.add('tab');
  let menuTab = header.appendChild(btn.cloneNode());
  menuTab.classList.add('tab');
  let contactTab = header.appendChild(btn.cloneNode());
  contactTab.classList.add('tab');
  homeTab.textContent = 'Home';
  menuTab.textContent = 'Menu';
  contactTab.textContent = 'Contact Us'
  
  //header styling
  header.style.display = "grid";
  header.style.justifyContent = "center";
  header.style.justifyItems = "center";
  header.style.alignItems = "end";
  header.style.alignContent = "end";
  header.style.grid = "100px / 150px 150px 150px";
  header.style.gap = "10px";
  header.style.height = "100px";
  header.style.padding = "10px";
  header.style.backgroundColor = "lightblue";
  
  //tab styling
  //i eventually want to make these buttons into clouds!
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach( x => {
    x.style.width = "100%";
    x.style.height = "50px";
    x.style.paddingTop = "0";
    x.style.fontWeight = "700";
    x.style.border = "2px solid lightgray";
    x.style.display = "grid"
    x.style.justifyContent = "center";
    x.style.alignContent = "center";
    x.style.marginBottom = "-15px";
    x.style.borderRadius = "5px";
    x.style.fontSize = "1.2rem";
    x.addEventListener("mouseover", () => {
      x.style.backgroundColor = "darkgray";
      x.style.cursor = "pointer";
    });
    x.addEventListener("mouseleave", () => {
      x.style.backgroundColor = "rgb(240, 240, 240)";
    });
  });
};

  export {header}; 