import { ReactNode } from "react";
import Navbar from "../Navbar";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import CardProfile from "../../features/threads/components/CardProfile";
import Suggest from "../../features/threads/components/Suggest";
import Footer from "../Footer";

interface IProps {
  children?: ReactNode;
}
const Layout: React.FC<IProps> = ({ children }): JSX.Element => {
  return (
    <Grid gridTemplateColumns="270px 1.5fr 1fr" bg="blackAlpha.800" h="100vh">
      <GridItem px={6} py={4} borderRight="1px solid gray">
        <Navbar />
      </GridItem>
      {children}
      <GridItem px={6} py={4}>
        <CardProfile />
        <Box mt={4}>
          <Suggest />
          <Footer />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Layout;
