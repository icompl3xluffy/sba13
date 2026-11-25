import 'dotenv/config';
import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);
import mongoose from 'mongoose';

const uri = process.env.MONGO_URI
mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB!')
       
    })
    .catch((err) => console.error('Connection Error', err)) 
