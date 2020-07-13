import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const ids = ['CYD', 'TYO', 'MNT'] as const;

const BicycleId = () => {
  return (
    <>
      <div>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          {ids.map((id) => (
            <Button key={id}>{id}</Button>
          ))}
        </ButtonGroup>
      </div>
      <div>
        <TextField
          label="ID"
          id="id"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">CYD</InputAdornment>
            ),
          }}
        />
      </div>
    </>
  );
};

export default BicycleId;
