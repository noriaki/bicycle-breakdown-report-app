import { FC, MouseEvent, useState, useRef } from 'react';

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

const ids = ['CYD', 'TYO', 'MNT'] as const;
type Ids = typeof ids[number];

const BicycleId: FC = () => {
  const [bicycleId, setBicycleId] = useState<Ids | null>(null);
  const inputRef = useRef<HTMLInputElement>();
  const handleBicycleId: (
    event: MouseEvent<HTMLElement>,
    newBicycleId?: Ids,
  ) => void = (_, newBicycleId) => {
    if (newBicycleId != null) {
      setBicycleId(newBicycleId);
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const classes = useStyles();

  return (
    <>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="bicycleId">自転車No</InputLabel>
        <FormHelperText id="bicycleIdText">
          英字をタップして選択し数字を入力してください
        </FormHelperText>
        <ToggleButtonGroup
          exclusive
          value={bicycleId}
          onChange={handleBicycleId}
          aria-label="outlined primary button group"
          className={classes.toggleButtonGroupContainer}
        >
          {ids.map((id) => (
            <ToggleButton key={id} value={id}>
              {id}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <OutlinedInput
          fullWidth
          id="bicycleId"
          placeholder="00000"
          type="number"
          inputMode="numeric"
          inputRef={inputRef}
          startAdornment={
            <InputAdornment position="start">
              {bicycleId || '選択'}
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  );
};

export default BicycleId;
