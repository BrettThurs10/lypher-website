import * as React from "react";
import Header from "./Header";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Hero from "./Hero";
import { Typography, Grid } from "@mui/material";
import galaxy from "./img/galaxyBG.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ReactComponent as Discord } from "./img/discord.svg";

const App = () => {
  React.useEffect(() => {
    document.title = "Lypher App";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Grid
        spacing={2}
        sx={{
          background: "green",
          height: window.innerWidth > "900px" ? "100vh" : undefined,
          backgroundImage: `url(${galaxy})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <Hero />
        <Grid
          container
          spacing={2}
          sx={{
            background: `rgba(0,18,51, 1.0)`,
            paddingLeft: 5,
            paddingRight: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid xs={6} md={8}>
            <Grid
              spacing={2}
              container
              sx={{ alignItems: "center", padding: 4 }}
            >
              <Grid item>
                <TwitterIcon sx={{ color: "white" }} />
              </Grid>
              <Grid item>
                <Discord style={{ width: 26 }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6} md={4} sx={{ textAlign: "right" }}>
            <a href="https://lypher.app/privacy.html">
              <Typography sx={{ color: "white", fontSize: 10 }}>
                Privacy policy
              </Typography>
            </a>
          </Grid>
          <Typography sx={{ color: "white", fontSize: 9, marginBottom: 10 }}>
            Developed by Big Bear Bytes, Copyright 2022
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default App;
