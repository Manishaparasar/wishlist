import React from "react";
import DiscountCoupon from "../DiscountCoupon";
import styles from "./cuponListPage.module.css";

const CouponListPage = () => {
  const coupons = [
    {
      discount: "25% OFF",
      code: "SAVE25",
      description: "Get 25% off on your first order!",
    },
    {
      discount: "15% OFF",
      code: "WELCOME15",
      description: "Enjoy 15% off for new customers!",
    },
    {
      discount: "10% OFF",
      code: "WINTER10",
      description: "Winter special! Get 10% off.",
    },
    {
      discount: "5% OFF",
      code: "SHOP5",
      description: "5% discount on any purchase!",
    },
  ];

  const handleCopyNotification = () => {
    alert("Coupon code copied!");
  };

  return (
    <div className={styles.couponListPage}>
      <h2>All Coupons</h2>
      <div className={styles.couponGrid}>
        {coupons.map((coupon, index) => (
          <DiscountCoupon
            key={index}
            discount={coupon.discount}
            code={coupon.code}
            description={coupon.description}
            onCopy={handleCopyNotification}
          />
        ))}
      </div>
    </div>
  );
};

export default CouponListPage;
