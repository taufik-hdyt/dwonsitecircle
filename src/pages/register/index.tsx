import { Box, Button, FormControl, Heading, Input, Link, Stack, Text } from "@chakra-ui/react";


function Register() {
// const toast = useToast()
// const [fullname,setFullname] = useState("")
// const [email,setEmail] = useState("")
// const [password,setPassword] = useState("")

  return (
    <Box bg="blackAlpha.800" h='100vh' display='flex' justifyContent='center' alignItems='center' >
        <Box w='350px'>
          <Heading color="green" size='4xl'>circle</Heading>
          <Text color='white' mt={3} fontSize='xl'>Create Account Circle</Text>
          <Stack mt={3} spacing={3} color='white'>
          <FormControl>
            <Input placeholder="Fullname" />
          </FormControl>
          <FormControl>
            <Input  placeholder="Email" />
          </FormControl>
          <FormControl>
            <Input placeholder="Password" />
          </FormControl>

          <Button rounded='full' colorScheme='whatsapp'>Create</Button>
          </Stack>
          <Text color='white' fontSize='sm' display='flex' gap={2} mt={4}>Already have account? <Link href="/login" fontWeight='semibold' color='green'>Login</Link> </Text>
        </Box>
    </Box>
  );
}

export default Register;
