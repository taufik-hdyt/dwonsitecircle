import {
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { TbUserSearch } from "react-icons/tb";
import { RootState } from "../../store/type/RootState";
import { useSelector } from "react-redux";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
const DrawerMenu: React.FC<IProps> = ({ isOpen, onClose }): JSX.Element => {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <Drawer size="xs" isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg="blackAlpha.800">
        <DrawerCloseButton color="white" />

        <DrawerBody>
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
              <Link href={`profile/${auth.user.id}`}>
                <HStack cursor="pointer" color="white">
                  <AiOutlineUser size={25} />
                  <Text fontSize="sm  ">Profile</Text>
                </HStack>
              </Link>
            </Stack>
          </Box>
        </DrawerBody>

        <DrawerFooter>
          <HStack justify="left" w="full">
            <Avatar src={auth?.user.profile_picture} size="sm" />
            <Stack spacing={0}>
              <Text color="white">{auth?.user.fullname}</Text>
              <Text color="white" fontSize="xs">
                {auth?.user.email}
              </Text>
            </Stack>
          </HStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerMenu;
