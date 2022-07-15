import { ClientSession } from "mongodb";
import ObjectID from 'bson-objectid'

export const Collection = {
    USERS: 'users'
}

export interface DBOptions {
    session?: ClientSession;
}

export type Page = {
    number: number;
    size: number;
};

export function getSkipCount(page: Page) {
    return page.number > 0 ? (page.number - 1) * page.size : 0;
}

export type Sort = {
    [x: string]: 'desc' | 'asc'
};


export function getObjectId(): string {
    return new ObjectID().toHexString();
}