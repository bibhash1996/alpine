import { db } from '../init'
import { User } from './models';
import {
    Collection, DBOptions,
    getSkipCount, Page
} from './util';

type Filters = Partial<User>

async function createUser(user: User, options?: DBOptions) {
    await db.collection(Collection.USERS).insertOne(user as any, { session: options?.session });
    return user;
}

async function getUser(
    id: string,
    options?: DBOptions
) {
    const securties: any[] = await db
        .collection(Collection.USERS)
        .find({ _id: id }, { session: options?.session })
        .toArray();
    return securties.length > 0 ? (securties[0] as User) : null;
}

async function listUsers(filters: Filters, page: Page, options?: DBOptions) {
    const skipCount = getSkipCount(page);
    const securities: any[] = (await db
        .collection(Collection.USERS)
        .find(filters, { session: options?.session })
        .sort({ createDate: -1 })
        .skip(skipCount)
        .limit(page.size)
        .toArray());
    return securities as User[];
}


export async function updateUser(
    user: Partial<User>,
    options?: DBOptions
) {
    const { _id, ...fields } = { ...user };
    const response = await db
        .collection(Collection.USERS)
        .updateOne(
            { _id: user._id },
            { $set: fields },
            { session: options?.session }
        );
    return response.modifiedCount;
}

export default {
    createUser,
    getUser,
    listUsers,
    updateUser
}