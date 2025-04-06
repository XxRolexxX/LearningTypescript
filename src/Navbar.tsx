import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "./Link";

const pages = ["Home", "Benefits", "Our Classes", "Contact Us"];

interface Props {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
  toggleDrawer: (newOpen: boolean) => () => void;
}

export const Navbar = ({
  toggleDrawer,
  selectedPage,
  setSelectedPage,
}: Props) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="secondary"
          aria-label="menu"
          sx={{ mr: 5 }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          {pages.map((page) => (
            <Link
              page={page}
              key={page}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
