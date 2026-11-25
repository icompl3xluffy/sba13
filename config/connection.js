import mongoose from 'mongoose';

const uri = process.env.MONGO_URI
mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB!')
       
    })
    .catch((err) => console.log('Connection Error', err)) 
