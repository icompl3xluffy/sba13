import 'dotenv/config';
import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);
import express from 'express';
import mongoose from 'mongoose';


const uri = process.env.MONGO_URI
mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB!')
       
    })
    .catch((err) => console.log('Connection Error', err)) 


    const app = express();
app.use(express.json());
// app.use('/api/books', bookRoutes);

const port = 3000;


app.listen(port, () => {
    console.log('Server running on port: http://localhost:' + port)
})