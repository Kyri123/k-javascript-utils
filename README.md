# Javascript Utility Functions

## How to use

Import useAddons to your project index.ts / index.js file

```ts
import "@kyri123/k-javascript-utils/lib/useAddons"
// or if you want to use as esm
import "@kyri123/k-javascript-utils/esm/useAddons"
```

## Array Functions

### empty()

```ts
interface Array<T> {
	/**
	 * clear all elements from the array
	 */
	empty() : Array<T>;
}

const Arr = [ 8, 645, 1258, 457, 623 ]

Arr.empty()
console.log( Arr ) // [ ]
```

### isEmpty()

```ts
interface Array<T> {
	/**
	 * Check if the array is empty
	 * @returns true if the array is empty
	 */
	isEmpty() : boolean;
}

const Arr = [ 8, 645, 1258, 457, 623 ]
console.log( Arr ) // false

Arr.length = 0; // Arr = [ ]
console.log( Arr ) // true
```

### append()

```ts
interface Array<T> {
	/**
	 * modified version of contact
	 * @param OtherArray Array to compare with
	 * @param ClearOtherArray Should the other array be cleared? (default false)
	 * @returns the current Array
	 */
	append( OtherArray : T, ClearOtherArray? : boolean ) : Array<T>;
}

const Arr = [ 8, 645, 1258 ]
const Arr2 = [ 457, 623 ]

Arr.append( Arr2 )
console.log( Arr ) // [ 8, 645, 1258, 457, 623 ]
console.log( Arr2 ) // [ 457, 623 ]

Arr.append( Arr2, true )
console.log( Arr ) // [ 8, 645, 1258, 457, 623, 457, 623 ]
console.log( Arr2 ) // [ ]
```

### addAtIndex()

```ts
interface Array<T> {
	/**
	 * Add a Object to any given Index (if no Index provided, add to the start of the array).
	 * @param Object Array element to add
	 * @param Index Index where to add the element
	 */
	addAtIndex( Object : T, Index? : number ) : Array<T>;
}

const Arr = [ 8, 645, 1258, 457, 623 ]

Arr.addAtIndex( 600, 2 )
console.log( Arr ) // [ 8, 645, 600, 1258, 457, 623 ]
```

### rmFromIndex()

```ts
interface Array<T> {
	/**
	 * Remove an element from any given Index
	 * @param Index Index where the element should be removed (can also be an array to remove multiple elements)
	 */
	rmFromIndex( Index : number | number[] ) : Array<T>;
}

const Arr = [ 8, 645, 1258, 457, 623 ]

Arr.rmFromIndex( 1 )
console.log( Arr ) // [ 8, 1258, 457, 623 ]

Arr.rmFromIndex( [ 2, 3 ] )
console.log( Arr ) // [ 8, 1258 ]
```

### swapElements()

```ts
interface Array<T> {
	/**
	 * Swap 2 Array Elements
	 * @returns if one of both Index invalid returns false
	 */
	swapElements( A : number, B : number ) : boolean;
}

const Arr = [ 8, 645, 1258, 457, 623 ]

Arr.swapElements( 1, 400 )
console.log( Arr ) // [ 8, 645, 1258, 457, 623 ]

Arr.swapElements( 1, 4 )
console.log( Arr ) // [ 8, 623, 1258, 457, 600 ]
```

### idxValid()

```ts
interface Array<T> {
	/**
	 * Check if an element exists in any given Index
	 * @returns true if the index at valid (not undefined)
	 */
	idxValid( Index : number ) : boolean;
}

const Arr = [ 8, 645, 1258, 457, 623 ]

console.log( Arr.idxValid( -5 ) ) // false
console.log( Arr.idxValid( 2 ) ) // true
console.log( Arr.idxValid( 500 ) ) // false
```

### replaceIdx()

```ts
interface Array<T> {
	/**
	 * Replace a element with a new given element at a given index
	 * @returns return the removed element or undefined if no element was replaced
	 */
	replaceIdx( NewObject : T, Index : number ) : T | undefined;
}

const Arr = [ 8, 645, 1258, 457, 623 ]

Arr.replaceIdx( 1000, 1 )
console.log( Arr.idxValid( -5 ) ) // [ 8, 1000, 1258, 457, 623 ]
```

---

## Math Functions

### clamp()

```ts
interface Math {
	/**
	 * clamp a number between `min` and `max`
	 * @returns the clamped Number
	 */
	clamp( min : number, value : number, max : number ) : number;
}

console.log( Math.clamp( 5, -1, 855 ) ) // 5
console.log( Math.clamp( 5, 8445, 855 ) ) // 855
console.log( Math.clamp( 5, 100, 855 ) ) // 100
```

---

## String Functions

### clearWs()

```ts
interface String {
	/**
	 * a modified version of the native `String.prototype.includes` that ignores any space characters and uppercase
	 * @param searchingFor Array element to add
	 * @param Ws ignore any space
	 * @returns true if the string includes the search term
	 */
	contains( searchingFor : string, Ws? : boolean ) : boolean;
}

const String : string = "Hello World!\nI'm a string...";
console.log( String.clearWs() ); // "HelloWorld!I'mastring..."

```

### contains()

```ts
interface String {
	/**
	 * a modified version of the native `String.prototype.includes` that ignores any space characters and uppercase
	 * @param searchingFor Array element to add
	 * @param Ws ignore any space
	 * @returns true if the string includes the search term
	 */
	contains( searchingFor : string, Ws? : boolean ) : boolean;
}

const String : string = "Hello World!\nI'm a string...";
console.log( String.contains( "heLLoWorld!" ) ); // true
console.log( String.contains( "heLLoWorld!", false ) ); // false
```
