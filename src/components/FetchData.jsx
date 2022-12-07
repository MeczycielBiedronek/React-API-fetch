
import React, { useState, useEffect } from 'react';

const FetchData = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => { 
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {setProducts(data.products)
        })
            
    }, []);

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <h2>{product.price}</h2>
                </div>
            ))}
        </div>
    );
};

export default FetchData;