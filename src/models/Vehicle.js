const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const VehicleSchema = mongoose.Schema({
    vehicle: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    sold: {
        type: Boolean,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
    },
    updated: {
        type: Date,
        default: Date.now,
    }
});

VehicleSchema.plugin(mongoosePaginate);

mongoose.model('Vehicle', VehicleSchema);