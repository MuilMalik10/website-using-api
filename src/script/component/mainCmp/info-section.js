import cuci from '../../../images/cuci.jpg';
import exercise from '../../../images/exercise.jpg';
import food from '../../../images/food.jpg';
import mask from '../../../images/mask.jpg';

class InfoSection extends HTMLElement{
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
      margin: 150px 5%;
      text-align: center;
    }
    .container {
      display: flex;
      flex-direction: column;
    }
    .item {
      flex-grow: 1;
      padding: 30px 0;
      text-align: justify;
    }
    .kiri {
      float: left;
      margin-right: 30px;
    }
    .kanan {
      float: right;
      margin-left: 30px;
    }
    .item > img {
      width: 500px;
      height: 350px;
      border-radius: 20px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    }
    @media screen and (max-width: 800px) {
      .kiri {
        float: none;
        margin-right: 0;
      }
      .kanan {
        float: none;
        margin-left: 0;
      }
      .item > img {
        width: 100%;
        height: 350px;
        border-radius: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
      }

    </style>

    <h1>CARA MENCEGAH PENULARAN COVID-19</h1>
    <br/>
    <div class='container'>
      <div class='item'><img src='${cuci}' class='kiri'><h2>CUCI TANGAN</h2><br/>Dengan jumlah orang yang terinfeksi virus corona meningkat di seluruh dunia setiap hari, Organisasi Kesehatan Dunia (WHO) telah menyarankan semua orang untuk secara teratur dan menyeluruh membersihkan tangan mereka. Ini bisa dengan gosok berbasis alkohol atau dengan sabun dan air. Harapannya adalah kebersihan tangan yang baik akan membatasi penyebaran virus.
      Untuk mencuci tangan Anda secara efektif, perlu dilakukan dengan air bersih dan sabun. Tangan harus digosok bersama setidaknya selama 20 detik, diikuti dengan pembilasan. Penggunaan sabun sangat penting untuk mencuci tangan agar efektif karena penelitian telah menunjukkan bahwa mencuci dengan sabun secara signifikan mengurangi keberadaan mikroba (virus dan bakteri) di tangan. Tetapi satu bagian yang sering diabaikan dari mencuci tangan adalah pengeringan tangan - yang juga merupakan bagian dari kebersihan tangan yang efektif.</div>
      <div class='item'><img src='${exercise}' class='kanan'><h2>OLAHRAGA</h2><br/>Ketika kasus COVID-19 baru terus muncul di Wilayah Eropa WHO, banyak orang sehat diminta untuk tinggal di rumah di karantina sendiri. Di beberapa negara, pusat kebugaran dan lokasi lain di mana individu biasanya aktif, akan tetap ditutup sementara. Tinggal di rumah dalam waktu lama dapat menimbulkan tantangan besar untuk tetap aktif secara fisik. Perilaku menetap dan tingkat aktivitas fisik yang rendah dapat memiliki efek negatif pada kesehatan, kesejahteraan, dan kualitas hidup individu. Karantina sendiri juga dapat menyebabkan stres tambahan dan menantang kesehatan mental warga. Kegiatan fisik dan teknik relaksasi dapat menjadi alat yang berharga untuk membantu Anda tetap tenang dan terus melindungi kesehatan Anda selama ini.</div>
      <div class='item'><img src='${food}' class='kiri'><h2>MAKANAN BERGIZI</h2><br/>"Biarkan makanan menjadi obatmu dan obat menjadi makananmu." Gagasan bahwa diet bergizi dan aman mendukung kesehatan yang baik telah ada setidaknya sejak jaman dahulu, seperti kutipan ini, sering disalahartikan kepada Hippocrates, membuktikan. Apa yang harus dimakan - dan bukan untuk dimakan - secara rutin menjadi berita utama, ketika konsumen mencoba menyeimbangkan saran ilmiah dan tren pemasaran dengan tradisi kuliner mereka sendiri, buku saku, dan pilihan makanan lokal. Sekarang, dengan begitu banyak orang jatuh sakit akibat coronavirus (COVID-19), diet yang tidak sehat berkontribusi pada kondisi yang sudah ada sebelumnya yang membuat mereka lebih berisiko. Dan di sebagian besar dunia, penyakit juga berarti hilangnya pendapatan. Karenanya pandemi ini telah meningkatkan taruhan bagi konsumen, produsen dan pembuat kebijakan di seluruh dunia. Apa yang diperlukan untuk mendapatkan makanan sehat? Jawaban atas pertanyaan ini sama mendesaknya dan relevan seperti sebelumnya.</div>
      <div class='item'><img src='${mask}' class='kanan'><h2>GUNAKAN MASKER</h2><br/>Pemakaian masker wajah selama pandemi COVID-19 telah menerima berbagai rekomendasi dari berbagai lembaga kesehatan masyarakat dan pemerintah. Organisasi Kesehatan Dunia dan organisasi kesehatan masyarakat lainnya sepakat bahwa masker dapat membatasi penyebaran penyakit virus pernapasan seperti COVID-19. Namun, topik tersebut telah menjadi bahan perdebatan, dengan beberapa lembaga kesehatan masyarakat dan pemerintah tidak menyetujui protokol untuk memakai masker wajah. Pada awal Mei 2020, 88% populasi dunia tinggal di negara-negara yang merekomendasikan atau mengamanatkan penggunaan topeng di depan umum; lebih dari 75 negara telah mengamanatkan penggunaan masker.</div>
    </div>
`
  }
}

customElements.define('info-section',InfoSection);
