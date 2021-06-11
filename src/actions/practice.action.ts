import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import Practice from './../models/practice.model';

export const ADD_PRACTICE = 'Add';
export const REMOVE_PRACTICE = 'Remove';

export class Add implements Action{
    readonly type = ADD_PRACTICE
    constructor(public payload : Practice) {}
}

export class Remove implements Action{
    readonly type = REMOVE_PRACTICE
    constructor(public payload : number) {}
}

export type Actions = Add | Remove