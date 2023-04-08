declare global {
	//interface StringConstructor {
	//}

	interface String {
		clearWs() : string;
	}
}

String.prototype.clearWs = function() {
	return this.replace( /[\s\n\r]+/g, "" );
};

export {};