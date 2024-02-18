import { Snackbar, Button, Alert, AlertProps } from "@mui/material"
import { useState,  ForwardedRef, forwardRef} from "react"

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref){
        return <Alert elevation={6} ref={ref} {...props}></Alert>
    }
)

export const MuiSnackBar = () => {
    const [open, setOpen] = useState(false)
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if(reason==='clickaway') {
            return
        }
        setOpen( false)
    }
  return (
    <>
    
    <Button onClick={()=> setOpen(true)}>Submit</Button>
    {/* <Snackbar message='form Submitted Successfully!' 
    autoHideDuration={4000} 
    open={open} 
    onClose={handleClose}
    anchorOrigin={{
        vertical:'bottom',
        horizontal:'center'
    }}

    >

    </Snackbar> */}
    //custom Snackbar
    <Snackbar 
    open={open}
    autoHideDuration={6000}
    onClose={handleClose}
    >
        <SnackbarAlert onClose={handleClose} severity="success">
            Form Submitted Successfully!!
        </SnackbarAlert>
    </Snackbar>
    </>
  )
}
