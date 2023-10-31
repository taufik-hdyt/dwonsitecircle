import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

interface IProps {
  name?: string;
  username?: string;
  profile_bio?: string;
  following?: [];
  followers?: [];
  profile_picture?: string;
}
function CardProfile({
  followers,
  following,
  name,
  profile_bio,
  profile_picture,
  username,
}: IProps) {

  return (
    <Card bg="whiteAlpha.200" p={4}>
      <Text color="white">My Profile</Text>
      <Box
        pos="relative"
        h="70px"
        mt={3}
        rounded="xl"
        bg="linear-gradient(to top, #96fbc4 0%, #f9f586 100%)"
      >
        <Box
          pos="absolute"
          bottom={-6}
          left={4}
          p={1}
          bg="blackAlpha.800"
          rounded="full"
        >
          <Avatar size="md" src={profile_picture} />
        </Box>
      </Box>
      <Flex justify="right" mt={-6}>
        <Button
          color="white"
          size="xs"
          rounded="full"
          variant="outline"
          mt={8}
          w="fit-content"
          _hover={{ bg: "gray" }}
        >
          Edit Profile
        </Button>
      </Flex>

      <Stack spacing={0}>
        <Text mt={3} fontSize="lg" fontWeight="semibold" color="white">
          ✨{name}✨
        </Text>
        <Text fontSize="xs" color="whiteAlpha.600">
          @{username}
        </Text>
        <Text fontSize="sm" color="whiteAlpha.800">
          {profile_bio}
        </Text>
        <HStack fontSize="sm">
          <HStack>
            <Text color="whiteAlpha.800">{following?.length ? following.length : 0}</Text>
            <Text color="whiteAlpha.600">Following</Text>
          </HStack>
          <HStack>
            <Text color="whiteAlpha.800">{followers?.length ? followers.length : 0}</Text>
            <Text color="whiteAlpha.600">Followers</Text>
          </HStack>
        </HStack>
      </Stack>
    </Card>
  );
}

export default CardProfile;
