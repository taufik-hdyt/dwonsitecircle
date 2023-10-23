import { Box, Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { AiFillHome ,AiOutlineUser} from "react-icons/ai";
import { TbUserSearch } from "react-icons/tb";
import { GiSelfLove } from "react-icons/gi";



function Navbar() {
  return (
    <Box>
      <Heading color="green">Circle</Heading>
      <Stack mt={8} spacing={6}>
        <HStack color="white">
          <AiFillHome size={25} />
          <Text fontSize="sm  ">Home</Text>
        </HStack>
        <HStack color="white">
          <TbUserSearch size={25} />
          <Text fontSize="sm  ">Search</Text>
        </HStack>
        <HStack color="white">
          <GiSelfLove size={25} />
          <Text fontSize="sm  ">Follows</Text>
        </HStack>
        <HStack color="white">
          <AiOutlineUser size={25} />
          <Text fontSize="sm  ">Profile</Text>
        </HStack>

        <Button rounded='full' colorScheme="whatsapp">Create Post</Button>
      </Stack>
    </Box>
  );
}

export default Navbar;
