import { pizzas } from '@/components/data';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const SinglePizza = () => {
  const router = useRouter();
  const routeId = router.query.id;
  const findPizza = pizzas.find((el) => {
    return el.id == +routeId;
  });

  return (
    <div className="ota">
      <div className="card">
        <Image src={findPizza?.img} fill />
        <h1>{findPizza?.name}</h1>
      </div>
    </div>
  );
};

export default SinglePizza;
