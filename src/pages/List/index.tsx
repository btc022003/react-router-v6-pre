import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const data = [
  {
    id: 1,
    name: '海绵宝宝',
  },
  {
    id: 2,
    name: '派大星',
  },
];

function List() {
  const to = useNavigate();
  // to是一个function，参数一是一个路径，参数二是配置信息
  return (
    <div>
      <h1>列表</h1>
      <div className='list'>
        {data.map((item) => (
          <Link key={item.id} to={'/list/' + item.id}>
            {item.name}
          </Link>
        ))}
      </div>
      <hr />
      {data.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            to('/list/' + item.id, { state: item });
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default List;
