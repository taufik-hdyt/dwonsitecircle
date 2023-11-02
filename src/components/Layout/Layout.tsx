import { ReactNode } from "react";
import Navbar from "../Navbar";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import CardProfile from "../../features/threads/components/CardProfile";
import Suggest from "../../features/threads/components/Suggest";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../store/type/RootState";
interface IProps {
  children?: ReactNode;
}
const Layout: React.FC<IProps> = ({ children }): JSX.Element => {
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <Grid
      gridTemplateColumns={"300px 1.5fr 1fr"}
      bg="blackAlpha.800"
      h="100vh"
    >
      <GridItem
        px={6}
        py={4}
        borderRight="1px solid gray"

      >
        <Navbar />
      </GridItem>
      <GridItem
        px={6}
        py={4}
        borderRight="1px solid gray"
        overflowY="auto"
        h="100vh"

      >
        {children}
      </GridItem>
      <GridItem px={6} py={4}>
        <CardProfile
          followers={auth.followers}
          following={auth.followings}
          name={auth.user.fullname}
          profile_bio={auth.user.profile_description}
          profile_picture={auth.user.profile_picture}
          username={auth.user.username}
        />
        <Box mt={4}>
          <Suggest />
          <Footer />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Layout;
