import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const pages = ["Home", "Benefits", "Our Classes", "Contact Us"];

export default function TemporaryDrawer({
  open,
  toggleDrawer,
}: {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.secondary.main,
        },
      }}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {pages.map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
