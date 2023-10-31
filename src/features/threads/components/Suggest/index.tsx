import { Box, Card, Stack, Text } from "@chakra-ui/react";
import { useFetchUsers } from "./hooks/usefetchUsers";
import { IUser } from "../../../../interface/user.interface";
import FollowItem from "../FollowItem";

function Suggest() {
  const { data } = useFetchUsers();

  return (
    <Card bg="whiteAlpha.200" p={4}>
      <Text color="white">Suggested for you</Text>
      <Box mt={3}>
        <Stack>
          {data?.map((e: IUser) => (
            <FollowItem
              key={e.id}
              name={e.fullname}
              status="Follow"
              imgProfile={e.profile_picture}
              username={e.username}
            />
          ))}
        </Stack>
      </Box>
    </Card>
  );
}

export default Suggest;
