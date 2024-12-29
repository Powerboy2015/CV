import { render } from "less";
import * as THREE from "three";

export default class GlobeRender {
    scene: THREE.Scene;
    camera: THREE.Camera;
    renderer: THREE.WebGLRenderer;
    renderElement: HTMLElement;
    // creates a scene within the given base
    constructor(base: HTMLElement) {
        console.log(base);
        this.renderElement = base;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75,
            base.clientWidth / base.clientHeight,
            0.1,
            1000
        );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(base.clientWidth, base.clientHeight);

        if (base.childElementCount > 0) {
            base.replaceChild(this.renderer.domElement, base.children[0]);
        } else {
            base.appendChild(this.renderer.domElement);
        }
    }

    CreateCube(x: number, y: number, z: number, color: string) {
        const geometry = new THREE.BoxGeometry(x, y, z);
        const material = new THREE.MeshBasicMaterial({ color: color });
        const cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        console.log("added cube");
    }

    setCamera(x, y, z) {
        this.camera.position.set(y, x, z);
    }

    startAnimation() {
        this.renderer.setAnimationLoop(this.animate.bind(this));
    }

    animate() {
        this.renderer.render(this.scene, this.camera);
    }
}
