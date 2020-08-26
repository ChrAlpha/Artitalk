function fadeOut (el) {
    el.style.opacity = 1
    el.style.display = 'none';

    (function fade () {
        if ((el.style.opacity -= 0.1) < 0) {
            el.style.display = 'none'
        } else {
            window.requestAnimationFrame(fade)
        }
    })()
}

// fade in

function fadeIn (el, display) {
    el.style.opacity = 0
    el.style.display = display || '';

    (function fade () {
        var val = parseFloat(el.style.opacity)
        if (!((val += 0.1) > 1)) {
            el.style.opacity = val
            window.requestAnimationFrame(fade)
        }
    })()
}