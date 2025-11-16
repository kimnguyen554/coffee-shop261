import { Product } from "../types";

const API_URL = "https://6825bac40f0188d7e72e3427.mockapi.io/261";

export const apiService = {
  // Lấy tất cả sản phẩm
  async getProducts(): Promise<Product[]> {
    try {
      const response = await fetch(`${API_URL}/products`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Không thể tải danh sách sản phẩm");
    }
  },

  // Lấy sản phẩm theo ID
  async getProductById(id: string): Promise<Product> {
    try {
      const response = await fetch(`${API_URL}/products/${id}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw new Error("Không thể tải thông tin sản phẩm");
    }
  },

  // Tạo đơn hàng mới
  async createOrder(orderData: any): Promise<any> {
    try {
      const response = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error creating order:", error);
      throw new Error("Không thể tạo đơn hàng");
    }
  },

  // Lấy tất cả đơn hàng
  async getOrders(): Promise<any[]> {
    try {
      const response = await fetch(`${API_URL}/orders`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw new Error("Không thể tải danh sách đơn hàng");
    }
  },
};
