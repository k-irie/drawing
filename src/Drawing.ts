

class Drawing {
    // 幅と高さをプロパティとして持つことにする
    //  #width (プライベート変数)
    #width: number = 512
    //  アクセサメソッドを使い直接外部からアクセス出来ないようにする
    get width(): number {
        return this.#width
    }
    set width(w:number){
        if(this.canvas && w > 0){
            this.#width = this.canvas.width = w
        }
    }
    //  #height (プライベート変数)
    #height: number = 512
    //  アクセサメソッドを使い直接外部からアクセス出来ないようにする
    get height(): number {
        return this.#height
    }
    set height(h:number) {
        if (this.canvas && h>0){
            this.#height = this.canvas.height = h
        }
    }
    // 描画対象のcanvasエレメント
    canvas: HTMLCanvasElement | null = null
    // 上の2D描画エンジン
    context: CanvasRenderingContext2D | null = null

    /**
     * 
     * @param selector  canvasエレメントを設置するエレメントへのセレクター
     * @param width     canvasの幅(既定値：512ピクセル)
     * @param height    canvasの高さ(既定値：512ピクセル)
     */
    constructor(selector: string, width: number = 512, height = 512) {
        // 新しいHTML canvasエレメントを生成する
        this.canvas = document.createElement('canvas')
        const e = document.querySelector(selector)
        if (e){
            // 指定された高さと幅にする
            this.height = this.canvas.height = height
            this.width = this.canvas.width = width
            // canvasエレメントを指定された場所に配置する
            e.append(this.canvas)
            // canvasエレメントから2D描画エンジンを参照する
            this.context = this.canvas.getContext('2d')
        }

    }
}