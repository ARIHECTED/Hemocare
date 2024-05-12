const { schema } = require("zod");
const { donorSchema } = require("../validators/auth-validator");
const { hospitalSchema } = require("../validators/auth-validator2");

const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
        const message = "Fill the input properly"
        let extraDetails = "";
        
        if(err.errors && err.errors.length > 0){
            extraDetails = err.errors[0].message;
        }

        const error = {
            status,
            message,
            extraDetails,
        };

        console.log(message);
        console.log(error);
        // res.status(400).json({msg: message});
        next(error);
    }
};
module.exports = validate;