/* let options = {

}

let callback = (entries: any[], observer: any) => {
    entries.forEach(entry => {
        console.log(entry)
    });
}

let postsObserver = new IntersectionObserver(callback, options)

let posts = document.querySelectorAll('.post')

posts.forEach(post => {
    postsObserver.observe(post)
}) */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded.");
});

const gotoPost = () => {
  document.location.href = "/post.html";
};

const goHome = () => {
  document.location.href = "/index.html";
};

const toggleMenu = () => {
  let menu = document.querySelector("ul");
  menu?.classList.contains("visible-drawer")
    ? menu?.attributes.removeNamedItem('class')
    : menu?.classList.add("visible-drawer");
};
