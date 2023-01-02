const about = document.querySelector('.about');
let dist = null;
if (window.innerWidth < 768) {
    dist = 250;
} else {
    dist = 500;
}

setTimeout(() => {
    about.classList.add('show-me');
    about.classList.remove('hide-me');
}, 1000);

function checkVisible(elm, threshold, mode) {
    threshold = threshold || 0;
    mode = mode || 'visible';

    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    var above = rect.bottom - threshold < 0;
    var below = rect.top - viewHeight + threshold >= 0;

    return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
}

window.addEventListener('scroll', () => {
    const contentGroup = document.querySelectorAll('.content');
    const teste = []
    for (i = 0; i < contentGroup.length; i++) {
        teste.push(checkVisible(contentGroup[i], dist));
        if (checkVisible(contentGroup[i], dist)) {
            contentGroup[i].classList.add('show-me');
            contentGroup[i].classList.remove('hide-me');
        } else {
            contentGroup[i].classList.add('hide-me');
            contentGroup[i].classList.remove('show-me');
        }
    }
});


