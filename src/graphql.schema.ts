
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateCatInput {
    name: string;
    age?: Nullable<number>;
}

export interface UpdateCatInput {
    _id: string;
}

export interface Cat {
    _id: string;
    name: string;
    age?: Nullable<number>;
}

export interface IQuery {
    cats(): Nullable<Cat>[] | Promise<Nullable<Cat>[]>;
    cat(id: string): Nullable<Cat> | Promise<Nullable<Cat>>;
}

export interface IMutation {
    createCat(createCatInput: CreateCatInput): Cat | Promise<Cat>;
    updateCat(updateCatInput: UpdateCatInput): Cat | Promise<Cat>;
    removeCat(id: number): Nullable<Cat> | Promise<Nullable<Cat>>;
}

type Nullable<T> = T | null;
