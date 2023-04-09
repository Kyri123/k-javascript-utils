export declare class Queue<T> {
    private Queue;
    constructor(DefaultQueueArray?: T[]);
    Enqeue(Content: T): void;
    Enqeue_Array(Content: T[]): void;
    Deqeue(): T | undefined;
    DeqeueNum(Count: number): T[] | undefined;
    HasElements(): boolean;
    Length(): number;
    GetPositionInQueue(Element: T): number;
    IsNextInQueue(Element: T): boolean;
    IsInQueue(Element: T): boolean;
}
