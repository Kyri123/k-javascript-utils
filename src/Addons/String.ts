declare global {
	//interface StringConstructor {
	//}

	interface String {
		/**
		 * clear all spaces and line breaks in a string with a simple regexp: /[\s\n\r]+/g
		 * @returns the modified string
		 */
		clearWs() : string;

		/**
		 * a modified version of the native `String.prototype.includes` that ignores any space characters and uppercase
		 * @param searchingFor Array element to add
		 * @param Ws ignore any space
		 * @returns true if the string includes the search term
		 */
		contains( searchingFor : string, Ws? : boolean ) : boolean;
	}
}

String.prototype.clearWs = function() {
	return this.replace( /[\s\n\r]+/g, "" );
};

String.prototype.contains = function( searchingFor : string, Ws : boolean = true ) {
	if ( Ws ) {
		return this.toLowerCase().clearWs().includes( searchingFor.toLowerCase().clearWs() );
	}
	return this.toLowerCase().includes( searchingFor.toLowerCase() );
};

export {};