import { MouseEvent, useState, useRef } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { Control, Controller } from 'react-hook-form';

// material-ui components
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

// styles
import useStyles from '~/styles/Report/Editor/BicycleId-Style';

const bicycleKeys = ['CYD', 'TYO', 'MNT'] as const;
type BicycleKeys = typeof bicycleKeys[number];

type Props = {
  control: Control;
};

type NextComponentWithProps = NextComponentType<NextPageContext, {}, Props>;

const BicycleId: NextComponentWithProps = ({ control }) => {
  const { setValue } = control;
  const [bicycleKey, setBicycleKey] = useState<BicycleKeys | null>(null);
  const inputRef = useRef<HTMLInputElement>();
  const handleBicycleKey: (
    event: MouseEvent<HTMLElement>,
    newBicycleKey?: BicycleKeys,
  ) => void = (_, newBicycleKey) => {
    if (newBicycleKey != null) {
      setBicycleKey(newBicycleKey);
      setValue('bicycleKey', newBicycleKey);
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const classes = useStyles();

  return (
    <>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="bicycleNo">自転車No</InputLabel>
        <FormHelperText id="bicycleIdText">
          英字をタップして選択し数字を入力してください
        </FormHelperText>
        <ToggleButtonGroup
          exclusive
          value={bicycleKey}
          onChange={handleBicycleKey}
          aria-label="outlined primary button group"
          className={classes.toggleButtonGroupContainer}
        >
          {bicycleKeys.map((key) => (
            <ToggleButton key={key} value={key}>
              {key}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <Controller
          control={control}
          name="bicycleNo"
          defaultValue=""
          as={OutlinedInput}
          fullWidth
          id="bicycleNo"
          placeholder="00000"
          type="number"
          inputMode="numeric"
          inputRef={inputRef}
          startAdornment={
            <InputAdornment position="start">
              {bicycleKey || '選択'}
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  );
};

export default BicycleId;
