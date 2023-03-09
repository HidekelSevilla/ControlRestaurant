import { useSelector } from 'react-redux '


import Grid from "@mui/material/Grid";
import { Options } from "../components/Options";




export const NothingSelectedView = () => {

    const { showedSidebar } = useSelector(state => state.sidebar);

    return (
        <Grid
            container
            position={showedSidebar ? 'relative' : 'absolute'}
            right={showedSidebar ? '' : '0'}

            alignItems='center'
            justifyContent={'center'}

            sx={{ minHeight: 'calc(104vh - 110px)', backgroundColor: 'primary.main', p: 4, borderRadius: 6,  }}
        >
            <Options />
        </Grid>
    )
}
