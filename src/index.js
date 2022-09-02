import _ from 'lodash';
import { pageLoad } from "./pageLoad";
import { header } from "./header";
import { loadMenu} from "./menupage";
import { loadContact } from "./contact";


pageLoad();
header();

const content = document.querySelector('#content');
const tabs = document.querySelectorAll('.tab');
tabs.forEach( tab => {
    tab.addEventListener('click', () => {
        content.innerHTML = '';
        if (tab === tabs[0]) {
            pageLoad();
        }
        if (tab === tabs[1]) {
            loadMenu();
        }
        if (tab === tabs[2]) {
            loadContact();
        }
    })
});