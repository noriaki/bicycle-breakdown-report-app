import { useState } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const ids = ['CYD', 'TYO', 'MNT'] as const;

const BicycleId = () => {
  const [bicycleId, setBicycleId] = useState<string | null>(null);
  const handleBicycleId = (e, newBicycleId) => setBicycleId(newBicycleId);

  return (
    <>
      <div>
        <ToggleButtonGroup
          exclusive
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
      </div>
      <div>
        <TextField
          id="id"
          label="ID"
          placeholder="000000"
          fullWidth
          type="number"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputMode: 'numeric',
            startAdornment: (
              <InputAdornment position="start">
                {bicycleId || '選択'}
              </InputAdornment>
            ),
          }}
        />
      </div>
    </>
  );
};

export default BicycleId;
