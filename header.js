//source for utilizing javascript to insert html into other html files: https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/
//collapsible navbar course: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <header id="header">
        <img src="pic/jade_signature.png" alt="Page title" class="header_pic">
        <div class="topnav" id="mytopnav">
            <a href="index.html" class="home_link">Home</a>
            <a href="about.html">About</a>
            <a href="headshot.html">Headshot & Resume</a>
            <a href="gallery.html">Gallery</a>
            <a href="https://www.youtube.com/channel/UC09q8QILdx3pXLsLqcsZ28Q"> <i class="fa fa-youtube-play" style="font-size:28px"></i></a>
            <a href="https://www.instagram.com/jademalka/"> <i class="fa fa-instagram" style="font-size:28px"></i></a>
            <button onclick="window.location.href='letsconnect.html';">Contact</button>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars"></i></a>
        </div>
    </header>
    `;
  }
}

customElements.define('header-component', Header);
