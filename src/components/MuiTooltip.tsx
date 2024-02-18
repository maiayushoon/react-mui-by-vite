import { Tooltip, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

export const MuiTooltip = () => {
    //When activated, Tooltips display a text label identifying an element, such as a description of its function.
  return (
<>
<Tooltip title='Delete' placement="right">
     <IconButton>
        <DeleteIcon></DeleteIcon>
    </IconButton>
   </Tooltip>
   <Tooltip title='Delete' placement="right" arrow enterDelay={500} leaveTouchDelay={200} leaveDelay={100}>
     <IconButton>
        <DeleteIcon></DeleteIcon>
    </IconButton>
   </Tooltip>
</>

  )
}
