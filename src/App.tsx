import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { Navbar } from "./Navbar";
import TemporaryDrawer from "./TemporaryDrawer";

function App() {
  const [open, setOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState<string>("home");
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Navbar
        toggleDrawer={toggleDrawer}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <TemporaryDrawer open={open} toggleDrawer={toggleDrawer} />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <Typography sx={{ pt: 4 }}>
          Velkommen til min hjemmeside. Den skal fungere som en sandkasse for
          mine fremtidige projekter.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          dignissim, nisl quis scelerisque iaculis, augue purus sagittis justo,
          nec pulvinar diam dui at est.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas dignissim, nisl quis scelerisque iaculis,
          augue purus sagittis justo, nec pulvinar diam dui at est.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Maecenas dignissim, nisl
          quis scelerisque iaculis, augue purus sagittis justo, nec pulvinar
          diam dui at est.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Maecenas dignissim, nisl quis scelerisque iaculis, augue purus
          sagittis justo, nec pulvinar diam dui at est.Lorem ipsum dolor sit
        </Typography>
      </Container>
    </>
  );
}

export default App;
