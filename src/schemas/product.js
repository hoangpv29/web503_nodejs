import Joi from "joi";

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  desc: Joi.string(),
  image:Joi.string()
  // categoryId: Joi.string().required(),
});

export default productSchema;
