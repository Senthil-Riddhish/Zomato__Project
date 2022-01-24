import joi from "joi";

export function validateSignup(user) {
    const Schema=joi.object({
        name:joi.string().required(),
        city:joi.string().required(),
        address:joi.string().required(),
        mapLocation:joi.string().required()
    });
    return Schema.validateAsync(user);
};