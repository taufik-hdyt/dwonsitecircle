import { Avatar, Box } from "@chakra-ui/react";

export default function ProfilePage() {
  return (
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
      />
    </Box>
  );
}
