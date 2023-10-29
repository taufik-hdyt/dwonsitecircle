import { ReactNode } from "react";
import Navbar from "../Navbar";
import {  Grid, GridItem } from "@chakra-ui/react";
interface IProps {
  children?: ReactNode;
  rightSidebar?: ReactNode
}
const Layout: React.FC<IProps> = ({ children ,rightSidebar}): JSX.Element => {
  return (
    <Grid gridTemplateColumns="270px 1.5fr 1fr" bg="blackAlpha.800" h="100vh">
      <GridItem px={6} py={4} borderRight="1px solid gray">
        <Navbar />
      </GridItem>
      {children}
      <GridItem px={6} py={4}>
        {
          rightSidebar
        }
      </GridItem>
    </Grid>
  );
};

export default Layout;
