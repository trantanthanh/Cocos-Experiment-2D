import { _decorator, AudioClip, AudioSource, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Orc')
export class Orc extends Component {
    @property(AudioClip) hit : AudioClip = null;
    audioSource : AudioSource = new AudioSource();

    start() {

    }

    onHit() {
        console.log("onHit");
        this.audioSource.playOneShot(this.hit);
    }

    update(deltaTime: number) {
        
    }
}


