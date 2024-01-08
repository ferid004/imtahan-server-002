import mongoose from 'mongoose'

const proShcema = new mongoose.Schema({
    name: String,
    info: String,
    price: String
});
const Products = mongoose.model('product22', proShcema);

export default Products