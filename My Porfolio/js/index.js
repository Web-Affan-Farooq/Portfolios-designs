// __ sidebar settings__

let sideBarButton = document.querySelector("#menu-icon");
sideBarButton.style.zIndex = 2000;
let nav = document.querySelector(".navbar");
let flag = 0;
sideBarButton.addEventListener('click',showNavbar);
function showNavbar() {
if(flag === 0) {
    sideBarButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    nav.style.display = "grid";
    flag = 1;
} else {
    sideBarButton.innerHTML = `<i class="ri-menu-3-line"></i>`
    nav.style.display = "none";
    flag = 0;
}
}
// let typing = new Typed(
//     '.typed',
//     {
//         strings:["HTML","CSS","Javascript","Typescript","Node.JS"],
//         typeSpeed:100,
//         backSpeed:40,
//         loop:true,
//         shuffle:true,
//     }
// )
