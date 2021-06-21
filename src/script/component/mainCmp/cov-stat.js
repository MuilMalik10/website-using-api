class CovStat extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode : 'open'});
  }

  set data(data){
    this._data = data;
    this.render();
  }

  set data2(data){
    this._data2 = data;
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
      width: 90%;
      margin: 0 5%;
      border-radius: 20px;
      box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.2);
    }
    .container {
      padding: 40px 0;
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
    }
    .item{
      flex-grow: 1;
      border-radius: 20px;
      margin: 0 15px;
      height: 150px;
      box-shadow: 0px 2px 7px 0 rgba(0, 0, 0, 0.3);
    }
    .confirm {
      background-color: rgb(254, 209, 177);
    }
    .recovered {
      background-color: rgb(145, 220, 189);
    }
    .deaths {
      background-color: rgb(255, 180, 181);
    }
    .confirm, .recovered, .deaths {
      padding: 15px;
      line-height: 2em;
    }
    h1 {
      text-align: center;
    }
    .teks-kiri {
      float: left;
    }
    .teks-kanan {
      float: right;
      text-align: right;
    }
    img {
      width: 100%;
    }
    @media screen and (max-width: 800px) {
      .container {
        padding: 35px 0;
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      .item{
        flex-grow: 1;
        border-radius: 20px;
        height: 150px;
        margin: 20px 0;
        box-shadow: 0px 2px 7px 0 rgba(0, 0, 0, 0.3);
      }

    }

    </style>
    <h1> STATUS TERKINI</h1>

    <div class='container'>
      <div class='item confirm'>
        <h3>TERKONFIRMASI</h3>
        <div class='teks-kiri'>
          <h4>Dunia</h4>
          <h4>Indonesia</h4>
        </div>
        <div class='teks-kanan'>
          <h4>${this._data.confirmed.value}</h4>
          <h4>${this._data2.confirmed.value}</h4>
        </div>
      </div>

      <div class='item recovered'>
        <h3>SEMBUH</h3>
        <div class='teks-kiri'>
          <h4>Dunia</h4>
          <h4>Indonesia</h4>
        </div>
        <div class='teks-kanan'>
          <h4>${this._data.recovered.value}</h4>
          <h4>${this._data2.recovered.value}</h4>
        </div>
      </div>

      <div class='item deaths'>
        <h3>MENINGGAL</h3>
        <div class='teks-kiri'>
          <h4>Dunia</h4>
          <h4>Indonesia</h4>
        </div>
        <div class='teks-kanan'>
          <h4>${this._data.deaths.value}</h4>
          <h4>${this._data2.deaths.value}</h4>
        </div>
      </div>
    </div>

    <img src='${this._data.image}'></img>`
  }
}

customElements.define('cov-stat', CovStat);
