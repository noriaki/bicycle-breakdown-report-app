import React from 'react';
import { useForm } from 'react-hook-form';

// entities
import Bicycle from '~/entities/Bicycle';

// material-ui
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// styles
import useStyles from '~/styles/Bicycle/form-style';

type Props = {
  area?: Bicycle['area'];
  num?: Bicycle['num'];
};

type Event = React.ChangeEvent<HTMLInputElement>;

const BicycleFormComponent = ({ area, num }: Props) => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      'bicycle[area]': area,
      'bicycle[num]': num,
    },
  });
  const onSubmit = ({ bicycle }) => console.log(new Bicycle(bicycle));
  const handleChange = (event: Event) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const styles = useStyles();

  return (
    <Paper square>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl component="fieldset">
          <FormLabel component="legend">自転車No</FormLabel>
          <RadioGroup
            aria-label="自転車記号"
            name="bicycle[area]"
            value={area}
            onChange={handleChange}
            className={styles.areaButtonContainer}
          >
            {Bicycle.areaKeys.map((areaKey) => (
              <FormControlLabel
                key={areaKey}
                value={areaKey}
                control={<Radio inputRef={register()} />}
                label={areaKey}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <input
          name="bicycle[num]"
          type="number"
          ref={register({ required: true, min: 1, max: 19999 })}
        />
      </form>
    </Paper>
  );
};

export default BicycleFormComponent;
