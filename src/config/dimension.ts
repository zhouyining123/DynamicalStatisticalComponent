import type { Dimension } from '../types'

export interface DimensionOpts {
  [key: string]: Dimension[]
}

export const dimensionOpts: DimensionOpts = {
  business: [
    { key:'business_id', name: '商家ID', desc: '唯一商家标识' },
    { key:'business_name', name: '商家名称', desc: '商家名称' },
    { key:'business_level', name: '商家等级', desc: '平台定义的商家等级' },
    { key:'business_location', name: '所在地区', desc: '商家注册地' },
  ],
  user: [
    { key: 'user_id', name: '用户ID', desc: '唯一用户标识' },
    { key: 'gender', name: '性别', desc: '用户性别' },
    { key: 'age_group', name: '年龄分段', desc: '用户所属年龄区间' },
  ],
  order: [
    { key: 'order_id', name: '订单ID', desc: '唯一订单标识' },
    { key: 'order_status', name: '订单状态', desc: '订单当前状态' },
    { key: 'payment_method', name: '支付方式', desc: '订单支付方式' },
  ],
  product: [
    { key: 'product_id', name: '商品ID', desc: '唯一商品标识' },
    { key: 'product_category', name: '商品分类', desc: '商品所属分类' },
    { key: 'brand', name: '品牌', desc: '商品品牌' },
  ],
  comment: [
    { key: 'comment_id', name: '评论ID', desc: '唯一评论标识' },
    { key: 'comment_rating', name: '评论星级', desc: '用户评分等级' },
  ],
  express: [
    { key: 'express_company', name: '快递公司', desc: '承运快递公司' },
    { key: 'warehouse', name: '发货仓库', desc: '包裹发出仓库' },
  ],
  supplier: [
    { key: 'supplier_id', name: '供应商ID', desc: '唯一供应商标识' },
    { key: 'supplier_type', name: '供应商类型', desc: '供应商分类' },
  ]
} 