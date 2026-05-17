import './style.css'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { navigateTo, router } from './router';

const root = document.getElementById('app');
function initalLayout() {
    root.innerHTML = `
    ${Header()}
    <main class="main">
        <h1 class="title">Vítejte na mém portfoliu</h1>
        <p class="paragraph">Toto je ukázka mého portfolia vytvořeného pomocí JavaScriptu.</p>
    </main>
    ${Footer()}
    `
}
initalLayout();

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded" , () => {
    document.body.addEventListener("click", (event) => {
        if(event.target.matches("[data-link]")) {
         navigateTo(event.target.href);
        }
    });
    router();
    });