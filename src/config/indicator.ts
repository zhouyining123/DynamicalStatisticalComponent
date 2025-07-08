import type { Indicator } from '../types'

export interface IndicatorOpts {
  [key: string]: Indicator[]
}

export const indicatorOpts: IndicatorOpts = {
  business: [
    { index: 1, name: '商家数量', desc: '平台注册商家总数', enabled: true, dataSource: '商家' },
    { index: 2, name: '活跃商家', desc: '一定周期内有订单的商家数', enabled: true, dataSource: '商家' },
    { index: 3, name: '新入驻商家', desc: '本月新入驻商家数', enabled: true, dataSource: '商家' },
  ],
  user: [
    { index: 1, name: '用户数量', desc: '平台注册用户总数', enabled: true, dataSource: '用户' },
    { index: 2, name: '活跃用户', desc: '一定周期内有下单的用户数', enabled: true, dataSource: '用户' },
    { index: 3, name: '新注册用户', desc: '本月新注册用户数', enabled: true, dataSource: '用户' },
  ],
  order: [
    { index: 1, name: '订单总数', desc: '平台累计订单数', enabled: true, dataSource: '订单' },
    { index: 2, name: '已完成订单', desc: '已完成的订单数', enabled: true, dataSource: '订单' },
    { index: 3, name: '取消订单', desc: '被取消的订单数', enabled: false, dataSource: '订单' },
  ],
  product: [
    { index: 1, name: '商品总数', desc: '平台在售商品总数', enabled: true, dataSource: '商品' },
    { index: 2, name: '新品数量', desc: '本月新上架商品数', enabled: true, dataSource: '商品' },
    { index: 3, name: '热销商品', desc: '销量排名前10的商品', enabled: true, dataSource: '商品' },
  ],
  comment: [
    { index: 1, name: '评论总数', desc: '平台累计评论数', enabled: true, dataSource: '评论' },
    { index: 2, name: '好评数', desc: '好评（4-5星）数量', enabled: true, dataSource: '评论' },
    { index: 3, name: '差评数', desc: '差评（1-2星）数量', enabled: false, dataSource: '评论' },
  ],
  express: [
    { index: 1, name: '快递单量', desc: '总快递发货单量', enabled: true, dataSource: '快递' },
    { index: 2, name: '准时送达率', desc: '准时送达的快递单占比', enabled: true, dataSource: '快递' },
    { index: 3, name: '包裹破损率', desc: '运输途中破损包裹占比', enabled: false, dataSource: '快递' },
  ],
  supplier: [
    { index: 1, name: '供应商总数', desc: '合作的供应商总数量', enabled: true, dataSource: '供应商' },
    { index: 2, name: '供货准时率', desc: '供应商按时交货的比例', enabled: true, dataSource: '供应商' },
    { index: 3, name: '采购成本', desc: '总采购成本', enabled: true, dataSource: '供应商' },
  ]
}