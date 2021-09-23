const heroChildren = document.getElementById("hero").children;

window.addEventListener('scroll', () => {
    var scrollTop = document.documentElement.scrollTop;
    heroChildren[0].style.transform = `translateY(${ scrollTop * -.6 }px)`;
    heroChildren[2].style.transform = `translateY(${ scrollTop * .6 }px)`;
});

var date = new Date();
document.getElementById("cal").innerHTML = date;