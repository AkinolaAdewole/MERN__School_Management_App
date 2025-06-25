import mongoose from 'mongoose';

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.Mongo_URI, {
            dbName: "Sch-Management",
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        })

        console.log("MongoDB is connected");
    } catch (error) {
        console.error(error);
    }
}

export default connectDB