import { Box, Card, Stack, Text } from "@chakra-ui/react"
import FollowItem from "../FollowItem"

function Suggest() {
  return (
    <Card  bg="whiteAlpha.200" p={4} >
        <Text color="white">Suggested for you</Text>
        <Box mt={3}>
          <Stack>
          <FollowItem name="Muhammad Jawir" status="Follow" username="@jawiraja" />
        <FollowItem name="Muhammad Jawir" status="Follow" username="@jawiraja" />
          </Stack>

        </Box>
    </Card>
  )
}

export default Suggest