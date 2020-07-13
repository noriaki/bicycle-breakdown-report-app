import { NextPage } from 'next';

import Report from '~/components/Report';

const NewReportPage: NextPage = () => {
  return (
    <main>
      <h1>報告フォーム</h1>
      <Report />
    </main>
  );
};

export default NewReportPage;
