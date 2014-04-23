L.scenograph.stats = {
	time: {
		now: Date.now(),
		delta: 0,
		last: 0
	},
	fps: {
		frames: 0,
		now: 0,
		min: Infinity,
		max: 0,
		last: Date.now()
	},
	update: function() {
		// These bindings will later be abstracted to new classes
		// Something like a view template for all the Scenograph->Ember bindings
		Ember.set('L.scenograph.stats.time.last', this.time.now);
		Ember.set('L.scenograph.stats.time.now', Date.now());
		Ember.set('L.scenograph.stats.time.delta', (this.time.now - this.time.last));
		
		this.fps.frames++;
		if ( this.time.now > this.fps.last + 1000 ) {
			Ember.set('L.scenograph.stats.fps.now', Math.round( ( this.fps.frames * 1000 ) / ( this.time.now - this.fps.last ) ));
			Ember.set('L.scenograph.stats.fps.min', Math.min(this.fps.min, this.fps.now));
			Ember.set('L.scenograph.stats.fps.max', Math.max(this.fps.max, this.fps.now));
			Ember.set('L.scenograph.stats.fps.last', this.time.now);

			this.fps.frames = 0;
		}

	}
};