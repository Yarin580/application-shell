import { ReactNode } from "react";
import { Box, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import TopNavBar from "./TopNavBar";
import Sidebar from "./SideBar";
import { useState } from "react";
import { motion } from "framer-motion";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainContent = ({ children }: MainLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <TopNavBar onMenuClick={handleSidebarToggle} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          flexGrow: 1,

          paddingLeft: theme.spacing(isMobile ? 3 : 4),
          paddingRight: theme.spacing(isMobile ? 3 : 4),
        }}
      >
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginTop: "64px",
            width: "100%",
            paddingLeft: isSidebarOpen ? "240px" : "0",
          }}
        >
          {children}
        </Box>
      </motion.div>
    </Box>
  );
};

export default MainContent;
