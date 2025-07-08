import type { DataSource } from "../types";

export const dataSource: DataSource[] = [
  { name: '商家', key: 'business', table: ['business'] },
  { name: '用户', key: 'user', table: ['user'] },
  { name: '订单', key: 'order', table: ['order'] },
  { name: '商品', key: 'product', table: ['product'] },
  { name: '评论', key: 'comment', table: ['comment'] },
  { name: '快递', key: 'express', table: ['express'] },
  { name: '供应商', key: 'supplier', table: ['supplier']  }
]