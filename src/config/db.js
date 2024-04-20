import mongoose from "mongoose";

async function connect(connectionString) {
    mongoose
        .connect(connectionString, {
            serverSelectionTimeoutMS: 3000,
        })
        .then(() => {
            console.log("Connect successfully!");
        })
        .catch(() => {
            console.log("Connect failure!");
        });
}

export default connect;
