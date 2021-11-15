import { getRepository } from "typeorm";
import User from "../entities/user";

export const insertOne = async (username, hashedPassword) => {
    const repository = getRepository(User);
    const user = repository.create();
    user.username = username;
    user.hashedPassword = hashedPassword;
    await repository.save(user);
}

export const findOne = async (props) => {
    const repository = getRepository(User);
    const user = await repository.findOne(props);
    return user;
}

export const deleteOne = async (props) => {
    const repository = getRepository(User);
    const user = await repository.delete(props);
    return user;
}
