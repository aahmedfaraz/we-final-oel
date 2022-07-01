const express = require('express');
const Car = require('../models/Car');
const router = express.Router();

// @route   GET /cars
// @desc    Get all the cars
// @access  Public
router.get('/', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// @route   POST /cars
// @desc    Add new car
// @access  Public
router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const {brand, model, price} = req.body;
        if(brand && model && price) {
            const newCar = new Car({
                brand,
                model,
                price
            })
            const car = await newCar.save();
            res.json(car);
        } else {
            res.status(400).json({ message: 'Invalid Request' })
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router ;
