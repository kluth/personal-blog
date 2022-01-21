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
document.addEventListener('DOMContentLoaded', function () {
    console.log('Loaded.');
});
var gotoPost = function () {
    document.location.href = '/post.html';
};
var goHome = function () {
    document.location.href = '/index.html';
};
