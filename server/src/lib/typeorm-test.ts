import "reflect-metadata";
import { createConnection } from "typeorm";
import * as UserModule from "../modules/user-module";
import * as ProfileModule from "../modules/profile-module";
import { createPassword } from "../lib/authentication";

createConnection().then(async connection => {

    console.log("Inserting new data into the database...");
    let username, password, hashedPassword, user;
    let firstName, lastName, gender, job, description, profile;


    username = password = "james";
    hashedPassword = await createPassword(password);
    user = await UserModule.insertOne(username, hashedPassword);
    
    firstName = "James"; lastName = "Song";
    gender = "Male"; job = "Student"; description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    profile = await ProfileModule.insertOne(firstName, lastName, gender, job, description, user);
    

    username = password = "ellie";
    hashedPassword = await createPassword(password);
    user = await UserModule.insertOne(username, hashedPassword);
    
    firstName = "Ellie"; lastName = "Kim";
    gender = "Female"; job = "Designer"; description = "Nulla sit amet imperdiet ipsum, id lacinia risus. Suspendisse eleifend neque ac quam venenatis, at commodo est volutpat.";
    profile = await ProfileModule.insertOne(firstName, lastName, gender, job, description, user);
    

    username = password = "Judy";
    hashedPassword = await createPassword(password);
    user = await UserModule.insertOne(username, hashedPassword);
    
    firstName = "Judy"; lastName = "Jootopia";
    gender = "Female"; job = ""; description = "";
    profile = await ProfileModule.insertOne(firstName, lastName, gender, job, description, user);

    console.log("Finding james from the database and his profile...");
    user = await UserModule.findOne({ username: 'james' });
    profile = await ProfileModule.findOne({ user });
    console.dir(user);
    console.dir(profile);

    console.log("Loading all the profiles with each user");
    let profilesWithUsers = await ProfileModule.getAll();
    console.dir(profilesWithUsers);

}).catch(error => console.log(error));
