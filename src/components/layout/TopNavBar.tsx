import { AppBar, Toolbar, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

interface NavbarProps {
  onMenuClick: () => void;
}

const TopNavBar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={onMenuClick}
          sx={{ color: "primary.main" }}
        >
          <MenuIcon />
          <span style={{ marginLeft: "8px" }}>Application Shell</span>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
