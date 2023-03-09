
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { PaymentView } from '../views/PaymentView'



export const StyledButton = ({ txtButton = 'Default', onClickView = 'NothingSelectedView' }) => {
  return (
    <>
      <Button variant="contained"
        style={{ borderRadius: 30 }}
        sx={{
          height: {
            xs: '10vh',
            sm: '15vh',
            md: '15vh',
            lg: '20vh',
            xl: '28vh',
          },
          width: {
            xs: '20vh',
            sm: '25vh',
            md: '25vh',
            lg: '30vh',
            xl: '38vh',
          },
          margin: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5,
          }
        }}

        onClick={() => {<PaymentView/>}}
        
        >

        <Typography>{txtButton}</Typography>
      </Button>
    </>
  )
}
