import {
  Avatar,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useRef, useState, ChangeEvent } from "react";
import { TbEditCircle } from "react-icons/tb";
import {
  IUpdateProfile,
  IUser,
} from "../../interface/user.interface";
import { useUpdateProfiile } from "../../features/auth/hooks/useUpdateProfile";
import { API } from "../../libs/api";
import { useDispatch } from "react-redux";
import { AUTH_CHECK } from "../../store/RootReducer";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  userData: IUser;
}
export default function ModalEditProfile({
  isOpen,
  onClose,
  userData,
}: IProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  function handleEditImage() {
    if (fileRef.current) {
      fileRef.current.click();
    }
  }

  const dispatch = useDispatch()
  const { mutate: updateProfile } = useUpdateProfiile({
    id: userData.id,
    onSuccess: async() => {
      const response = await API.get("/auth/check");
      dispatch(AUTH_CHECK(response.data));
      onClose()
    },
  });


  const [form, setForm] = useState<IUpdateProfile>({
    email: "",
    fullname: "",
    profile_description: "",
    profile_picture: "",
    username: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleUpdate() {
    updateProfile({
      email: form.email !== "" ? form.email : userData.email,
      fullname: form.fullname !== "" ? form.fullname : userData.email,
      profile_description:
        form.profile_description !== ""
          ? form.profile_description
          : userData.profile_description,
      profile_picture:
        form.profile_picture !== ""
          ? form.profile_picture
          : userData.profile_picture,
      username: form.username !== "" ? form.username : userData.username,
    });
  }

  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center>
            <Box pos="relative" w="fit-content">
              <Avatar src={userData.profile_picture} size="xl" />
              <Box
                cursor="pointer"
                pos="absolute"
                bottom={0}
                right={0}
                bg="black"
                p={1}
                rounded="full"
                onClick={handleEditImage}
              >
                <TbEditCircle color="white" size={16} />
              </Box>
            </Box>
            <Input
              ref={fileRef}
              display="none"
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setSelectedFile(e.target.files[0]);
                }
              }}
            />
          </Center>
          <Grid mt={8} gridTemplateColumns="1fr 1fr" gap="2">
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                onChange={handleChange}
                variant="filled"
                defaultValue={userData.username}
                name="username"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Fullname</FormLabel>
              <Input
                onChange={handleChange}
                variant="filled"
                defaultValue={userData.fullname}
                name="fullname"
              />
            </FormControl>
            {/* <FormControl>
              <FormLabel>Password</FormLabel>
              <Input value={password} type="password" name='password' />
            </FormControl> */}
          </Grid>
          <FormControl mt={3}>
            <FormLabel>Email</FormLabel>
            <Input
              onChange={handleChange}
              variant="filled"
              defaultValue={userData.email}
              name="email"
            />
          </FormControl>
          <FormControl mt={3}>
            <FormLabel>Profile Description</FormLabel>
            <Input
              onChange={handleChange}
              variant="filled"
              placeholder="Tambahkan bio"
              defaultValue={userData.profile_description}
              name="profile_description"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter gap="4">
          <Button onClick={handleUpdate} colorScheme="whatsapp">
            Update
          </Button>
          <Button mr={3} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
