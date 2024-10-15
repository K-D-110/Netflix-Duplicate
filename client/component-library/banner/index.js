let tmpl = document.createElement('template');

class Banner extends HTMLElement {
  constructor() {
    super();
    const { message, visible = false, variant = 'info' } = this.dataset;

    // change false data attributes value from a string to a boolean
    this._visible = visible === 'false' || !visible ? false : true;
    const className = this.visible ? variant : `"${variant} hidden"`;

    tmpl.innerHTML = `
      <link rel="stylesheet" href="/component-library/banner/style.css" />
      <div class=${className}>
      <button class="close" type="text">X</button>
      <p>${message}</p>
      </div>
  `;
    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(tmpl.content.cloneNode(true));

    this._closeBtn = shadowRoot.querySelector('button');
    this._div = shadowRoot.querySelector('div');
    this._message;
    this._messageContainer = shadowRoot.querySelector('p');
    this._variant = variant;
  }

  connectedCallback() {
    this._closeBtn.addEventListener('click', (e) => {
      this.visible = false;
    });
  }

  get message() {
    return this._message;
  }

  set message(val) {
    this._message = val;
    this._messageContainer.innerText = val;
  }

  get visible() {
    return this._visible;
  }

  set visible(val) {
    if (val === this._visible) return;

    this._visible = val;
    this._div.classList.toggle('hidden');
  }

  get variant() {
    return this._variant;
  }

  set variant(val) {
    if (this._variant === val) {
      return;
    }
    this._div.classList.remove(this._variant);
    this._variant = val;
    this._div.classList.add(val);
  }
}

customElements.define('flix-banner', Banner);

export default Banner;
