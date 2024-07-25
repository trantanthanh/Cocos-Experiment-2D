import { _decorator, Component, EventKeyboard, input, Input, KeyCode, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('KeyBoardScript')
export class KeyBoardScript extends Component {

    onLoad(){
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown(event : EventKeyboard){
        switch (event.keyCode) {
            case KeyCode.KEY_Z:
                {
                    console.log("Z");
                    break;
                }
        }
    }

    start() {

    }

    update(deltaTime: number) {
        
    }
}


