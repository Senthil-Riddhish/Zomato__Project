import joi from "joi";

export function validateSignup(user) {
    console.log(user);
    console.log("inside joi");
    const Schema = joi.object({
        fullName: joi.string().min(3).max(30).required(),
        email: joi.string().email().required(),
        password: joi.string().min(3).required(),
        phoneNumber: joi.string().length(10),
        address: joi
            .array()
            .items(joi.object({ details: joi.string(), for: joi.string() }))
    });
    return Schema.validateAsync(user);
};

export function validateSignin(user) {
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(3).required(),
    });
    return Schema.validateAsync(user);
};


