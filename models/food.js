import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    calories: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) throw new Error("Negative calories aren't real.");
        },
    },
}, {
    versionKey: false  
});

const Food = mongoose.model('Food', foodSchema);

export default Food;
