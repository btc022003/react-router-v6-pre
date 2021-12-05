import React, { useContext } from 'react';
import { context } from '../../components/AppProvider';

function Info() {
  const { setIsLogined } = useContext<any>(context);
  return (
    <div>
      <h2>个人信息</h2>
      <button
        onClick={() => {
          setIsLogined(false);
        }}
      >
        退出
      </button>
    </div>
  );
}

export default Info;
