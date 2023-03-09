

import { useSelector, useDispatch } from 'react-redux '
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import MenuOutlined from '@mui/icons-material/MenuOutlined';
import { Grid, Typography } from '@mui/material';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import { showSidebar } from '../../store/slices/sidebar';


export const NavbarComponent = ({ drawerWidth = 240 }) => {


  const { showedSidebar } = useSelector(state => state.sidebar);
  const dispatch = useDispatch();
  showedSidebar ? drawerWidth : drawerWidth = 0

  return (
    <AppBar position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        transition: 'ease-in-out 0.2s'
      }}

    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{
            mr: 2, display: { sm: 'none' }
          }}
        >
          <MenuOutlined />
        </IconButton>

        <IconButton
          sx={{
            position: 'absolute',
            left: '-19px',
            zIndex: '3',
            color: 'white',
          }}
          onClick={() => dispatch(showSidebar())}
        >
          {
            showedSidebar
              ?
              <ArrowCircleLeftSharpIcon sx={{ fontSize: '50px', textShadow: 'inherit' }} />
              :
              <ArrowCircleRightSharpIcon sx={{ fontSize: '50px', textShadow: 'inherit' }} />

          }
        </IconButton>

        <Grid container direction='row' justifyContent='space-around'>
          <Typography>Control OBEN</Typography>

        </Grid>


      </Toolbar>
    </AppBar >
  );
}
