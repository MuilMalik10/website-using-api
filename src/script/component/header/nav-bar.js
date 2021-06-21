import $ from "jquery";

class NavBar extends HTMLElement{
  constructor(){
    super();
  }

  connectedCallback(){
    this.render();
    $("nav-bar a").click(function(){
      $("html, body").animate({ scrollTop: $(this.hash).offset().top - 80}, 1000);
      return false;
    });

    $(window).scroll(function() {
      const scroll = $(window).scrollTop();
      if (scroll >= 300) {
          $("nav").addClass("nav-height");
      } else {
          $("nav").removeClass("nav-height")
      }
    });
  }

  render(){
    this.innerHTML = `
    <style>
    nav {
      position: sticky;
      top: 0;
      padding: 10px;
      width: 100%;
      background-color: #45364B;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
      transition: ease all 0.5s;
    }
    .nav-height {
      background-color: rgba(80, 19, 110, 0.9);
      padding: 2px 10px;
    }
    nav li {
      display: inline;
      padding: 20px;
    }
    nav li > a {
      cursor: pointer;
      text-decoration: none;
      color: white;
    }
    .databar {
      display: block;
      height: 50px;
      width: 100%;
      padding: 15px;
      background-color: white;
      text-align: center;
    }
    .databar > a {
      font-size: 18px;
      text-decoration: none;
    }

    @media screen and (max-width: 800px) {
      nav {
        padding: 10px 0;
      }
      nav li {
        padding: 5px;
      }
      .nav-height {
        background-color: rgba(80, 19, 110, 0.9);
        padding: 2px 0;
      }
    }
    </style>

    <div class='databar'><a href='#data'>Data Covid Terbaru -----------></a></div>
    <nav>
      <ul>
        <li><a href="#home">HOME</li>
        <li><a href="#tentang">TENTANG</li>
        <li><a href="#info">INFO</a></li>
        <li><a href="#kontak">KONTAK</li>
      </ul>
    </nav>`;
  }
}

customElements.define('nav-bar',NavBar);
