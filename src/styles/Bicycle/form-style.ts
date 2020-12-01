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
    num: {
      fontSize: '1.5rem',
      marginTop: theme.spacing(0.5),

      '& > input': {
        letterSpacing: '0.3rem',
        paddingLeft: theme.spacing(1),
      },
    },
  }),
);
