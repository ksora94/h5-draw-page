import couponImage from '@/assets/images/coupon.png';
import tagImage from '@/assets/images/tag.png';

export interface AwardItem {
  id: string;
  name: string;
  expireDate: string;
  image?: string;
  status: 'valid' | 'used' | 'expired';
}

// 中奖奖品列表假数据
export const awardList: AwardItem[] = [
  {
    id: '1',
    name: '10元无门槛优惠券',
    expireDate: '2025-07-01',
    image: couponImage,
    status: 'valid'
  },
  {
    id: '2',
    name: '5元话费券',
    expireDate: '2025-06-30',
    status: 'valid'
  },
  {
    id: '3',
    name: '免费体验会员3天',
    expireDate: '2025-06-25',
    image: tagImage,
    status: 'valid'
  },
  {
    id: '4',
    name: '2元无门槛优惠券',
    expireDate: '2025-05-30',
    status: 'expired'
  },
  {
    id: '5',
    name: '1元话费券',
    expireDate: '2025-06-20',
    status: 'used'
  }
];
