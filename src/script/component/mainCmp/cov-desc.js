import img from '../../../images/who.jpg';

class CovDesc extends HTMLElement{
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
      width: 90%;
      margin: 50px 5%;
      text-align: center;
    }
    .content {
      width: 55%;
      float: left;
      padding-right: 30px;
      text-align: justify;
    }
    img {
      width: 45%;
      float: right;
      border-radius: 20px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    }
    h1 {
      padding: 50px;
    }
    .clear {
      clear: both;
    }
    @media screen and (max-width: 800px) {
      .content {
        width: 100%;
        float: none;
        padding-right: 0;
      }
      img {
        width: 100%;
        float: none;
        margin-top: 30px;
        border-radius: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
      }
    }
    </style>

    <h1>ABOUT COVID-19</h1>
    <div class='content'>
      <h2>Apa itu COVID-19?</h2>
      <p>Penyakit coronavirus 2019 (COVID-19) didefinisikan sebagai penyakit yang disebabkan oleh coronavirus baru yang sekarang disebut sindroma pernafasan akut parah coronavirus 2 (SARS-CoV-2; sebelumnya disebut 2019-nCoV), yang pertama kali diidentifikasi di tengah merebaknya kasus penyakit pernapasan di Kota Wuhan, Provinsi Hubei, Cina. Awalnya dilaporkan kepada WHO pada 31 Desember 2019. Pada 30 Januari 2020, WHO menyatakan wabah COVID-19 sebagai darurat kesehatan global.
      Pada 11 Maret 2020, WHO mendeklarasikan COVID-19 sebagai pandemi global, penunjukan serupa yang pertama sejak menyatakan influenza H1N1 sebagai pandemi pada tahun 2009.</p>
      <br/>
      <h2>Bagaimana COVID-19 Menular?</h2>
      <p>COVID-19 adalah penyakit baru dan para peneliti masih mempelajari bagaimana cara penularannya. Dari berbagai penelitian, metode penyebaran utama penyakit ini diduga adalah melalui droplet saluran pernapasan dan kontak dekat dengan penderita. Droplet merupakan partikel kecil dari mulut penderita yang dapat mengandung virus penyakit, yang dihasilkan pada saat batuk, bersin, atau berbicara. Droplet dapat melewati sampai jarak tertentu (biasanya 1 meter). Droplet bisa menempel di pakaian atau benda di sekitar penderita pada saat batuk atau bersin. Namun, partikel droplet cukup besar sehingga tidak akan bertahan atau mengendap di udara dalam waktu yang lama. Namun, masyarakat diwajibkan untuk menggunakan masker kain yang menutupi hidung dan mulut untuk mencegah penyebaran droplet.</p>
    </div>
    <img src='${img}'>
    <div class='clear'></div>`
  }
}

customElements.define('cov-desc',CovDesc);
