import {html, render} from 'https://unpkg.com/lit-html?module';

const myTemplate = (name) => html`<p>Hello ${name}</p>`;
render(myTemplate('World'), document.body);
