import * as Yup from 'yup';

import { getValidationsErrors } from './getValidationsErrors';

let schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
    website: yup.string().url(),
    createdOn: yup.date().default(function () {
        return new Date();
    }),
});

export const userLoginValidation = async (schema) => {
    try {
        const { name, cep, price, cpf, tel } = fields;
        const schema = Yup.object().shape({
            name,
            cep,
            price,
            cpf,
            tel,
        });

        await schema.validate(schema, { abortEarly: false });
    } catch (error) {
        if (error instanceof Yup.ValidationError) {
            return getValidationErrors(error);
        }
    }
};