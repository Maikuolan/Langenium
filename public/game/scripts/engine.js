/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	Engine
	This contains the classes that manages the 3D engine.renderer
	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/


/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	Globals
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

// This object
var engine = function() {
    
    /* Game engine */
	this.renderer,
		
	this.duration = 150,
	this.keyframes = 5,
	this.interpolation = this.duration / this.keyframes;
	// Not implemented yet, but will be used for simplifying animation queue

    return this;
}

/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	Function definitions
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

engine.prototype.createScene = function () {
/* 
	Create basic scene objects - sky, etc
*/
	scene = new THREE.Scene();
	//scene.add(camera);
	
	var skyGeo = new THREE.CylinderGeometry(M / 2, M / 2, M, 64	, 64, false);

	var sky_materials = [ new THREE.MeshBasicMaterial({ 
			color: 0x66CCFF,
			shading: THREE.SmoothShading, 
			side: THREE.DoubleSide
		}),
		 new THREE.MeshBasicMaterial( { color: 0x002244, side: THREE.DoubleSide,  } )
		 ];
		 
	for ( var i = 0; i < skyGeo.faces.length; i++ ) 
	{
			if  (skyGeo.faces[ i ].centroid.y >  -16000) {
				skyGeo.faces[ i ].materialIndex = 0;
			}
			else {
				skyGeo.faces[ i ].materialIndex = 1;
			}
	}
	
	sky = new THREE.Mesh(skyGeo, new THREE.MeshFaceMaterial(sky_materials));
	sky.name = "sky";
	scene.add(sky);

	effects.water.water_tiles.push(new effects.water.makeWater(M));
	scene.add(effects.water.water_tiles[0]);
	
	effects.water.update();
	
	effects.particles.cloudEffect({x: -24000, y: 40000, z: -24000});
	effects.particles.cloudEffect({x: 0, y: 45000, z: 0});
		
	hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1 );
	hemiLight.name = "light1";
	hemiLight.color.setRGB( 0.9, 0.95, 1 );
	hemiLight.groundColor.setRGB( 0.6, 0.75, 1 );
	hemiLight.position.set( 0, M, 0 );
	scene.add( hemiLight );

}	

engine.prototype.animate = function () {
	var delta = clock.getDelta();

	if (player && controls.enabled == true) {
		if (controls.camera_rotating == true) {
				controls.rotateCamera(delta)
			}
		if (controls.flight.enabled == true) {
			
			controls.flight.move(player.velocity, player.position, controls.flight.input(delta));
		}
		if (controls.character.enabled == true) {
			controls.character.input(delta);
		}
	}
	
	if (window.location.href.indexOf("editor") > 0) {
		controls.editor.input(delta);
		editor.toolbars.updateCameraDetails();
	}

	// Animating ship meshes
	var animTime = new Date().getTime() % engine.duration;
	var keyframe = Math.floor( animTime / engine.interpolation );

	objects.ships.animation_queue.forEach(function(ship){
		objects.ships.animate(animTime, keyframe, ship, delta);
	});

	// Animating sprites
	textures.sprites.animation_queue.forEach(function(sprite){
		sprite.animation.animate(sprite.moving, sprite.face, delta);
	});
	
	TWEEN.update();
	effects.water.animate(delta);
	effects.particles.handleParticles(delta);
	effects.particles.animateThrusters(delta);
	effects.particles.animateShipThrusters(delta);
	effects.bullets.handleBullets(delta);

	requestAnimationFrame( engine.animate );

	engine.renderer.render( scene, client.camera );
}