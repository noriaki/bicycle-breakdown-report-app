import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    formContainer: {
      margin: theme.spacing(3, 0),
      padding: theme.spacing(1),
    },
    areaButtonContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    areaLabel: {
      marginLeft: 0,
      marginRight: theme.spacing(1),
    },
    areaHiddenRadio: {
      display: 'none',
    },
  }),
);
