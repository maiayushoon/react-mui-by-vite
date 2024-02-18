import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";
export const MuiChip = () => {
  const [chips, setChips] = useState(["chip1", "chip2", "chip3"]);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Stack direction={"row"} spacing={1}>
      <Chip label="chip" color="primary" size="small"></Chip>
      <Chip
        label="secondary-chip"
        color="secondary"
        size="small"
        variant="outlined"
        icon={<FaceIcon />}
      ></Chip>
      <Chip
        label="secondary-chip"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      ></Chip>
      <Chip
        label="Click"
        color="success"
        onClick={() => alert("Chip Clicked")}
      />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("Chip Clicked")}
        onDelete={() => alert("Delete handler Called")}
      />

      {chips.map((chip) => (
        <Chip key={chip} label="chip" onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};
