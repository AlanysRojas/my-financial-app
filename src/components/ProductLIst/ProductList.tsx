import React, { useState, useEffect } from 'react';
import { fetchProducts, Product } from '../../services/productService';
import styles from './ProductList.module.css';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const products = await fetchProducts();
                setProducts(products);
            } catch (error) {
                setError('Error loading products');
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Listado de Productos Financieros</h1>
            <ul className={styles.productList}>
                {products.map(product => (
                    <li key={product.id} className={styles.productItem}>
                        <img src={product.logo} alt={product.name} className={styles.productLogo} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;