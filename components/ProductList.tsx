import React from "react";
import { Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  loading: boolean;
  error: string | null;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onAddToCart,
  loading,
  error,
}) => {
  if (loading) {
    return (
      <section id="menu" style={{ padding: "3rem 0" }}>
        <div className="container">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              color: "#8B4513",
              fontSize: "2.8rem",
              fontWeight: "bold",
            }}
          >
            🍵 THỰC ĐƠN CÀ PHÊ
          </h2>
          <div className="loading">
            <div
              style={{
                fontSize: "4rem",
                marginBottom: "1rem",
                animation: "pulse 1.5s infinite",
              }}
            >
              ☕
            </div>
            <div style={{ fontSize: "1.3rem", color: "#666" }}>
              Đang tải thực đơn...
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" style={{ padding: "3rem 0", background: "#f8f5f2" }}>
      <div className="container">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            color: "#8B4513",
            fontSize: "2.8rem",
            fontWeight: "bold",
          }}
        >
          🍵 THỰC ĐƠN CÀ PHÊ
        </h2>

        <div
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#666",
            fontSize: "1.1rem",
          }}
        >
          Khám phá {products.length} món ngon tại Coffee 261
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
