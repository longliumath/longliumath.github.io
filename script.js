// 点击汉堡按钮，两种效果交替出现，展开或折叠菜单
let toggleState = false;

function hamburger() {
    var body = document.body;
    var nav = document.querySelector(".nav");

    if (body.classList.contains("effect-bg")) {
        body.classList.remove("effect-bg");
    } else {
        body.classList.add("effect-bg");
    }

    if (nav.classList.contains("effect-nav")) {
        nav.classList.remove("effect-nav");
    } else {
        nav.classList.add("effect-nav");
    }
}