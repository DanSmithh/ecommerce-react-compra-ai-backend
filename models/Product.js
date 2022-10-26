const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Este campo não pode estar vazio"],
    },
    description: {
      type: String,
      required: [true, "Este campo não pode estar vazio"],
    },
    price: {
      type: String,
      required: [true, "Este campo não pode estar vazio"],
    },
    category: {
      type: String,
      required: [true, "Este campo não pode estar vazio"],
    },
    pictures: {
      type: Array,
      required: true,
    },
  },
  { minimize: false },
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
