import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Products.css'

const Products = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://ecommerce-node4.vercel.app/products/category/${productId}`);
        const data = await response.json();
        setProducts(data.products);
        console.log(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <>
      <h1>Product</h1>
      {loading ? (
        <div className="loading-spinner">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
        </div>
      ) : (
        <div className="products-container">
          {products.map(product => (
            <div key={product._id} className="product-card">
               <p>Name: {product.name}</p>
              <img src={product.mainImage.secure_url} alt={product.name} />
              <p>Price: {product.price}</p>
              <p>Description: {product.description}</p>
              <p>Ratingnumb: {product.ratingNumbers}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Products;
