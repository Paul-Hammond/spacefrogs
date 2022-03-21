import WorldTimer from '../world/worldtimer.js';
import WorldCanvas from '../world/worldcanvas.js';
import InputManager from './inputmanager.js';

export default class Application {
    private worldCanvas: WorldCanvas;
    private dt: number;
    private timeOfLastUpdate: number;

    constructor() {
        this.worldCanvas = new WorldCanvas();
        WorldTimer.start();
        InputManager.initCallbacks();


        this.dt = 0;
        this.timeOfLastUpdate = performance.now();
    }

    loop(): void {

        this.dt = performance.now() - this.timeOfLastUpdate;
        this.timeOfLastUpdate = performance.now();

        this.handleInput();
        this.update(this.dt);
        this.render();

        console.log(InputManager.getMousePos());

        requestAnimationFrame(this.loop.bind(this));
    }

    handleInput(): void {

    }

    update(dt: number): void {
        WorldTimer.update(dt);
        this.worldCanvas.update(dt);
    }

    render(): void {
        this.worldCanvas.render();
    }
}

window.onkeydown = registerKey;

function registerKey(evt: KeyboardEvent) {
    if (evt.code == 'KeyG') {
        WorldTimer.togglePause();
    }
}