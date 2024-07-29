import { __private, _decorator, Color, Component, EventKeyboard, Input, input, KeyCode, Node, ProgressBar } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ProgressScript')
export class ProgressScript extends Component {
    maxHealth: number = 100;
    currentHealth: number = 100;
    healthChangeSpeed : number = 30;
    isDeceasingHealth: boolean = false;
    isIncreasingHealth: boolean = false;
    start() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        this.updateHealthBar();
    }
    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.ARROW_RIGHT:
                {
                    this.isDeceasingHealth = true;
                    break;
                }
            case KeyCode.ARROW_LEFT:
                {
                    this.isIncreasingHealth = true;
                    break;
                }
        }
    }

    onKeyUp(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.ARROW_RIGHT:
                {
                    this.isDeceasingHealth = false;
                }
                break;
            case KeyCode.ARROW_LEFT:
                {
                    this.isIncreasingHealth = false;
                }
                break;
        }
    }

    private IncreaseHealth(deltaTime : number) {
        if (this.currentHealth > 0) {
            this.currentHealth -= this.healthChangeSpeed * deltaTime;
            this.updateHealthBar();
        }
    }

    private DecreaseHealth(deltaTime : number) {
        if (this.currentHealth < this.maxHealth) {
            this.currentHealth += this.healthChangeSpeed * deltaTime;
            this.updateHealthBar();
        }
    }

    updateHealthBar() {
        // TODO: Update the health bar
        this.getComponent(ProgressBar).progress = this.currentHealth / this.maxHealth;

        if (this.currentHealth > 70) {
            this.getComponent(ProgressBar).barSprite.color = Color.GREEN;
        }
        else if (this.currentHealth > 35) {
            this.getComponent(ProgressBar).barSprite.color = Color.YELLOW;
        }
        else {
            this.getComponent(ProgressBar).barSprite.color = Color.RED;
        }
    }

    update(deltaTime: number) {
        this.isDeceasingHealth && this.DecreaseHealth(deltaTime);
        this.isIncreasingHealth && this.IncreaseHealth(deltaTime);
    }
}


