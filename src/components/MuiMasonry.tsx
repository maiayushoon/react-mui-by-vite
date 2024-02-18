import { Box, Paper, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const heights = [
  211, 125, 45, 87, 23, 98,94,88,49,82,69,39,75,81,92,95,45,65,98,26,56,56,45,78,95,74,76,98,56,158,195
];

export const MuiMasonry = () => {
  return (
    <Box sx={{ width: '100%', minHeight: 400 }}>
      <Masonry columns={5} spacing={1}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignContent: "center",
            //   height,
              border: "1px solid",
            }}
          >
            <Accordion sx={{minHeight:height}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography >Accordion {index +1 }</Typography>
                </AccordionSummary>
                <AccordionDetails>Content</AccordionDetails>
            </Accordion>

          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};
