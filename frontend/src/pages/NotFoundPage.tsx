import React from 'react';
import {
  Box,
  Container,
  Typography,
  makeStyles
} from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.dark,
//     height: '100%',
//     paddingBottom: theme.spacing(3),
//     paddingTop: theme.spacing(3)
//   },
//   image: {
//     marginTop: 50,
//     display: 'inline-block',
//     maxWidth: '100%',
//     width: 560
//   }
// }));

const NotFoundView = () => {

  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        height="100vh"
        justifyContent="center"
        alignItems='center'
      >
        <Container maxWidth="md">
          <Typography
            align="center"
            color="textPrimary"
            variant="h4"
          >
            404: The page you are looking for isn’t here
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="subtitle2"
          >
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>
          <Box textAlign="center">
            <img
              alt="Under development"
              src="/undraw_page_not_found_su7k.svg"
              style={{marginTop: 50, display: 'inline-block',maxWidth: '100%',width: 560}}
            />
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default NotFoundView;
