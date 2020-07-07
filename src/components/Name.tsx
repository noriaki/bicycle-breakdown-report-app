import { FC } from 'react';

type Props = {
  name: string;
};

const Name: FC<Props> = ({ name }) => <p>by {name}.</p>;

export default Name;
