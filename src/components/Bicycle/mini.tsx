import React from 'react';

// entities
import Bicycle from '~/entities/Bicycle';

// material-ui
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

type Props = {
  area: Bicycle['area'];
  num: Bicycle['num'];
};

const BicycleMiniComponent = ({ area, num }: Props) => {
  const value = Bicycle.toValue(area, num);
  return (
    <Paper square>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        my={1}
        py={0.5}
      >
        <Typography variant="body2" color="textSecondary">
          自転車No：
        </Typography>
        <Typography variant="h6">
          <Box letterSpacing={4} mx={1}>
            {value}
          </Box>
        </Typography>
      </Box>
    </Paper>
  );
};

export default BicycleMiniComponent;
