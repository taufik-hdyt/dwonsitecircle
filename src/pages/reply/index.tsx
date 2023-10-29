import { Box, Button, GridItem, Link } from "@chakra-ui/react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Layout from "../../components/Layout/Layout";
import CardProfile from "../../features/threads/components/CardProfile";
import Suggest from "../../features/threads/components/Suggest";
import Footer from "../../components/Footer";

import ThreadDetail from "../../features/threads/components/ThreadDetail";

function Reply() {
  return (
    <Layout>
      <GridItem overflowY="auto" px={6} py={4} borderRight="1px solid gray">
        <Link href="/">
          <Button
            display="flex"
            color="white"
            variant="unstyled"
            leftIcon={<IoChevronBackCircleOutline size={24} />}
          >
            Status
          </Button>
        </Link>
        {/*  REPLY =================== */}
        <Box mt={4}>
          <ThreadDetail />
        </Box>

        {/* ============================================================ */}
      </GridItem>
      <Box px={6} py={4}>
        <CardProfile
          follower="100"
          following="200"
          name="Toni"
          profile_bio="okelah"
          profile_picture="kosing"
          username="toniaja"
        />
        <Box mt={4}>
          <Suggest />
          <Footer />
        </Box>
      </Box>
    </Layout>
  );
}

export default Reply;
