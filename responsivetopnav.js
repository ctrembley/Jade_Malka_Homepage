function myFunction() {
    let x = document.getElementById("mytopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    x.insertAdjacentHTML("afterbegin", "<br id='rm1'><br id='rm2'>");
    } else {
    x.className = "topnav";
    let remove1 = document.getElementById("rm1");
    let remove2 = document.getElementById("rm2");
    remove1.remove();
    remove2.remove();
    }
}