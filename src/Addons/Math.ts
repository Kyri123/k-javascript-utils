declare global {
	interface Math {
		/**
		 * clamp a number between `min` and `max`
		 * @returns the clamped Number
		 */
		clamp( min : number, value : number, max : number ) : number;

		/**
		 * Generate a random integer between `min` (inclusive) and `max` (inclusive)
		 * By default, this will return a random integer between `0` and `100`
		 * @returns a random number between `min` (inclusive) and `max` (inclusive)
		 */
		rnd( min : number, max : number ) : number;
	}
}

Math.clamp = function( min : number, value : number, max : number ) : number {
	return Math.max( min, Math.min( value, max ) );
};

Math.rnd = function( min  = 0, max  = 100 ) : number {
	min = Math.ceil( min );
	max = Math.floor( max );
	return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
};

export {};