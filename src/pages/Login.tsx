import React, { useContext } from 'react';
import { context } from '../components/AppProvider';

function Login() {
  const { setIsLogined } = useContext<any>(context);
  return (
    <div>
      <h1>登陆页</h1>
      <button onClick={() => setIsLogined(true)}>登陆</button>
    </div>
  );
}

export default Login;
