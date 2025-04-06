import { Button } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface Props {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/\s/g, "");

  return (
    <Button
      key={page}
      variant="text"
      color="secondary"
      component={AnchorLink}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={
        selectedPage === lowerCasePage ? "active-class" : "default-class"
      }
    >
      {page}
    </Button>
  );
};

export default Link;
