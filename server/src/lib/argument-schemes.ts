import Joi from 'joi';

const stringScheme = Joi.string().trim();

const schemes = {
    username: stringScheme
        .min(4)
        .max(20)
        .pattern(/^[a-zA-Z0-9_]+$/)
        .required(),
    password: stringScheme.min(6).max(20).required(),
    firstName: stringScheme
        .min(4)
        .max(16)
        .pattern(/^[a-zA-Z]+$/)
        .required(),
    lastName: stringScheme
        .min(4)
        .max(16)
        .pattern(/^[a-zA-Z]+$/)
        .required(),
    gender: stringScheme.min(4).max(10).required(),
    job: stringScheme.min(1).max(20),
    description: Joi.string().min(1).max(200)
};

export default schemes;
