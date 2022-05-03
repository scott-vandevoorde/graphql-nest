
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCatInput {
    _id?: Nullable<string>;
    name: string;
    age: age_Int_NotNull_min_0_max_30;
}

export class UpdateCatInput {
    _id: string;
}

export class Cat {
    _id: string;
    name: string;
    age: age_Int_NotNull_min_0_max_30;
}

export class CatResponse_Success {
    cat: Cat;
}

export class CatResponse_Failure {
    error: string;
}

export class CatResponse_UserNotFound {
    error?: Nullable<string>;
    userName: string;
}

export abstract class IQuery {
    abstract cats(_id?: Nullable<string[]>): Nullable<Nullable<Cat>[]> | Promise<Nullable<Nullable<Cat>[]>>;

    abstract cat(_id: string): Nullable<Cat> | Promise<Nullable<Cat>>;
}

export abstract class IMutation {
    abstract createCat(createCatInput: CreateCatInput): CatResponse | Promise<CatResponse>;
}

export type age_Int_NotNull_min_0_max_30 = any;
export type CatResponse = CatResponse_Success | CatResponse_Failure;
type Nullable<T> = T | null;
