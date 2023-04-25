export interface coupon {
  couponId: string;
  couponType: string;
  discount: number;         //折數 ex: 0.9 0.8
  priceOff: number;         //單一品項折價 ex: 10,20,30
  deliveryFree: boolean;
}
  const couponData = [
  {
    productNo1:
    {
      couponId: '1',
      couponType: '1',
      discount: 0.9,       //折數 ex: 0.9 0.8
      priceOff: 0,       //單一品項折價 ex: 10,20,30
      deliveryFree: true
    }
  },
  {
    productNo2:
    {
      couponId: '2',
      couponType: '2',
      discount: 1,       //折數 ex: 0.9 0.8
      priceOff: 30,       //單一品項折價 ex: 10,20,30
      deliveryFree: true
    }
  },
  {
    productNo3:
    {
      couponId: '3',
      couponType: '2',
      discount: 1,       //折數 ex: 0.9 0.8
      priceOff: 60,       //單一品項折價 ex: 10,20,30
      deliveryFree: false
    }
  },
  {
    productNo4:
    {
      couponId: '4',
      couponType: '2',
      discount: 1,       //折數 ex: 0.9 0.8
      priceOff: 100,       //單一品項折價 ex: 10,20,30
      deliveryFree: true
    }
  }
]
