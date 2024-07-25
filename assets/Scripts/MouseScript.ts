import { _decorator, Component, EventMouse, Input, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MouseScript')
export class MouseScript extends Component {
    start() {
        this.node.on(Input.EventType.MOUSE_DOWN, (event: EventMouse) => {
            console.log(event.currentTarget.name);
        })
    }

    update(deltaTime: number) {
        
    }
}


