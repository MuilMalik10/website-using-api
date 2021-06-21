import img from '../../../images/banner.png';

import './nav-bar.js';

class HeadContent extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode : 'open'});
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowDOM.innerHTML = `
    <style>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    :host {
      display: block;
      height: 450px;
      width: 100%;
      background-image: url('${img}');
      background-size: cover;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    }
    @media screen and (max-width: 800px) {
      :host {
        height: 300px;
        background-size: cover;
        background-position: right;
      }
    }
    </style>`;
  }
}

customElements.define('head-content',HeadContent);
