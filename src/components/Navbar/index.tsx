import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { TbUserSearch } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "../../store/type/RootState";
import ALertConfirm from "../Alert/ALert";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_LOGOUT } from "../../store/RootReducer";

function Navbar() {
  const auth = useSelector((state: RootState) => state.auth)
  const {isOpen,onClose,onOpen} = useDisclosure()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleLogout(){
    dispatch(AUTH_LOGOUT())
    navigate("/login")
    onClose()
  }

  return (
    <Stack h="full" justify="space-between">
      <Box>
        <Heading color="green">circle</Heading>
        <Stack mt={8} spacing={6}>
          <Link to="/">
            <HStack cursor="pointer" color="white">
              <AiOutlineHome size={25} />
              <Text fontSize="sm  ">Home</Text>
            </HStack>
          </Link>
          <Link to="/search">
            <HStack cursor="pointer" color="white">
              <TbUserSearch size={25} />
              <Text fontSize="sm  ">Search</Text>
            </HStack>
          </Link>
          <Link to="/follows">
            <HStack cursor="pointer" color="white">
              <AiOutlineHeart color="transparant" size={25} />
              <Text fontSize="sm  ">Follows</Text>
            </HStack>
          </Link>
          <Link to={`profile/${auth.user.id}`}>
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
        onClick={onOpen}

      >
        Logout
      </Button>

      <ALertConfirm onOk={()=>handleLogout()} isOpen={isOpen} onCLose={onClose} />
    </Stack>
  );
}

export default Navbar;
