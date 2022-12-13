import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router";
import Pages from "./components/Pages";





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

    <Routes>
    <Route path="/" element={<Feed />}/>
    <Route path="/pages" element={<Pages />}/>
    

  
    </Routes>
    <Rightbar/>
        
      </Stack>

    </Box>

    </ThemeProvider>
  );
}
