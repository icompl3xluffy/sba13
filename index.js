import 'dotenv/config';
import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);
import './config/connection.js'
import productRoutes from "./routes/productRoutes.js"
import express from 'express';



const app = express();
app.use(express.json());
app.use('/api/products', productRoutes);

const port = 3000;


app.listen(port, () => {
    console.log('Server running on port: http://localhost:' + port)
})