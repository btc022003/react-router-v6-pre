import React from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Info from './User/Info';
import Orders from './User/Orders';
import Scores from './User/Scores';

function User() {
  return (
    <div>
      <h1>我的</h1>
      <br />
      <Link to='/user'>【个人信息】</Link>
      <Link to='/user/scores'>【我的积分】</Link>
      <Link to='/user/orders'>【我的订单】</Link>
      <p>以下内容为二级路由部分</p>
      <Routes>
        <Route path='' element={<Info />}></Route>
        <Route path='scores' element={<Scores />}></Route>
        <Route path='orders/*' element={<Orders />}></Route>
        {/* 嵌套路由的时候，实现跳转到404页面 */}
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </div>
  );
}

export default User;
