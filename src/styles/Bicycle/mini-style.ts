import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing(1, 0),
      padding: theme.spacing(0.5, 0),
    },
    value: {
      marginLeft: theme.spacing(1),
      letterSpacing: '.3em',
    },
  }),
);
