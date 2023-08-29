import React from 'react';

export default function Basket({ value }) {
  console.log(value);

  const value2 = 100;
  return (
    <div>
      <h2>장바구니 페이지 입니다.</h2>
      <p>주문 수량 : {value}</p>
    </div>
  );
}
