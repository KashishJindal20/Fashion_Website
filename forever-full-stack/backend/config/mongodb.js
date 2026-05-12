import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;

        if (!uri) {
            throw new Error("MONGODB_URI is not defined");
        }

        if (
            !uri.startsWith("mongodb://") &&
            !uri.startsWith("mongodb+srv://")
        ) {
            throw new Error(
                'MONGODB_URI is invalid. It must start with "mongodb://" or "mongodb+srv://"'
            );
        }

        mongoose.connection.on("connected", () => {
            console.log("DB Connected");
        });

        await mongoose.connect(`${uri}/e-commerce`);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;