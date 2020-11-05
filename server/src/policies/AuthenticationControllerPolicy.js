const Joi = require('joi')

module.exports = {
    register(req, res, next){
        const schema = Joi.object({
            ic: Joi.string().required(),
            name: Joi.string().required(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            ),
            email: Joi.string().email(),
            phone_num: Joi.string().required()
        })

        const {error, value} = schema.validate(req.body)
        //const {error, value} = Joi.validate(req.body, schema)

        if (error) {
            switch(error.details[0].context.key){
                case 'ic':
                    res.status(400).send({
                        error: 'You must provide a valid IC number.'
                    })
                    break
                case 'name':
                    res.status(400).send({
                        error: 'You must provide name.'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password provided failed to match the following rules
                        <br>
                        1. It must contain ONLY the following characters: lower case, upper case, numerics
                        <br>
                        2. It must be at least 8 characters in length and not greater than 32
                        `
                    })
                    break
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address.'
                    })
                    break
                case 'phone_num':
                    res.status(400).send({
                        error: 'You must provide a valid phone number.'
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
            }

        } else{
            req.body = value;
            next();
        }
    }
}
