import { _decorator, Component, EventKeyboard, input, Input, Animation, KeyCode, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('KeyBoardScript')
export class KeyBoardScript extends Component {

    @property moveSpeed: number = 100;
    movingDir: number = 1;// 1: right, -1: left
    isWalking: boolean = false;
    onLoad() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.ARROW_RIGHT:
                {
                    this.isWalking = true;
                    this.movingDir = 1;
                    this.getComponent(Animation).crossFade('run');
                    break;
                }
            case KeyCode.ARROW_LEFT:
                {
                    this.getComponent(Animation).crossFade('run');
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
                    this.getComponent(Animation).stop();
                    this.isWalking = false;
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


