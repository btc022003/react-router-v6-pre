import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import OrderInfo from './OrderInfo';

function Orders() {
  return (
    <div>
      <h2>我的订单</h2>
      <Link to='info'>订单详情</Link>

      <hr />
      <Routes>
        <Route path='info' element={<OrderInfo />} />
      </Routes>
    </div>
  );
}

export default Orders;
