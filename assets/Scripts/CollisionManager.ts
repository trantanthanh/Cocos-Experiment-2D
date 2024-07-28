import { _decorator, Collider2D, Component, Contact2DType, IPhysics2DContact, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CollisionManager')
export class CollisionManager extends Component {
    collider: Collider2D = null;
    start() {
        this.collider = this.getComponent(Collider2D);
        this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null)
    {
        console.log("OnBeginContact : " + otherCollider.name);
    }

    update(deltaTime: number) {
        
    }
}


