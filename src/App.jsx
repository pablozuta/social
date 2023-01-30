import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router";
import Profile from "./components/Profile";
import Groups from "./components/Groups";
import Friends from "./components/Friends";
import Market from "./components/Market";
import Settings from "./components/Settings";
import React from 'react'




export default function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,

    }
  })
  return (


    <ThemeProvider theme={darkTheme}>

      <Box bgcolor={"background.default"} color={"text.primary"}>


        <Navbar setMode={setMode} mode={mode} />
        <Stack direction="row" spacing={0.1} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />

          <Routes>
            <Route path="/" element={<Feed />} />

            <Route path="/settings" element={<Settings />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/market" element={<Market />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/groups" element={<Groups />} />
          </Routes>


          <Rightbar />

        </Stack>

      </Box>

    </ThemeProvider>
  );
}
