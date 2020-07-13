import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toggleButtonGroupContainer: {
      margin: theme.spacing(1, 0),
    },
  }),
);

export default useStyles;
