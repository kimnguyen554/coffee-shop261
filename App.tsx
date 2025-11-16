import React, { useState, useRef } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useProducts } from "./hooks/useProducts";
import { useCart } from "./hooks/useCart";

const App: React.FC = () => {
  const { products, loading, error } = useProducts();
  const {
    cartItems,
    isCartOpen,
    cartCount,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    openCart,
    closeCart,
  } = useCart();

  // Refs để scroll đến các section
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    // Hàm chuyển đổi giá từ string sang number
    const parsePrice = (priceString: string): number => {
      const numericString = priceString.replace("đ", "").replace(/\./g, "");
      return parseInt(numericString) || 0;
    };

    // Tính tổng tiền
    const totalAmount = cartItems.reduce((total, item) => {
      const price = parsePrice(item.product.price);
      return total + price * item.quantity;
    }, 0);

    const formatPrice = (price: number): string => {
      return price.toLocaleString("vi-VN") + "đ";
    };

    // Tạo mã đơn hàng ngẫu nhiên
    const orderId =
      "COFFEE" + Math.random().toString(36).substr(2, 9).toUpperCase();

    alert(
      `🎉 ĐẶT HÀNG THÀNH CÔNG!\n\n📦 Mã đơn hàng: ${orderId}\n👤 Khách hàng: Coffee 261\n📞 SĐT: 0909 261 261\n💰 Tổng tiền: ${formatPrice(
        totalAmount
      )}\n\nCảm ơn bạn đã mua hàng tại Coffee 261! 🥰`
    );

    clearCart();
    closeCart();
  };

  return (
    <div className="App">
      <Header
        cartCount={cartCount}
        onCartClick={openCart}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

      {/* Thông báo ứng dụng */}
      <div
        style={{
          background: "linear-gradient(135deg, #8B4513, #A0522D)",
          color: "white",
          padding: "10px 20px",
          textAlign: "center",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        ☕ COFFEE 261 - THƯƠNG HIỆU CÀ PHÊ VIỆT NAM
      </div>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          style={{
            background:
              "linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #8B4513 100%)",
            color: "white",
            padding: "4rem 0",
            textAlign: "center",
          }}
        >
          <div className="container">
            <h1
              style={{
                fontSize: "3.5rem",
                marginBottom: "1rem",
                fontWeight: "bold",
              }}
            >
              ☕ COFFEE 261
            </h1>
            <p
              style={{
                fontSize: "1.3rem",
                maxWidth: "700px",
                margin: "0 auto 2rem",
              }}
            >
              Khám phá hương vị cà phê tuyệt vời cùng những loại cà phê đặc biệt
              được pha chế công phu bởi các chuyên gia barista hàng đầu.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                flexWrap: "wrap",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: "bold" }}>8+</div>
                <div>Món ngon</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: "bold" }}>100%</div>
                <div>Nguyên chất</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: "bold" }}>⭐</div>
                <div>Chất lượng</div>
              </div>
            </div>
          </div>
        </section>

        <ProductList
          products={products}
          onAddToCart={addToCart}
          loading={loading}
          error={error}
        />

        {/* Giới Thiệu Section */}
        <section
          id="about"
          ref={aboutRef}
          style={{ padding: "4rem 0", background: "white" }}
        >
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
              📖 GIỚI THIỆU
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop"
                  alt="Coffee 261"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "15px",
                    boxShadow: "0 8px 25px rgba(139, 69, 19, 0.2)",
                  }}
                />
              </div>
              <div>
                <h3
                  style={{
                    color: "#8B4513",
                    marginBottom: "1.5rem",
                    fontSize: "1.8rem",
                  }}
                >
                  Câu Chuyện Của Chúng Tôi
                </h3>
                <p
                  style={{
                    marginBottom: "1rem",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  <strong>Coffee 261</strong> được thành lập với niềm đam mê bất
                  tận đối với hương vị cà phê nguyên bản. Chúng tôi tin rằng mỗi
                  ly cà phê không chỉ là thức uống, mà còn là một tác phẩm nghệ
                  thuật.
                </p>
                <p
                  style={{
                    marginBottom: "1rem",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  Với hơn 5 năm kinh nghiệm trong ngành cà phê, đội ngũ của
                  chúng tôi luôn tìm kiếm những hạt cà phê chất lượng nhất từ
                  các vùng nguyên liệu nổi tiếng để mang đến cho khách hàng trải
                  nghiệm tuyệt vời nhất.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    flexWrap: "wrap",
                    marginTop: "2rem",
                  }}
                >
                  <div
                    style={{
                      background: "#f8f5f2",
                      padding: "1rem",
                      borderRadius: "10px",
                      textAlign: "center",
                      flex: "1",
                      minWidth: "120px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#8B4513",
                      }}
                    >
                      5+
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "#666" }}>
                      Năm Kinh Nghiệm
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#f8f5f2",
                      padding: "1rem",
                      borderRadius: "10px",
                      textAlign: "center",
                      flex: "1",
                      minWidth: "120px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#8B4513",
                      }}
                    >
                      1000+
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "#666" }}>
                      Khách Hàng
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#f8f5f2",
                      padding: "1rem",
                      borderRadius: "10px",
                      textAlign: "center",
                      flex: "1",
                      minWidth: "120px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#8B4513",
                      }}
                    >
                      50+
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "#666" }}>
                      Loại Cà Phê
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Liên Hệ Section */}
        <section
          id="contact"
          ref={contactRef}
          style={{ padding: "4rem 0", background: "#f8f5f2" }}
        >
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
              📞 LIÊN HỆ
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "3rem",
              }}
            >
              <div>
                <h3
                  style={{
                    color: "#8B4513",
                    marginBottom: "1.5rem",
                    fontSize: "1.8rem",
                  }}
                >
                  Thông Tin Liên Hệ
                </h3>
                <div style={{ marginBottom: "2rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        background: "#8B4513",
                        color: "white",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "1rem",
                      }}
                    >
                      📍
                    </span>
                    <div>
                      <strong>Địa chỉ:</strong>
                      <br />
                      261 ,Quận 1, TP.HCM
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        background: "#8B4513",
                        color: "white",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "1rem",
                      }}
                    >
                      📞
                    </span>
                    <div>
                      <strong>Hotline:</strong>
                      <br />
                      0909 261 261
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        background: "#8B4513",
                        color: "white",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "1rem",
                      }}
                    >
                      ✉️
                    </span>
                    <div>
                      <strong>Email:</strong>
                      <br />
                      info@coffee261.com
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span
                      style={{
                        background: "#8B4513",
                        color: "white",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "1rem",
                      }}
                    >
                      🕒
                    </span>
                    <div>
                      <strong>Giờ mở cửa:</strong>
                      <br />
                      Thứ 2 - Chủ Nhật: 7:00 - 22:00
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3
                  style={{
                    color: "#8B4513",
                    marginBottom: "1.5rem",
                    fontSize: "1.8rem",
                  }}
                >
                  Gửi Tin Nhắn Cho Chúng Tôi
                </h3>
                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Họ và tên của bạn"
                    style={{
                      padding: "0.75rem",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      fontSize: "1rem",
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email của bạn"
                    style={{
                      padding: "0.75rem",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      fontSize: "1rem",
                    }}
                  />
                  <textarea
                    placeholder="Nội dung tin nhắn"
                    rows={4}
                    style={{
                      padding: "0.75rem",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      resize: "vertical",
                    }}
                  ></textarea>
                  <button
                    type="submit"
                    style={{
                      padding: "0.75rem",
                      background: "linear-gradient(135deg, #8B4513, #A0522D)",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Gửi Tin Nhắn
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={closeCart}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <h3>COFFEE 261</h3>
          <p>Địa chỉ: 261 Quận 1, TP.HCM</p>
          <p>Hotline: 0909 261 261 | Email: info@coffee261.com</p>
          <p>© 2024 Coffee 261. Bảo lưu mọi quyền.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
