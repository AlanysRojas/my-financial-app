import React from "react";
import { Product } from "../hooks/useProducts";
import styles from "./ProductItem.module.css";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <tr className={styles.product__item}>
      <td>
        <img src={product.logo} alt={product.name} />
      </td>
      <td>
        <p>{product.name}</p>
      </td>
      <td>
        <p>{product.description}</p>
      </td>
      <td>
        <p>{product.date_release}</p>
      </td>
      <td>
        <p>{product.date_revision}</p>
      </td>
    </tr>
  );
};

export default ProductItem;
