import { html } from 'https://unpkg.com/lit-html@2.2.2/lit-html.js';
import { ReactiveElement } from '../utils/reactive-element.js';

export class Form extends ReactiveElement {
  state = {
    origin: 'Worka, Ethiopia',
  };

  hello = {
    userId: 1,
  };

  handleInput(event) {
    this.state.origin = event.detail;
  }

  render() {
    return html`
      <form>
        <form-input
          label="Origin"
          .hello=${this.hello}
          value="${this.state.origin}"
          @input="${this.handleInput.bind(this)}"
        ></form-input>
      </form>
    `;
  }
}

customElements.define('app-form', Form);
