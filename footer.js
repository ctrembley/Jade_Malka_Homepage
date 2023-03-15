//source for utilizing javascript to insert html into other html files: https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      <footer>
        <br><br><br><br><br><br>
        <div>
            <a href="about.html">About</a>
            <a href="headshot.html">Headshot & Resume</a>
            <a href="gallery.html">Gallery</a>
        </div>
        <br>
        <div>
          <a href="letsconnect.html">Contact Jade</a>
        </div>
        <br>
        <div>
            <a href="https://www.youtube.com/channel/UC09q8QILdx3pXLsLqcsZ28Q"> <i class="fa fa-youtube-play" style="font-size:24px"></i></a>
            <a href="https://www.instagram.com/jademalka/"> <i class="fa fa-instagram" style="font-size:24px"></i></a>
        </div>
        <br><br><br><br><br><br>
    </footer>
      `;
    }
  }

  customElements.define('footer-component', Footer);
