declare global {
	interface Math {
		clamp( min : number, value : number, max : number ) : number;
	}
}

Math.clamp = function( min : number, value : number, max : number ) : number {
	return Math.max( min, Math.min( value, max ) );
};

export {};