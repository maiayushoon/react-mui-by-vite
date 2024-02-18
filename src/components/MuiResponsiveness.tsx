import { Box } from "@mui/material";
import { styled } from "@mui/material";

// const StyledBox2 = styled(Box)(({theme}) => ({
//   height: '250px',
//   width: '250px',
//   backgroundColor: theme.status.danger,
// }));

// const StyledBox1 = styled(Box)(({theme}) => ({
//   height: '250px',
//   width: '250px',
//   backgroundColor: theme.palette.neutral?.main,
// }));

const StyledBox = styled(Box)(({theme}) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.palette.neutral?.darker,
}));

export const MuiResponsiveness = () => {
  return (
    <>
      <Box
        sx={{
          height: 300,
          width: {
            xs: 100, //0
            sm: 200, //600
            md: 300, //900
            lg: 400, //1200
            xl: 500, //1536
          },
          bgcolor: "secondary.light",
        }}
      >
        MuiResponsiveness
      </Box>
      {/* <StyledBox2/>
      <StyledBox1/> */}
      <StyledBox />
    </>
  );
};
