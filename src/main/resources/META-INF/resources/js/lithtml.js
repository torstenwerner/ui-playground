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
        fetch(`/api/save/${this.value}`, {method: "POST"}).then(response => {
            const event = new CustomEvent('submit', {
                detail: {
                    message: 'Submitted value successfully',
                    value: this.value
                }
            });
            this.dispatchEvent(event);
        });
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
