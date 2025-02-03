window.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelectorAll('.button');
    if(button.length) {
        button.forEach(btn => {
            const btnWidth = btn.clientWidth;
            for(let i = 0; i < btnWidth / 1.7; i++) {
                let span = document.createElement('span');
                span.style.left = `${i * 2}px`;
                let randDelay = (Math.random() * 1) + 0;
                span.style.transitionDelay = `${randDelay}s`;
                btn.appendChild(span);
            }
        })
    }
});