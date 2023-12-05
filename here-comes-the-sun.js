let rgb = 0;

let whitenBackground = setInterval(() => {
    if (rgb < 255) {
        rgb++;
        document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
    } else {
        clearInterval(whitenBackground);
    }
    }, 17
);
