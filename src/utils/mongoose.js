const mongooseToObj = (mongoose) => {
    return mongoose.toObject();
};

const mongooseToArr = (mongoose) => {
    return mongoose.map((item) => item.toObject());
};

export { mongooseToObj, mongooseToArr };
