const INDEX_START = 0;
const INDEX_NONE = -1;

declare global {
	//interface ArrayConstructor {
	//}

	interface Array<T> {
		/**
		 * Add a Object to any given Index (if no Index provided, add to the start of the array).
		 * @param Object Array element to add
		 * @param Index Index where to add the element
		 */
		addAtIndex( Object : T, Index? : number ) : Array<T>;

		/**
		 * Remove an element from any given Index
		 * @param Index Index where the element should be removed (can also be an array to remove multiple elements)
		 */
		rmFromIndex( Index : number | number[] ) : Array<T>;

		/**
		 * Swap 2 Array Elements
		 */
		swapElements( A : number, B : number ) : boolean;

		/**
		 * returns true if the index at valid (not undefined)
		 */
		idxValid( Index : number ) : boolean;

		/**
		 * Replace a element with a new given element at a given index
		 * @returns return the removed element or undefined if no element was replaced
		 */
		replaceIdx( NewObject : T, Index : number ) : T | undefined;
	}
}

Array.prototype.replaceIdx = function <T>( NewObject : T, Index : number ) : T | undefined {
	if ( Index <= INDEX_NONE || Index >= this.length ) {
		return undefined;
	}

	return this.splice( Index, 1, NewObject )[ 0 ];
};

Array.prototype.rmFromIndex = function <T>( Index : number | number[] ) : Array<T> {
	if ( Array.isArray( Index ) ) {
		const NewArray = [ ...this.filter( ( _el, i ) => !Index.includes( i ) ) ];
		this.length = 0;
		this.push( ...NewArray );
	}
	else {
		const Idx = Math.max( Index, INDEX_START );
		this.splice( Idx, 1 );
	}

	return this;
};

Array.prototype.addAtIndex = function <T>( Object : T, Index = 0 ) : Array<T> {
	if ( Index >= this.length ) {
		this.push( Object );
		return this;
	}

	const Idx = Math.max( Index, INDEX_START );
	this.splice( Idx, 0, Object );

	return this;
};

Array.prototype.swapElements = function( A : number, B : number ) : boolean {
	const Success = false;

	if ( this.at( A ) && this.at( B ) ) {
		const AElement = this.at( A );
		const BElement = this.at( B );

		this.splice( A, 1, BElement );
		this.splice( B, 1, AElement );
	}

	return Success;
};

Array.prototype.idxValid = function( Index : number ) : boolean {
	return this.at( Index ) !== undefined;
};

export {};