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
import Button from '@material-ui/core/Button';

// styles
import useStyles from '~/styles/Bicycle/form-style';

type Props = {
  area?: Bicycle['area'];
  num?: Bicycle['num'];
};

type Event = React.ChangeEvent<HTMLInputElement>;

type AreaLabelProps = {
  area?: Bicycle['area'];
  selected: boolean;
};
const AreaLabel = ({ area, selected }: AreaLabelProps) => {
  if (selected) {
    return (
      <Button
        component="span"
        variant="contained"
        size="small"
        color="primary"
        disableElevation
      >
        {area}
      </Button>
    );
  }
  return (
    <Button component="span" variant="outlined" size="small">
      {area}
    </Button>
  );
};

const BicycleFormComponent = ({ area, num }: Props) => {
  const { register, watch, handleSubmit, setValue } = useForm({
    defaultValues: {
      'bicycle[area]': area,
      'bicycle[num]': num,
    },
  });
  const onSubmit = ({ bicycle }) => console.log(new Bicycle(bicycle));
  const handleChange = (event: Event) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const selectedArea = watch('bicycle[area]', area);

  const styles = useStyles();

  return (
    <Paper square className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl component="fieldset">
          <FormLabel component="legend">自転車No</FormLabel>
          <RadioGroup
            aria-label="自転車記号"
            name="bicycle[area]"
            defaultValue={area}
            onChange={handleChange}
            className={styles.areaButtonContainer}
          >
            {Bicycle.areaKeys.map((areaKey) => (
              <FormControlLabel
                key={areaKey}
                value={areaKey}
                control={<Radio className={styles.areaHiddenRadio} inputRef={register()} />}
                label={
                  <AreaLabel area={areaKey} selected={selectedArea === areaKey}>
                    {areaKey}
                  </AreaLabel>
                }
                className={styles.areaLabel}
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
