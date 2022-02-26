/**
 * ThreeJS Particle System
 * 
 * This file contains all the interaction with ThreeJS
 */

// Particle Engine!
let engine;

// ThreeJS
let camera, scene, renderer, clock, controls;

// DatGUI
let gui;
// DatGUI Folders
let animation;
// DatGUI Settings
let anim = {
    speed: 1.0,
    scale: 1.0,
    color: 0xFFFF00,
    wireframe: false,
    
};


init();
animate();

function init_gui() {
    gui = new dat.GUI({name: 'Particle Controls'});
    animation = gui.addFolder('Animation Settings');
    animation.add(anim, "speed", 0.0, 10.0, 0.05);
    animation.add(anim, "scale", 0.0, 3.0, 0.25);
    animation.addColor(anim, 'color');
    animation.add(anim, 'wireframe');
}

function init_three() {
    engine = new ParticleEngine(); // Doesn't do much yet
    clock = new THREE.Clock(true); // Will autostart

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize );
}

function init() {
    init_gui();
    init_three();
}

/**
 *  animate() - Calls each individual animation frame and renders it.
 */
function animate() {
    requestAnimationFrame( animate );

    render();

    renderer.render( scene, camera );
}

/**
 * render() - Manipulates the scene property for the current render frame
 */
function render() {

}

/**
 * onWindowResize() - Called when the window is resized
 */
function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}
