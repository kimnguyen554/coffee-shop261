import React from "react";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  cartCount,
  onCartClick,
  onAboutClick,
  onContactClick,
}) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">☕ COFFEE 261</div>
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Trang Chủ
              </a>
            </li>
            <li>
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Thực Đơn
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  onAboutClick();
                }}
              >
                Giới Thiệu
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onContactClick();
                }}
              >
                Liên Hệ
              </a>
            </li>
            <li className="cart-icon" onClick={onCartClick}>
              🛒
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
