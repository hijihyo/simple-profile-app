import { RequestHandler } from 'express';
import { attempt } from 'joi';
import schemes from '../lib/argument-schemes';
import * as UserModule from '../modules/user-module';
import * as ProfileModule from '../modules/profile-module';
import { createPassword, verifyPassword } from '../lib/authentication';

export const signup: RequestHandler = async (req, res, _next) => {
    const { username, password } = req.body;
    try {
        attempt(username, schemes.username);
        attempt(password, schemes.password);
    } catch (e) {
        return res.sendStatus(400); // Bad Request
    }
    try {
        const duplicateUser = await UserModule.findOne({ username });
        if (duplicateUser) return res.sendStatus(409); // Conflict
        const hashedPassword = await createPassword(password);
        await UserModule.insertOne(username, hashedPassword);
    } catch (e) {
        const temp = await UserModule.findOne({ username });
        if (temp) await UserModule.deleteOne({ id: temp.id });
        return res.sendStatus(500); // Internal Server Error
    }
    const { firstName, lastName, gender, job, description }
        = req.body;
    try {
        attempt(firstName, schemes.firstName);
        attempt(lastName, schemes.lastName);
        attempt(gender, schemes.gender);
        attempt(job, schemes.job);
        attempt(description, schemes.description);
    } catch (e) {
        const temp = await UserModule.findOne({ username });
        if (temp) await UserModule.deleteOne({ id: temp.id });
        return res.sendStatus(400); // Bad Request
    }
    try {
        const user = await UserModule.findOne({ username });
        if (!user) throw new Error();
        await ProfileModule.insertOne(
            firstName, lastName, gender, job, description, user
        );
    } catch (e) {
        const tempUser = await UserModule.findOne({ username });
        if (tempUser) await UserModule.deleteOne({ id: tempUser.id });
        const tempProfile = await ProfileModule.findOne({ userId: tempUser.id });
        if (tempProfile) await UserModule.deleteOne({ id: tempProfile.id });
        return res.sendStatus(500); // Internal Server Error
    }
    return res.json({});
};

export const signin: RequestHandler = async (req, res, _next) => {
    const { username, password } = req.body;
    try {
        attempt(username, schemes.username);
        attempt(password, schemes.password);
    } catch (e) {
        return res.sendStatus(400); // Bad Request
    }
    try {
        const user = await UserModule.findOne({ username });
        if (!user) return res.sendStatus(401); // Unauthorized
        const isVerified = await verifyPassword(password, user.hashedPassword);
        if (!isVerified) return res.status(401); // Unauthorized
        req.session.user= {
            id: user.id,
            username: user.username
        };
    } catch (e) {
        return res.sendStatus(500); // Internal Server Error
    }
    return res.json({});
};

export const signout: RequestHandler = async (req, res, _next) => {
    try {
        req.session.destroy(err => {
            if (err) throw err;
        });
    } catch (e) {
        return res.sendStatus(500); // Internal Server Error
    }
    return res.json({});
};

// export const signup: RequestHandler = async (req, res, _next) => {};

// export const signup: RequestHandler = async (req, res, _next) => {};

// export const signup: RequestHandler = async (req, res, _next) => {};
