import { NextComponentType } from 'next';
import { useForm } from 'react-hook-form';

// components
import BicycleId from './Editor/BicycleId';

type ReportFormData = {
  bicycleNo: number;
};

const Report: NextComponentType = () => {
  const { control, handleSubmit } = useForm<ReportFormData>();

  const onSubmit: (data: ReportFormData) => void = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BicycleId control={control} />
    </form>
  );
};

export default Report;
