window.addEventListener("scroll", function () {
    const header = document.querySelector("#head");
    const profile = document.querySelector("#artworks");
    let triggerHeight = profile.offsetHeight - 900;
  
    if (window.scrollY > triggerHeight) {
      header.classList.add("header-sticky");
    } else {
      header.classList.remove("header-sticky");
    }
  });