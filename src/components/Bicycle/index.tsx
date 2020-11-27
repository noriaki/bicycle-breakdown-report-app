import React from 'react';

// entities
import Bicycle from '~/entities/Bicycle';

// components
import BicycleMini from './mini';
import BicycleForm from './form';

type Props = {
  area?: Bicycle['area'];
  num?: Bicycle['num'];
  mini?: boolean;
};

const BicycleComponent = ({ area, num, mini }: Props) => {
  if (mini && area && num) {
    return <BicycleMini area={area} num={num} />;
  }
  return <BicycleForm area={area} num={num} />;
};

export default BicycleComponent;
