import { NextPage } from 'next';
import Name from '../components/Name';

const IndexPage: NextPage = () => (
  <>
    <p>Next.js</p>
    <Name name="hoge" />
  </>
);

export default IndexPage;
