import Typography from '@mui/material/Typography'
import TurnedInNot from '@mui/icons-material/TurnedInNot';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ObenLogo from '../../assets/Oben.png'

import { useSelector, useDispatch } from 'react-redux '








export const Sidebar = ({ drawerWidth = 240 }) => {

  const { showedSidebar } = useSelector(state => state.sidebar);
  const dispatch = useDispatch();
  return (

    <Box
      component='nav'

      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, zIndex: '2' }}
    >


      <Drawer
        variant='persistent'
        open={showedSidebar}

        sx={{
          display: { xs: '' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >


        <Toolbar >
          <img src={ObenLogo} width='62' alt='ObenLogo'></img>
          <Typography variant='h6' noWrap component='div'>
            OBEN
          </Typography>
        </Toolbar>


        <Divider />

        <List>
          {
            ['Orden 1', 'Orden 2', 'Orden 3', 'Orden 4', 'Orden 5', 'Orden 6'].map(text => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText secondary={'Exercitation cillum irure elit consectetur.'} />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>

      </Drawer>

    </Box >
  )
}