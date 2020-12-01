import { NextPage } from 'next';

import Bicycle from '~/components/Bicycle';

const IndexPage: NextPage = () => (
  <>
    <Bicycle mini area="TYO" num={99999} />
    <Bicycle />
    <Bicycle area="TYO" num={1} />
  </>
);

export default IndexPage;
