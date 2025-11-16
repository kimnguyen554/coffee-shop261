import { CartItem } from "../types";
import { supabase } from "../supabaseClient";

export interface OrderData {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  total_amount: number;
  items: CartItem[];
}

export const orderService = {
  async createOrder(orderData: OrderData) {
    try {
      console.log("🔄 Đang lưu đơn hàng vào Supabase...");

      const { data, error } = await supabase
        .from("orders")
        .insert([
          {
            ...orderData,
            status: "pending",
            created_at: new Date().toISOString(),
          },
        ])
        .select()
        .single();

      if (error) throw error;

      console.log("✅ Đơn hàng đã được lưu:", data);
      return data;
    } catch (error) {
      console.error("❌ Lỗi khi tạo đơn hàng:", error);
      throw new Error("Không thể tạo đơn hàng");
    }
  },

  async getOrders() {
    try {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error("Error fetching orders:", error);
      return [];
    }
  },
};
