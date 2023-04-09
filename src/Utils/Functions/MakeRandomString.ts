/**
 * Generate a random string of given length and use
 * @param length length of the string to generate
 * @param SplitterChar character to split the string
 * @param SplitterCharEvery where to split the string
 * @constructor
 */
export function MakeRandomString( length : number, SplitterChar  = "", SplitterCharEvery  = 5 ) : string {
	let result = "";
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const charactersLength = characters.length;
	let counter = 0;
	while ( counter < length ) {
		result += characters.charAt( Math.floor( Math.random() * charactersLength ) );
		if ( SplitterChar !== "" && counter % SplitterCharEvery === SplitterCharEvery - 1 ) {
			result += SplitterChar;
		}
		counter += 1;
	}
	if ( result.endsWith( "-" ) ) {
		return result.slice( 0, result.length - 1 );
	}
	return result;
}