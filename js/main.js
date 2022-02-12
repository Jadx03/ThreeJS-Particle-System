/**
 * ThreeJS Particle System
 * 
 * This file contains all the interaction with ThreeJS
 */
let camera, scene, renderer, clock, cube;

init();
animate();

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 1000 );


    clock = new THREE.Clock(true); // Will autostart

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const geometry = new THREE.SphereGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;
    cube.position.z = -5;

    window.addEventListener( 'resize', onWindowResize );
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
    cube.position.y = Math.cos(1 + clock.getElapsedTime());
    cube.position.x = Math.sin(1 + clock.getElapsedTime());


    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
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