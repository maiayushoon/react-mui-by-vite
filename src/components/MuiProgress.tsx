import { Stack, CircularProgress, LinearProgress } from "@mui/material";

export const MuiProgress = () => {
  return (
    <Stack spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress></CircularProgress>
      <CircularProgress color="success"></CircularProgress>
      <CircularProgress color="error"></CircularProgress>
      <CircularProgress color="info" variant="determinate" value={60}></CircularProgress>

      <LinearProgress></LinearProgress>
      <LinearProgress color="success"></LinearProgress>
      <LinearProgress color="error"></LinearProgress>
      <LinearProgress color="info" variant="determinate" value={60}></LinearProgress>
    </Stack>
  );
};
