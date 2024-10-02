import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  Paper,
  Container,
  CssBaseline,
  AppBar,
  Toolbar,
} from "@mui/material";
import Logo from "../public/logo.svg";

import Grid from "@mui/material/Grid2";
import LogoStanford from "./assets/logo-stanfrod.png";
import LogoESpark from "./assets/logo-espark.png";
import LogoRocket from "./assets/logo-rocket.png";

import GoogleClassroomIcon from "./assets/landing/google-classroom.svg";
import RubricIcon from "./assets/landing/rubric.svg";
import GradedPaperIcon from "./assets/landing/paper.svg";
import WarningIcon from "./assets/landing/warning.svg";
import { Gauge } from "@mui/x-charts/Gauge";

const CANNED_FEEDBACK =
  "**Summary Evaluation Against Rubric: Accuracy (10/10):** The essay presents accurate information about Abraham Lincoln's life, presidency, and significant contributions, including key events like his election, the Civil...";

const App = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <CssBaseline />
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          justifyContent: "center",
          boxShadow: "none",
        }}
      >
        <Box height={10} bgcolor="primary.main"></Box>
        <Toolbar>
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{
              height: { xs: 20, sm: 40 },
              marginRight: 2,
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 28 },
            }}
          >
            Spark Space
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ my: 0 }}>
          <Typography
            sx={{
              marginLeft: 1,
              marginRight: 1,
              color: theme.palette.primary.main,
              fontSize: "26px",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Save Time Grading Essays
          </Typography>

          <Typography
            sx={{
              ml: theme.spacing(2),
              mr: theme.spacing(2),
              mb: 3,
              mt: 2,
              fontSize: "18px",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            For ELA teachers in grades 5-12
          </Typography>

          <Box
            paddingLeft={{ xs: 0, md: 20 }}
            paddingRight={{ xs: 0, md: 20 }}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
          >
            <Paper
              sx={{
                padding: 3,
                margin: 2,
                borderRadius: 3,
                display: "flex",
                minWidth: 320,
                width: {
                  xs: "90%",
                  sm: "40%",
                },
              }}
            >
              <Box
                textAlign={"center"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box
                  component="img"
                  src={GradedPaperIcon}
                  sx={{
                    width: isXs ? "60px" : "70px",
                    height: isXs ? "60px" : "70px",
                    objectFit: "contain",
                  }}
                />
                <Typography fontWeight={500}>AI Feedback</Typography>
              </Box>
              <Box ml={3}>
                <Box maxWidth={200}>
                  <Typography fontSize={"0.8rem"}>{CANNED_FEEDBACK}</Typography>
                </Box>
              </Box>
            </Paper>
            <Paper
              sx={{
                padding: 3,
                margin: 2,
                borderRadius: 3,
                display: "flex",
                minWidth: 320,
                width: {
                  xs: "90%",
                  sm: "40%",
                },
              }}
            >
              <Box
                textAlign={"center"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box
                  component="img"
                  src={WarningIcon}
                  sx={{
                    width: isXs ? "60px" : "70px",
                    height: isXs ? "60px" : "70px",
                    objectFit: "contain",
                  }}
                />
                <Typography fontWeight={500}>AI Detection</Typography>
              </Box>
              <Box
                ml={3}
                textAlign={"center"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography fontSize={"0.9rem"}>
                  Probability AI generated
                </Typography>{" "}
                <Box width={"100%"} display={"flex"} justifyContent={"center"}>
                  <Gauge
                    width={100}
                    height={70}
                    value={37}
                    startAngle={-90}
                    endAngle={90}
                    text={"37%"}
                  />
                </Box>
              </Box>
            </Paper>
            <Paper
              sx={{
                padding: 3,
                margin: 2,
                borderRadius: 3,
                display: "flex",
                minWidth: 320,
                width: {
                  xs: "90%",
                  sm: "40%",
                },
              }}
            >
              <Box
                textAlign={"center"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box
                  component="img"
                  src={GoogleClassroomIcon}
                  sx={{
                    width: isXs ? "60px" : "70px",
                    height: isXs ? "60px" : "70px",
                    objectFit: "contain",
                  }}
                />
                <Typography fontWeight={500}>Import Essays</Typography>
              </Box>
            </Paper>
            <Paper
              sx={{
                padding: 3,
                borderRadius: 3,
                margin: 2,
                display: "flex",
                minWidth: 320,
                width: {
                  xs: "90%",
                  sm: "40%",
                },
              }}
            >
              <Box
                textAlign={"center"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box
                  component="img"
                  src={RubricIcon}
                  sx={{
                    width: isXs ? "60px" : "70px",
                    height: isXs ? "60px" : "70px",
                    objectFit: "contain",
                  }}
                />
                <Typography fontWeight={500}>Use Your Rubric</Typography>
              </Box>
            </Paper>
          </Box>

          <Box
            sx={{
              mt: 6,
              mb: 4,
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button size={"large"} variant="contained">
              Try It Free
            </Button>
          </Box>

          <Grid sx={{ mt: 8 }} container>
            <Grid size={{ xs: 12 }}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h6">
                  Created by Teachers, Stanford Professors and the founders of
                  eSpark and Rocketship Public Schools.
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Grid container spacing={{ xs: 2, sm: 24 }}>
                  <Grid
                    size={{ xs: 12, md: 4 }}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Box component={"img"} src={LogoStanford} />
                  </Grid>
                  <Grid
                    size={{ xs: 12, md: 4 }}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Box component={"img"} src={LogoESpark} />
                  </Grid>
                  <Grid
                    size={{ xs: 12, md: 4 }}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Box component={"img"} src={LogoRocket} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default App;
