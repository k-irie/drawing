"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Drawing_width, _Drawing_height;
class Drawing {
    //  アクセサメソッドを使い直接外部からアクセス出来ないようにする
    get width() {
        return __classPrivateFieldGet(this, _Drawing_width, "f");
    }
    set width(w) {
        if (this.canvas && w > 0) {
            __classPrivateFieldSet(this, _Drawing_width, this.canvas.width = w, "f");
        }
    }
    //  アクセサメソッドを使い直接外部からアクセス出来ないようにする
    get height() {
        return __classPrivateFieldGet(this, _Drawing_height, "f");
    }
    set height(h) {
        if (this.canvas && h > 0) {
            __classPrivateFieldSet(this, _Drawing_height, this.canvas.height = h, "f");
        }
    }
    /**
     *
     * @param x 左上の座標
     * @param y 左上の座標
     * @param w 四角形の幅
     * @param h 四角形の高さ
     * @param f 1:塗り潰し、2:枠、3:塗り潰し+枠
     */
    rect(x, y, w, h, f) {
        if (f & 1) { // 塗り潰し
            this.context?.fillRect(x, y, w, h);
        }
        if (f & 2) { // 枠
            this.context?.strokeRect(x, y, w, h);
        }
    }
    /**
     *
     * @param selector  canvasエレメントを設置するエレメントへのセレクター
     * @param width     canvasの幅(既定値：512ピクセル)
     * @param height    canvasの高さ(既定値：512ピクセル)
     */
    constructor(selector, width = 512, height = 512) {
        // 幅と高さをプロパティとして持つことにする
        //  #width (プライベート変数)
        _Drawing_width.set(this, 512
        //  アクセサメソッドを使い直接外部からアクセス出来ないようにする
        );
        //  #height (プライベート変数)
        _Drawing_height.set(this, 512
        //  アクセサメソッドを使い直接外部からアクセス出来ないようにする
        );
        // 描画対象のcanvasエレメント
        this.canvas = null;
        // 上の2D描画エンジン
        this.context = null;
        // 新しいHTML canvasエレメントを生成する
        this.canvas = document.createElement('canvas');
        const e = document.querySelector(selector);
        if (e) {
            // 指定された高さと幅にする
            this.height = this.canvas.height = height;
            this.width = this.canvas.width = width;
            // canvasエレメントを指定された場所に配置する
            e.append(this.canvas);
            // canvasエレメントから2D描画エンジンを参照する
            this.context = this.canvas.getContext('2d');
        }
    }
}
_Drawing_width = new WeakMap(), _Drawing_height = new WeakMap();
