class ContactSect extends HTMLElement{
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
      font-family: "Comic Sans MS";
    }
    :host {
      display: block;
      padding-top: 80px;
      margin-top: 40px;
      width: 100%;
      height: 400px;
      background: rgb(2,0,36);
      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(80,19,110,1) 47%);
      color: white;
      text-align: center;
    }
    .container {
      display: flex;
      flex-direction: row;
    }
    .item {
      flex-basis: 33%;
      padding: 70px;
    }
    @media screen and (max-width: 800px) {
      :host {
        height: auto;
        padding: 20px;
      }
      .container {
        display: flex;
        flex-direction: column;
      }
      .item {
        flex-basis: 0;
        flex-grow: 1;
        padding: 20px;
      }
    </style>
    <p>HUBUNGI KAMI</p>
    <h2>RELAWAN COVID-19</h2>
    <div class='container'>
    <div class='item'>
      <p>EMAIL</p>
      <h3>luckyguy982@gmail.com</h3>
    </div>
    <div class='item'>
      <p>ALAMAT</p>
      <h3>MAKASSAR, JL. PENGAYOMAN 10 NO. 10</h3>
    </div>
    <div class='item'>
      <p>JAM KERJA</p>
      <h3>24 JAM</h3>
    </div>`
  }
}

customElements.define('contact-section',ContactSect);
