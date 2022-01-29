import { Container, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../Routes/routes";

export const PastQuizzes = () => {
  const relatoryData = JSON.parse(localStorage.getItem("quiz") || "");

  const navigate = useNavigate();

  let index = 0;

  const seeRelatory = (id: number) => {
    navigate(`${ROUTES.RELATORY}/${id}`);
  };

  interface iData {
    data: {
      id: number;
    };
  }

  return (
    <>
      <Box
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        padding={"100px"}
      >
        <Container maxWidth="md">
          {relatoryData.map((item: iData) => {
            index += 1;
            let numberForm = "";

            if (index < 10) {
              numberForm = `#00${index}`;
            } else if (index < 100) {
              numberForm = `#0${index}`;
            } else {
              numberForm = `#${index}`;
            }
            item.data.id = index;
            return (
              <Box
                key={item.data.id}
                color={"white"}
                bgcolor={"#1976d2"}
                marginBottom={"20px"}
                padding={"20px"}
                borderRadius={"15px"}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  seeRelatory(item.data.id);
                }}
              >
                <Typography
                  variant="h3"
                  fontSize={"20px"}
                  fontWeight={"400"}
                  component="div"
                >
                  {numberForm}
                </Typography>
              </Box>
            );
          })}
        </Container>
      </Box>
    </>
  );
};
