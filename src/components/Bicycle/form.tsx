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
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

// styles
import useStyles from '~/styles/Bicycle/form-style';

type Props = Partial<Readonly<Pick<Bicycle, 'area' | 'num'>>>;

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
  const { register, watch, handleSubmit } = useForm({
    defaultValues: {
      'bicycle[area]': area,
      'bicycle[num]': num,
    },
  });
  const onSubmit = ({ bicycle }: { bicycle: Bicycle }) =>
    console.log(new Bicycle(bicycle));

  const selectedArea = watch('bicycle[area]', area);

  const styles = useStyles();

  return (
    <Paper square className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">自転車No</FormLabel>
          <FormHelperText>
            自転車の記号を選んで番号を入力してください
          </FormHelperText>
          <RadioGroup
            aria-label="自転車記号"
            name="bicycle[area]"
            defaultValue={area}
            className={styles.areaButtonContainer}
          >
            {Bicycle.areaKeys.map((areaKey) => (
              <FormControlLabel
                key={areaKey}
                value={areaKey}
                control={
                  <Radio
                    className={styles.areaHiddenRadio}
                    inputRef={register({ required: true })}
                  />
                }
                label={
                  <AreaLabel
                    area={areaKey}
                    selected={areaKey === selectedArea}
                  />
                }
                className={styles.areaLabel}
              />
            ))}
          </RadioGroup>
          <OutlinedInput
            aria-label="自転車番号"
            name="bicycle[num]"
            type="number"
            placeholder="00000"
            inputRef={register({ required: true, min: 1, max: 19999 })}
            margin="dense"
            className={styles.num}
            startAdornment={
              <InputAdornment position="start">
                {selectedArea || '(記号)'}
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
    </Paper>
  );
};

export default BicycleFormComponent;
