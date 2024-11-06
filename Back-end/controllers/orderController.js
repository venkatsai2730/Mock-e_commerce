const Order = require('../models/Order');
const Product = require('../models/Product');

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const { products, total } = req.body;

        const orderProducts = await Promise.all(
            products.map(async item => {
                const product = await Product.findById(item.productId);
                return {
                    product,
                    quantity: item.quantity,
                };
            })
        );

        const order = new Order({ products: orderProducts, total });
        const savedOrder = await order.save();

        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
