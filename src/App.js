import React from "react";

import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";

function App() {
  const [mode, setmode] = React.useState("dark");

  const darkmode = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={darkmode}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <Sidebar setmode={setmode} mode={mode} />
            <Feed />
            <Rightbar />
          </Box>
          <Add />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
