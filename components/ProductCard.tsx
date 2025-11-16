import React from "react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const getCategoryColor = (type: string) => {
    const colors: { [key: string]: string } = {
      arabica: "#e6f3ff",
      robusta: "#fff0e6",
      "hòa trộn": "#e6fff9",
      blend: "#f0ffe6",
    };
    return colors[type] || "#f9e6ff";
  };

  const getCategoryTextColor = (type: string) => {
    const colors: { [key: string]: string } = {
      arabica: "#0066cc",
      robusta: "#cc6600",
      "hòa trộn": "#006666",
      blend: "#336600",
    };
    return colors[type] || "#660066";
  };

  return (
    <div className="product-card">
      <img
        src={product.img}
        alt={product.name}
        className="product-image"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop";
        }}
      />
      <div
        className="product-category"
        style={{
          background: getCategoryColor(product.type),
          color: getCategoryTextColor(product.type),
        }}
      >
        {product.type.toUpperCase()}
      </div>
      <h3 className="product-name">{product.name}</h3>
      <div className="product-price">{product.price}</div>
      <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
        Thêm Vào Giỏ Hàng
      </button>
    </div>
  );
};

export default ProductCard;
