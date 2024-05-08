const express = require('express');
const mongoose = require('mongoose');
const Product = require('./product'); 
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User= require('./UserSchema');

const app = express();

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins in development
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Middleware for parsing JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// User login
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare the provided password with the hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ email: user.email, userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

        // Send the token in response
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

 
main()
    .then(() => {
        console.log("Connection is successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/shoestore', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage }).single('product_picture');

// Middleware to serve static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// POST route for uploading product picture
app.post('/upload-picture', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        const picturePath = req.file ? `/public/uploads/${req.file.filename}` : '';
        res.status(200).json({ picturePath });
    });
});




app.get("/products/:_id", async (req, res) => {
    try {
      const productId = req.params._id;
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product", details: error.message });
    }
  });
// POST route for handling product submission
app.post('/add-product', async (req, res) => {
    const { product_name, product_price, product_description, product_category, product_picture,product_discount,product_size,product_type } = req.body;

    if (!product_name || !product_price || !product_description || !product_category || !product_picture ||!product_discount || !product_size || !product_type) {
        return res.status(400).json({ error: 'Please provide product details' });
    }

    try {
        const product = new Product({
            product_name,
            product_price,
            product_description,
            product_discount,
            product_size:product_size.split(","),
            product_type,
            product_category,
            product_picture,
        });

        await product.save();
        res.status(201).json({ message: 'Product added successfully', product });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add product', details: error.message });
    }
});

// server.js

// POST route for adding products to the cart
app.post('/add-to-cart', async (req, res) => {
    const { productId } = req.body;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        
        // Increase quantity if product is already in the cart
        product.quantity += 1;

        await product.save();
        res.status(200).json({ message: 'Product added to cart successfully', product });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add product to cart', details: error.message });
    }
});


//get route for fetching data on card
app.get("/products", async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to fetch products", details: error.message });
    }
  });
  
app.post("/", (req, res) => {
    res.send("Root is working");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port  ${PORT}`);
});