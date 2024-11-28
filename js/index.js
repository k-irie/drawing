"use strict";
const drawing = new Drawing('#life');
window.addEventListener("load", e => {
    // パックマンを描く
    const p = new ArcParams();
    // p.sd = 30
    // p.ed = 330
    p.f = 1 + 2; // 塗り潰し + 枠線
    drawing.context.fillStyle = 'yellow';
    drawing.context.strokeStyle = 'black';
    drawing.arc(100, 100, 50, p);
    let count = 0;
    let dir = 1;
    const canvas = document.querySelector('#life canvas');
    canvas?.addEventListener('click', e => {
        p.sd = count * 3;
        p.ed = 360 - count * 3;
        drawing.clearAll();
        drawing.arc(100, 100, 50, p);
        count += dir;
        if (count > 9) {
            dir = -1;
        }
        else if (count < 0) {
            count = 0;
            dir = 1;
        }
    });
});
