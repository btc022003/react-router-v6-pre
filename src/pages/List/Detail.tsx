import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function Detail() {
  const location = useLocation();
  const params = useParams();
  console.log(location);
  console.log(params);
  return (
    <div>
      <h1>详情-{params.id}</h1>
    </div>
  );
}

export default Detail;
