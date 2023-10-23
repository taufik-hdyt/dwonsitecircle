import {
  Avatar,
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import { BiImageAdd } from "react-icons/bi";
import Thread from "../../features/threads/components/ThreadItem";
import Suggest from "../../features/threads/components/Suggest";
import CardProfile from "../../features/threads/components/CardProfile";

function Home() {


  return (
    <Grid gridTemplateColumns="270px 1.5fr 1fr" bg="blackAlpha.800" h="100vh">
      <GridItem px={6} py={4} borderRight="1px solid gray">
        <Navbar />
      </GridItem>

      <GridItem px={6} py={4} borderRight="1px solid gray">
        <Text color="white" fontSize="lg">
          Home
        </Text>
        <HStack mt={5} justify="space-between">
          <HStack>
            <Avatar size="sm" mr={3} />
            <Input
              variant="unstyled"
              color="whiteAlpha.400"
              placeholder="What is happening?!"
            />
          </HStack>
          <HStack>
            <Box cursor="pointer">
              <BiImageAdd size={25} color="green" />
            </Box>
            <Button colorScheme="whatsapp" size="xs" px={3} rounded="full">
              Post
            </Button>
          </HStack>
        </HStack>

        <Stack mt={6}>
          <Thread
            comment={100}
            likes={389}
            name="Indah Pra Karya"
            time="4h"
            username="@indahaja"
            imgProfile="https://bit.ly/dan-abramov"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis in a culpa accusamus exercitationem possimus inventore veniam laudantium. Facere eius illum culpa saepe, voluptate quis! Molestias eligendi quia fugiat ducimus?"
          />
        </Stack>
      </GridItem>

      <GridItem px={6} py={4}>
        <CardProfile />
        <Box mt={4}>
          <Suggest />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default Home;
