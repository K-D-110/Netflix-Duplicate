let tmpl = document.createElement('template');

class Button extends HTMLElement {
  constructor() {
    super();
    const {
      value = '',
      type = 'text',
      icon,
      variant = 'primary',
    } = this.dataset;

    tmpl.innerHTML = `
      <link rel="stylesheet" href="/component-library/button/style.css" />
      <button class="${variant}" type="${type}">${value}</button>
  `;
    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(tmpl.content.cloneNode(true));

    this._value = value;
    this._button = shadowRoot.querySelector('button');
    this._variant = variant;
    this._icon = undefined;

    // use the setter so we get the icon image and styling
    this.icon = icon;
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this._button.innerText = val;
  }

  get icon() {
    return this._icon;
  }

  set icon(val) {
    if (!val || val === this.icon) return;
    this._icon = val;

    this._button.setAttribute(
      'style',
      `background-image: url(${val}); padding-left: 28px;`
    );
  }

  get variant() {
    return this._variant;
  }

  set variant(val) {
    this._button.classList.remove(this._variant);
    this._button.classList.add(val);
    this._variant = val;
  }
}

customElements.define('flix-button', Button);

export default Button;
