import { CircularProgress, Box, Container, Typography } from "@mui/material";

export const LoadingCard = () => {

  return (
    <>
      <Box height={"100vh"} display={"flex"} alignItems={"center"}>
        <Container maxWidth="md">
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            padding={"25px"}
          >
            <CircularProgress />
            <Typography
              variant="h5"
              component="div"
              marginTop={"20px"}
            >
              Searching questions...
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};
