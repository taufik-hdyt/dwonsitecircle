import { Avatar, Box, Text } from "@chakra-ui/react";
import { RootState } from "../../store/type/RootState";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const auth = useSelector((state: RootState) => state.auth);
  console.log(auth);
  return (
    <Box>
      <Box
        pos="relative"
        bg="linear-gradient(to top, #96fbc4 0%, #f9f586 100%)"
        h="200px"
      >
        <Avatar
          left="50%"
          transform="translate(-50%, 0)"
          pos="absolute"
          bottom={-10}
          mx="auto"
          size="xl"
          src={auth.user.profile_picture}
        />
      </Box>
      <Box textAlign="center">
        <Text fontSize="3xl" fontWeight="semibold" mt={10}>
          {auth.user.fullname}
        </Text>
        <Text>@{auth.user.username}</Text>
        <Text>{auth.user.profile_description}</Text>
      </Box>
    </Box>
  );
}
