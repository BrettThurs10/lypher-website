import { Typography, Grid } from "@mui/material";
import React from "react";
import screenies from "./img/screenies.png";
import playStore from "./img/playStore.png";
import appStore from "./img/appStore.png";

export default function Hero() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        position: "relative",
        padding: 10,
        height: "90%",
        alignItems: "center",
      }}
    >
      <Grid xs={12} md={6} sx={{ alignSelf: "center" }}>
        <Typography variant="h4" style={{ color: "white" }}>
          Join the free beta
        </Typography>

        <Typography variant="p" style={{ color: "white", lineHeight: 1.5 }}>
          Lypher is a board game companion app that organizes players and tracks
          their resources. It can adapt to whatever game or tabletop session
          your crew wants.
          {/* Lypher is a must-have abstract resource tracker for board games or
            tabletop sessions. Lypher can adapt to whatever your game group
            wants to play. It has a streamlined resource selection system so you
            can choose to track enemy health, gold, threats, shields, food, or
            whatever you want. Also, you can customize your players and organize
            them by color and leadership. Get those chits off the table and get
            into the game. Download Lypher now. */}
        </Typography>

        <Grid spacing={2} container sx={{ marginTop: 2, marginBottom: 8 }}>
          <Grid item>
            <a href="https://play.google.com/store/apps/details?id=com.lypherApp">
              <img src={playStore} alt="" style={{ height: 50 }} />
            </a>
          </Grid>
          <Grid item>
            <a href="https://testflight.apple.com/join/I30kbeus">
              <img src={appStore} alt="" style={{ height: 50 }} />
            </a>
          </Grid>
        </Grid>
      </Grid>

      <Grid xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src={screenies}
          alt="lypher app screenshots"
          style={{ height: "100%", maxHeight: 500 }}
        />
      </Grid>
    </Grid>
  );
}
