import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '../pages/Carousel';

const Men = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, []);

    const menProducts = products.filter((product) => product.product_category === 'men');

    return (
        <div className="container mx-auto p-5 ">
            <h1 className="text-2xl mb-4">Men's Products</h1>
            <Carousel products={menProducts} />
        </div>
    );
};

export default Men;
