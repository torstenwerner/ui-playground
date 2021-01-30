import {html, LitElement} from 'https://unpkg.com/lit-element?module';

class XCounter extends LitElement {
    static get properties() {
        return {
            value: {type: Number},
            label: {type: String}
        };
    }

    constructor() {
        super();
        this.value = 0;
        this.label = "counter";
    }

    submit() {
        fetch(`/api/save/${this.value}`, {method: "POST"}).then(response =>
            console.log(`saved value ${this.value} successfully`));
    }

    render() {
        return html`
            <style>
                button,
                p {
                    display: inline-block;
                }
            </style>
            <button @click="${() => this.value--}" aria-label="decrement">-</button>
            <p>${this.label}: ${this.value}</p>
            <button @click="${() => this.value++}" aria-label="increment">+</button>
            <button @click="${() => this.submit()}" aria-label="submit">submit</button>
        `;
    }
}

customElements.define('x-counter', XCounter);
