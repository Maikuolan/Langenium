function getDistance(position1, position2) {
	return Math.sqrt(
		((position1.x - position2.x) * (position1.x - position2.x)) + 
		((position1.y - position2.y) * (position1.y - position2.y)) + 
		((position1.z - position2.z) * (position1.z - position2.z))
	);
}

function getAngle(position1, position2) {
	

	var angle = Math.atan2(-(position1.position.x - position2.position.x), 
											(position1.position.z - position2.position.z));
	angle *= 180 / Math.PI;
	return angle;
}

function handleParticles(delta){
	particle_systems.forEach(function(particle_system,index){
		particle_system._lifetime += delta;
		particle_system.sortParticles = true;
		particle_system.material.color.r -= Math.random()*.001;
		particle_system.material.color.g += Math.random()*.001;
		if (particle_system.material.opacity > 0){
		particle_system.material.opacity *= .99;
		}
			particle_system.geometry.vertices.forEach(function(particle,index){
			  particle.x += Math.random() * particle_system.max - particle_system.min;
			  particle.y += Math.random() * particle_system.max - particle_system.min;
			  particle.z += Math.random() * particle_system.max - particle_system.min;
		});
		particle_system.geometry.__dirtyVertices = true;
		if (particle_system._lifetime > 1.57) {
			scene.remove(particle_system);
			particle_systems.splice(index,1);
		}
	});
}
  
function teleportEffect(position){
		var particleCount = 1000,
				particles = new THREE.Geometry(),
				pMaterial =
				  new THREE.ParticleBasicMaterial({
					map: THREE.ImageUtils.loadTexture("assets/particle.png?nocache"),
					size: .5,
					blending: THREE.AdditiveBlending,
					transparent: true
				  });

			// now create the individual particles
			for(var p = 0; p < particleCount; p++) {
				// create a particle with random
				// position values, -250 -> 250
				var pX = position.x + Math.random() * 2 - 1.25,
				  pY = position.y + Math.random() * 2 - 1.25,
				  pZ = position.z + Math.random() * 2 - 1.25,
				  particle = new THREE.Vector3(pX, pY, pZ);
				// add it to the geometry
				particles.vertices.push(particle);
			}

			// create the particle system
			var particle_system = new THREE.ParticleSystem(particles, pMaterial);	
			particle_system.max = 16;
			particle_system.min = 8;
			particle_system._lifetime = -2;
			particle_system.sortParticles = true;
			particle_systems.push(particle_system);
			// add it to the scene
			scene.add(particle_systems[particle_systems.length-1]);
}

function bulletEffect(position){
		var particleCount = 20,
				particles = new THREE.Geometry(),
				pMaterial =
				  new THREE.ParticleBasicMaterial({
					map: THREE.ImageUtils.loadTexture("assets/particle.png?nocache"),
					size: .25,
					blending: THREE.AdditiveBlending,
					transparent: true
				  });

			// now create the individual particles
			for(var p = 0; p < particleCount; p++) {
				// create a particle with random
				// position values, -250 -> 250
				var pX = position.x + Math.random() * 4 - 2,
				  pY = position.y + Math.random() * 4 - 2,
				  pZ = position.z + Math.random() * 4 - 2,
				  particle = new THREE.Vector3(pX, pY, pZ);
				// add it to the geometry
				particles.vertices.push(particle);
			}

			// create the particle system
			var particle_system = new THREE.ParticleSystem(particles, pMaterial);	
			particle_system.max = 6;
			particle_system.min = 1;
			particle_system._lifetime = 0;
			particle_system.sortParticles = true;
			particle_systems.push(particle_system);
			// add it to the scene
			scene.add(particle_systems[particle_systems.length-1]);
}