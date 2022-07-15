import { User } from '../database/models';
import DB from '../database/users'
import { getObjectId } from '../database/util';
import { BadRequestError, UnauthorizedError } from '../error';
import jwt from 'jsonwebtoken';

type JWTPayload = Omit<User, "_id"> & { id: string }

export async function signUp(email: string, password: string) {
    const users = await DB.listUsers({ email }, { number: 1, size: 10 });
    if (users.length) {
        throw new BadRequestError("User exists with this email");
    }
    const user: User = {
        _id: getObjectId(),
        firstName: "",
        lastName: "",
        createDate: new Date(),
        updateDate: new Date(),
        email,
        password,
        role: 'USER'
    }
    await DB.createUser(user);
    return user;
}


export async function login(email: string, password: string) {
    const users = await DB.listUsers({ email }, { number: 1, size: 10 });
    if (!users.length) {
        throw new BadRequestError("User does not exists");
    }
    const user = users[0];
    if (user.password !== password) {
        throw new UnauthorizedError("Invalid password");
    }
    var JWTPayload: JWTPayload = {
        id: user._id,
        ...user,
    }
    return {
        token: jwt.sign(JWTPayload, process.env.JWT_SECRET as string, {
            expiresIn: Math.floor(Date.now() / 1000) + (60 * 60),
        })
    }
}

export async function getUser(jwtPayload: JWTPayload) {
    const user = await DB.getUser(jwtPayload.id);
    if (!user)
        throw new BadRequestError("User does not exists");
    user.password = "";
    return user;
}

export async function updateProfile(firstName: string | null, lastName: string | null,
    jwtPayload: JWTPayload) {
    const user = await DB.getUser(jwtPayload.id);
    if (!user)
        throw new BadRequestError("User does not exists");
    await DB.updateUser({
        ...user,
        firstName: firstName === null ? user.firstName : firstName,
        lastName: lastName === null ? user.lastName : lastName
    });
    return {
        ...user,
        firstName: firstName === null ? user.firstName : firstName,
        lastName: lastName === null ? user.lastName : lastName
    }
}

export async function getAllUsers(jwtPayload: JWTPayload) {
    const user = await DB.getUser(jwtPayload.id);
    if (!user)
        throw new BadRequestError("User does not exists");
    if (user.role !== 'ADMIN')
        throw new BadRequestError("Invalid operation. Only admins can view the data");
    const users = await DB.listUsers({}, { number: 1, size: 10 });
    return users.map(user => {
        user.password = '';
        return user;
    })
}