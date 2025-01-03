// literally the only reason this is in typescript is because you wanted to famillairise yourself with it
// but for what? Remember this experience has not been great.

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
export default class GlobeRender {
    scene: THREE.Scene;
    camera: THREE.Camera;
    renderer: THREE.WebGLRenderer;
    renderElement: HTMLElement;
    loader: GLTFLoader;

    //sets up the class with everything we need
    constructor(base: HTMLElement) {
        console.log(base);
        this.renderElement = base;
        this.scene = new THREE.Scene();
        this.loader = new GLTFLoader();
        let elSize = base.getBoundingClientRect();
        this.camera = new THREE.PerspectiveCamera(
            75,
            elSize.width / elSize.height,
            0.1,
            1000
        );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(elSize.width, elSize.height);

        if (base.childElementCount > 0) {
            base.replaceChild(this.renderer.domElement, base.children[0]);
        } else {
            base.appendChild(this.renderer.domElement);
        }
    }

    //I am so hoping I can do this another way someday.
    setupScene() {
        // creates the object
        let sphere = this.CreateSphere(1, 1, 1, 0x00ff00);
        this.loadCustomModel("/middleblobe.glb").then((data: any) => {
            console.log(data.scene);
            // this.scene.add(cube);
            this.setCamera(0, 0, 5);
            this.camera.add(data.scene);
            data.scene.position.z = -10;
            data.scene.rotation.x = THREE.MathUtils.degToRad(90);
            data.scene.position.y = -1;
            // this.scene.add(cube);
            this.scene.add(this.camera);
            // console.log(resp);
            this.setBackground("#090911");
            this.startAnimation();
        });
    }

    // creates simple wireframe Sphere we use for the background
    CreateSphere(x: number, y: number, z: number, color) {
        let geometry = new THREE.SphereGeometry(100, 100, 100);
        let wireframe = new THREE.WireframeGeometry(geometry);
        const line = new THREE.LineSegments(wireframe);
        // I wish I got taught how to fix these nonexistent errors. They are making me so annoyed.
        line.material.depthTest = false;
        line.material.opacity = 0.25;
        line.material.transparent = false;
        return this.scene.add(line);
    }

    setBackground(color) {
        this.scene.background = new THREE.Color(color);
    }

    setCamera(x, y, z) {
        this.camera.position.set(y, x, z);
    }

    startAnimation() {
        this.renderer.setAnimationLoop(this.animate.bind(this));
    }

    animate() {
        this.camera.rotation.y += 0.001;
        this.camera.rotation.z += 0.001;

        this.renderer.render(this.scene, this.camera);
    }

    // loads a model from the available files.
    // needs a promise because of the load method being async.
    loadCustomModel(path: string) {
        return new Promise((resolve, reject) => {
            this.loader.load(
                path,
                function (gltf) {
                    console.log("Object found, Added and returned!");

                    console.log(gltf.scene.children);

                    resolve(gltf);
                },
                undefined,
                function (error) {
                    console.error(error);
                }
            );
        });
    }
}
