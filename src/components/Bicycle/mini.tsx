import React from 'react';

// entities
import Bicycle from '~/entities/Bicycle';

// material-ui
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// styles
import useStyles from '~/styles/Bicycle/mini-style';

const BicycleMiniComponent = ({ area, num }: Bicycle) => {
  const value = Bicycle.toValue(area, num);
  const styles = useStyles();
  return (
    <Paper square className={styles.container}>
      <Typography component="span" variant="body2" color="textSecondary">
        自転車No：
      </Typography>
      <Typography component="span" variant="h6" className={styles.value}>
        {value}
      </Typography>
    </Paper>
  );
};

export default BicycleMiniComponent;
