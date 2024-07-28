import { _decorator, Component, EventKeyboard, input, Input, Animation, KeyCode, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('KeyBoardScript')
export class KeyBoardScript extends Component {

    @property moveSpeed: number = 100;
    movingDir: number = 1;// 1: right, -1: left
    isWalking: boolean = false;
    animation: Animation = null;
    onLoad() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        this.animation = this.getComponent(Animation);
    }

    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.ARROW_RIGHT:
                {
                    this.isWalking = true;
                    this.movingDir = 1;
                    this.animation.play('run');
                    break;
                }
            case KeyCode.ARROW_LEFT:
                {
                    this.animation.play('run');
                    this.isWalking = true;
                    this.movingDir = -1;
                    break;
                }
        }
    }

    onKeyUp(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.ARROW_RIGHT:
            case KeyCode.ARROW_LEFT:
                {
                    this.animation.stop();
                    this.isWalking = false;
                    break;
                }
            case KeyCode.SPACE:
                {
                    this.animation.crossFade("attack");
                    break;
                }
        }
    }

    start() {

    }

    update(deltaTime: number) {
        if (this.isWalking) {
            this.node.setPosition(this.node.getPosition().x + this.movingDir * this.moveSpeed * deltaTime, this.node.getPosition().y);
        }
    }
}


