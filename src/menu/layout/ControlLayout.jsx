import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/system/Box";
import { NavbarComponent } from "../"
import { Sidebar } from "../components/Sidebar"


const drawerWidth = 280;
export const ControlLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavbarComponent drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth}></Sidebar>
      <Box component='main'
        sx={{ flexGrow: 1, p: 0.5, justifyContent: 'center' }}

      >
        <Toolbar />
        {children}

      </Box>
    </Box>
  )
}