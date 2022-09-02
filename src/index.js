import _ from 'lodash';
import { pageLoad } from "./pageLoad";
import { header } from "./header";


pageLoad();
header();

const tabs = document.querySelectorAll('.tab');
tabs.forEach( tab => {
    tab.addEventListener('click', () => {
        if (tab === tabs[0]) {
            alert('home!')
        }
        if (tab === tabs[1]) {
            alert('menu!')
        }
        if (tab === tabs[2]) {
            alert('contact!')
        }
    })
})

// homeTab.addEventListener('click', () => {
//     alert('hello')
//     pageLoad();
//     header();
//   });
  
//   menuTab.addEventListener('click', () => {
//     loadMenu();
//     header();

//   });
  
//   contactTab.addEventListener('click', () => {
//     loadContact();
//     header();

//   });