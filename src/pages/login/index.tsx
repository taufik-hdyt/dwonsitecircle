import { Box, Button, FormControl, Heading, Input, Link, Stack, Text } from "@chakra-ui/react";

function Login() {
  return (
    <Box bg="blackAlpha.800" h='100vh' display='flex' justifyContent='center' alignItems='center' >
        <Box w='350px'>
          <Heading color="green" size='4xl'>circle</Heading>
          <Text color='white' mt={3} fontSize='xl'>Login to Circle</Text>
          <Stack mt={3} spacing={3} color='white'>
          <FormControl>
            <Input  placeholder="Email/Username" />
          </FormControl>
          <FormControl>
            <Input placeholder="Password" />
          </FormControl>

          <Text fontSize='sm' textAlign='end'>Forgot Password?</Text>

          <Button rounded='full' colorScheme='whatsapp'>Create</Button>
          </Stack>
          <Text color='white' fontSize='xs' display='flex' gap={2} mt={4}>Don't have an account account yet? <Link href="/register" fontWeight='semibold' color='green'>Create account</Link> </Text>
        </Box>
    </Box>
  );
}

export default Login;
