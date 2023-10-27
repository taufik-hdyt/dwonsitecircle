/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { usePostLogin } from "../../features/login/hooks/usePostLogin";
import {useNavigate} from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast()
  const navigate = useNavigate()

  const {mutate: login} = usePostLogin({
    onSuccess: () => {
      toast({
        title: "Succes Post",
        status: "success",
        position: "top",
      });
      setEmail("")
      setPassword("")
      navigate("/")
    },
    onError: () => {
      toast({
        title: "Failed",
        status: "error",
        position: "top",
      });
    },
  })

  function handleLogin(){
    login({
      email: email,
      password: password
    })
  }


  return (
    <Box
      bg="blackAlpha.800"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="350px">
        <Heading color="green" size="4xl">
          circle
        </Heading>
        <Text color="white" mt={3} fontSize="xl">
          Login to Circle
        </Text>

        <Stack mt={3} spacing={3} color="white">
          <FormControl>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email/Username"
            />
          </FormControl>
          <FormControl>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </FormControl>

          <Text fontSize="sm" textAlign="end">
            Forgot Password?
          </Text>

          <Button onClick={handleLogin} type="submit" rounded="full" colorScheme="whatsapp">
            Login
          </Button>
        </Stack>

        <Text color="white" fontSize="xs" display="flex" gap={2} mt={4}>
          Don't have an account account yet?{" "}
          <Link href="/register" fontWeight="semibold" color="green">
            Create account
          </Link>{" "}
        </Text>
      </Box>
    </Box>
  );
}

export default Login;
