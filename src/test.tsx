import { Box, Paper } from "@mui/material";

interface ItemProps {
  name: string;
  isPacked: boolean;
}

function Item({ name, isPacked }: ItemProps) {
  return <div>{isPacked ? name + " ✅" : name + " ❌"}</div>;
}

export function Backpack() {
  const items: ItemProps[] = [
    { name: "Bog", isPacked: true },
    { name: "Computer", isPacked: true },
    { name: "Telefon", isPacked: false },
    { name: "Lineal", isPacked: false },
  ];
  return (
    <Box>
      <h2>Hvad er i min rygsæk?</h2>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {items.map((item) => (
          <Box key={item.name}>
            <Paper
              elevation={5}
              sx={{
                bgcolor: "#e6e1d3",
                width: "fit-content",
                padding: 2,
                ml: 2,
              }}
            >
              <Item {...item} />
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export function Tal() {
  let str = "";

  for (let i = 0; i < 9; i++) {
    str = str + i;
  }

  return <Box>{str}</Box>;
}

import "./test.css";

<div className="myClass">Dette er styled med en ekstern CSS-fil</div>;
