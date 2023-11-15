import mongoose from 'mongoose';

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.Mongo_URI)
    } catch (error) {
        console.error(error);
    }
}

export default connectDB