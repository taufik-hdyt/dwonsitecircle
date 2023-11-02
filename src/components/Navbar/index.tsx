import {
  Box,
  Button,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { TbUserSearch } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "../../store/type/RootState";

function Navbar() {
  const auth = useSelector((state: RootState) => state.auth)

  return (
    <Stack h="full" justify="space-between">
      <Box>
        <Heading color="green">circle</Heading>
        <Stack mt={8} spacing={6}>
          <Link href="/">
            <HStack cursor="pointer" color="white">
              <AiOutlineHome size={25} />
              <Text fontSize="sm  ">Home</Text>
            </HStack>
          </Link>
          <Link href="/search">
            <HStack cursor="pointer" color="white">
              <TbUserSearch size={25} />
              <Text fontSize="sm  ">Search</Text>
            </HStack>
          </Link>
          <Link href="/follows">
            <HStack cursor="pointer" color="white">
              <AiOutlineHeart color="transparant" size={25} />
              <Text fontSize="sm  ">Follows</Text>
            </HStack>
          </Link>
          <Link href={`profile/${auth.user.username}`}>
            <HStack cursor="pointer" color="white">
              <AiOutlineUser size={25} />
              <Text fontSize="sm  ">Profile</Text>
            </HStack>
          </Link>

          <Button rounded="full" colorScheme="whatsapp">
            Create Post
          </Button>
        </Stack>
      </Box>

      <Button
        fontWeight="light"
        color="white"
        display="flex"
        justifyContent="start"
        leftIcon={<BiLogOut size={30} />}
        colorScheme="teal"
        variant="unstyled"
        // onClick={handleLogout}

      >
        Logout
      </Button>
    </Stack>
  );
}

export default Navbar;
