// TypeScript file 左鳍
class Body4 extends eui.Component {
    private bg: egret.Bitmap;
    private tw1: egret.Tween;
    private fishId: number;
    private type: number;
    public constructor(type, ind, scale) {
        super();
        this.skinName = "Body4Skin";
        this.fishId = ind;
        this.type = type;
        this.init(scale);
    }
    private init(scale): void {
        this.bg = new egret.Bitmap(RES.getRes(`${GameLogic.getInstance().clcShape(scale)}${this.type}4${this.fishId}l_png`));
        // this.bg = new egret.Bitmap(RES.getRes(`a4l_png`));
        // this.bg.width = 400*0.4;
        // this.bg.height = 400*0.4;
        this.bg.width = 400 * scale;
        this.bg.height = 400 * scale;
        this.addChild(this.bg);
        // this.x = 112*0.4;
        // this.y = 163*0.4;
        // this.anchorOffsetX = 112*0.4;
        // this.anchorOffsetY = 163*0.4;
        this.x = 112 * scale;
        this.y = 163 * scale;
        this.anchorOffsetX = 112 * scale;
        this.anchorOffsetY = 163 * scale;
        let zeroX = this.x;
        let zeroY = this.y;
        let scaleMX = 1;
        let scaleMY = 0.2;
        let step = GameLogic.getInstance().bodyStep;
        this.tw1 = egret.Tween.get(this, { loop: true });
        this.tw1.to({ x: zeroX, y: zeroY, rotation: 15, scaleY: 1 - scaleMY }, step)
            .to({ x: zeroX, y: zeroY, rotation: 0, scaleY: 1 }, step)
            .to({ x: zeroX, y: zeroY, rotation: -15, scaleY: 1 - scaleMY }, step)
            .to({ x: zeroX, y: zeroY, rotation: 0, scaleY: 1 }, step);//鱼动画
    }
    /**清除缓动动画 */
    public clear(): void {
        egret.Tween.removeTweens(this);
    }
}