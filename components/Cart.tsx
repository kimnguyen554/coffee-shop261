import React from "react";
import { CartItem } from "../types";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  // Hàm chuyển đổi giá từ string sang number
  const parsePrice = (priceString: string): number => {
    // Xóa ký tự 'đ' và dấu chấm, sau đó chuyển thành number
    const numericString = priceString.replace("đ", "").replace(/\./g, "");
    return parseInt(numericString) || 0;
  };

  // Tính tổng tiền
  const calculateTotal = (): number => {
    return cartItems.reduce((total, item) => {
      const price = parsePrice(item.product.price);
      return total + price * item.quantity;
    }, 0);
  };

  const total = calculateTotal();

  const formatPrice = (price: number): string => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  return (
    <div className="cart-overlay">
      <div className="cart-header">
        <h2>🛒 Giỏ Hàng Của Bạn</h2>
        <button className="close-cart" onClick={onClose}>
          ×
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", padding: "2rem", color: "#666" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🛒</div>
          <h3>Giỏ hàng trống</h3>
          <p>Hãy thêm món ngon từ thực đơn nhé!</p>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.product.id} className="cart-item">
              <img
                src={item.product.img}
                alt={item.product.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.product.name}</div>
                <div className="cart-item-price">{item.product.price}</div>
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() =>
                      onUpdateQuantity(item.product.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span
                    style={{
                      fontWeight: "bold",
                      minWidth: "30px",
                      textAlign: "center",
                    }}
                  >
                    {item.quantity}
                  </span>
                  <button
                    className="quantity-btn"
                    onClick={() =>
                      onUpdateQuantity(item.product.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    style={{
                      marginLeft: "1rem",
                      background: "transparent",
                      border: "none",
                      color: "#dc3545",
                      cursor: "pointer",
                      padding: "0.3rem",
                    }}
                    title="Xóa sản phẩm"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-total">Tổng Cộng: {formatPrice(total)}</div>

          <button
            className="checkout-btn"
            onClick={onCheckout}
            disabled={cartItems.length === 0}
          >
            💳 Đặt Hàng Ngay
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
