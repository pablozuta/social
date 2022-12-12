import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Box, createTheme, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";



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
      <Navbar />

      <Stack direction="row" spacing={0.1} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed />
        <Rightbar />
      </Stack>

    </Box>

    </ThemeProvider>
  );
}
