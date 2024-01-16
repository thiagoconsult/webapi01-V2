const Joi = require('joi')

module.exports = Joi.object({
    nome: Joi.string()
        .pattern(/^.{5,20}[\D]+$/i)
        // .min(5)
        // .max(50)
        .required(),

    idade: Joi.number()
        .min(18)
        .max(120)
        .required(),

    uf: Joi.string()
        .length(2)
})