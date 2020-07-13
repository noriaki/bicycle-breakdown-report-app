import { useState, useRef } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

const ids = ['CYD', 'TYO', 'MNT'] as const;

const BicycleId = () => {
  const [bicycleId, setBicycleId] = useState<string | null>(null);
  const inputRef = useRef();
  const handleBicycleId = (e, newBicycleId) => {
    if (newBicycleId !== null) {
      setBicycleId(newBicycleId);
    }
    inputRef.current.focus();
  };

  return (
    <>
      <FormControl fullWidth variant="outlined">
        <InputLabel shrink htmlFor="bicycleId">
          自転車No
        </InputLabel>
        <FormHelperText id="bicycleIdText">
          英字をタップして選択し数字を入力してください
        </FormHelperText>
        <ToggleButtonGroup
          exclusive
          size="large"
          value={bicycleId}
          onChange={handleBicycleId}
          aria-label="outlined primary button group"
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
