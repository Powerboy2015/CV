const img = document.querySelectorAll('img.bannerPic');

let i = 0;
let slidetime = 10000;

function repeatBanner() {
    document.querySelector('.active').classList.remove('active');

    if (i < img.length - 1) {
        img[i].classList.add('active');
        i++;
    } else {
        img[i].classList.add('active');
        i = 0;
    }
    setTimeout(repeatBanner,slidetime);
}

repeatBanner();
