import { getRepository } from "typeorm";
import User from "../entities/user";
import Profile from "../entities/profile";

export const insertOne = async (firstName, lastName, gender, job, description, user: User) => {
    const repository = getRepository(Profile);
    const profile = repository.create();
    profile.firstName = firstName;
    profile.lastName = lastName;
    profile.gender = gender;
    profile.job = job;
    profile.description = description;
    profile.user = user;
    await repository.save(profile);
    user.profile = profile;
    await getRepository(User).save(user);
}

export const findOne = async (props) => {
    const repository = getRepository(Profile);
    const profile = await repository.findOne({ where: props, relations: [ "user" ] });
    return profile;
}

export const getAll = async () => {
    const repository = getRepository(Profile);
    const profilesWithUsers = await repository.find();
    return profilesWithUsers;
}
