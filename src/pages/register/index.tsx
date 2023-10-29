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
  useToast,
} from "@chakra-ui/react";
import { usePostRegister } from "../../features/register/hooks/usePostRegister";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const router = useNavigate()

  const { mutate: register } = usePostRegister({
    onSuccess: () => {
      toast({
        title: "Succes Register",
        status: "success",
        position: "top",
      });
      setEmail("")
      setFullname("")
      setPassword("")
      router("/login")
    },
    onError: () => {
      toast({
        title: "Failed",
        status: "error",
        position: "top",
      });
    },
  });

  function handleRegister() {
    register({
      email: email,
      fullname: fullname,
      password: password,
    });
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
          Create Account Circle
        </Text>
        <Stack mt={3} spacing={3} color="white">
          <FormControl>
            <Input
              value={fullname}
              placeholder="Fullname"
              onChange={(e) => setFullname(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <Input
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <Input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button
            onClick={handleRegister}
            rounded="full"
            colorScheme="whatsapp"
          >
            Create
          </Button>
        </Stack>
        <Text color="white" fontSize="sm" display="flex" gap={2} mt={4}>
          Already have account?{" "}
          <Link href="/login" fontWeight="semibold" color="green">
            Login
          </Link>{" "}
        </Text>
      </Box>
    </Box>
  );
}

export default Register;
