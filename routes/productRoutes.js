import express from 'express' 
import Product from "../models/productRoutes.js"

const router=express.Router()

router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
   res.status(201).json(product);
  } catch (err) {
     res.status(400).json({ error: err.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const { category, minPrice,maxprice, sortBy} = req.query;

    const page= Number (req.query.page) || 1;
    const limit =Number(req.query.limit) ||10;

    const filter
    
    res.json(products);
   
  } catch (err) {
     res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const {id} = req.params
    const product = await Product.findById(id);
   if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
     res.status(400).json({ error: err.message });
  }
})

router.put('/:id', async (req, res) => {
  try {
    const {id} = req.params
   const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
     if (!product) return res.status(404).json({ error: 'Product not found' });
     res.json({ message: 'Product was updated', product });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
    
}); 


router.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params
    const product = await Product.findByIdAndDelete(id);
     if (!product)
      return res.status(404).json({ error: err.message })
   res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router