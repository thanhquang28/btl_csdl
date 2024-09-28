// convert number to VND format
export function formatVND(value: number): string {
  return value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })
}
