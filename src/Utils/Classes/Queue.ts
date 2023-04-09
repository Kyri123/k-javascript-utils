export class Queue<T> {
	private Queue : T[];

	constructor( DefaultQueueArray : T[] = [] ) {
		this.Queue = DefaultQueueArray;
	}

	public Enqeue( Content : T ) : void {
		this.Queue.push( Content );
	}

	public Enqeue_Array( Content : T[] ) : void {
		this.Queue = this.Queue.concat( Content );
	}

	public Deqeue() : T | undefined {
		return this.Queue.shift();
	}

	public DeqeueNum( Count : number ) : T[] | undefined {
		const DequeueElements : T[] = [];
		if ( this.HasElements() ) {
			for ( let Idx = 0; Math.min( this.Length(), Count ); ++Idx ) {
				const Element = this.Deqeue();
				if ( Element ) {
					DequeueElements.push( Element );
				}
			}
			return DequeueElements;
		}
		return undefined;
	}

	public HasElements() : boolean {
		return this.Queue.length > 0;
	}

	public Length() : number {
		return this.Queue.length;
	}

	public GetPositionInQueue( Element : T ) : number {
		return this.Queue.indexOf( Element );
	}

	public IsNextInQueue( Element : T ) : boolean {
		return this.Queue.indexOf( Element ) === 0;
	}

	public IsInQueue( Element : T ) : boolean {
		return this.Queue.indexOf( Element ) !== -1;
	}
}
