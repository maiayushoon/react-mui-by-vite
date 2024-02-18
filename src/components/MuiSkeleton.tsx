import { Skeleton, Stack, Box, Avatar, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    // <Stack spacing={2} width={250}>
    //     <Skeleton variant='rectangular' width={100} height={60}></Skeleton>
    //     <Skeleton variant='text'></Skeleton>
    //     <Skeleton variant='circular' width={50} height={50}></Skeleton>

    //     <Skeleton variant='rectangular' width={100} height={60} animation='wave'></Skeleton>
    //     <Skeleton variant='text' animation='wave'></Skeleton>
    //     <Skeleton variant='circular' width={50} height={50} animation='wave'></Skeleton>
    // </Stack>
    <Box sx={{ width: "250px" }}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={256}
          height={144}
          animation="wave"
        />
      ) : (
        <img
          src="https://th.bing.com/th/id/R.794d23085a10bf2c0265e9ec4579cbf3?rik=6SKtGPmSTHCw0g&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Random-Wallpaper-Download.jpg&ehk=ROAAUgLBjdMzkM6PEeQ6SiFjrASbwBs8RVnOcOIMlGk%3d&risl=&pid=ImgRaw&r=0"
          alt="bulb"
          width={256}
          height={144}
        />
      )}
      <Stack
        direction={"row"}
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {loading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
        ) : (
          <Avatar>V</Avatar>
        )}
        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <Box>
              <Typography variant="body1">
                <Skeleton variant="text" width={"100%"} animation="wave" />
              </Typography>
              <Typography variant="body2">
                <Skeleton variant="text" width={"100%"} animation="wave" />
              </Typography>
            </Box>
          ) : (
            <Typography variant="body1">React MUI Tutorial</Typography>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};
