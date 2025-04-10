import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "./Link";

const NavItem = ["Home", "Benefits", "Our Classes", "Contact Us"];

interface Props {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
  toggleDrawer: (newOpen: boolean) => () => void;
}

const Navbar = ({ toggleDrawer, selectedPage, setSelectedPage }: Props) => {
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
          {NavItem.map((navItem) => (
            <Link
              page={navItem}
              key={navItem}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
