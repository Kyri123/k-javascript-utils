export type If<T extends boolean, A, B = null> = T extends true ? A : B;
export type ExplIf<T extends boolean, A, B = null> = T extends true ? A : B;