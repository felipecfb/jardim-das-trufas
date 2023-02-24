import { Button, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Input } from "./Input";
import { PasswordInput } from "./PasswordInput";
import { FaUserAlt } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";

export function Form() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Stack
      spacing={4}
      p="1rem"
      backgroundColor="whiteAlpha.900"
      alignItems="center"
    >
      <Button
        bg="transparent"
        width="20%"
        mx="auto"
        _hover={{
          bg: "transparent",
        }}
      >
        <AiFillGoogleCircle size="100%" />
      </Button>
      <Text>ou use seu login</Text>
      <Input type="email" placeholder="Email" leftIcon={<FaUserAlt />} />
      <PasswordInput showPassword={showPassword} onClick={handleShowClick} />
      <Button
        borderRadius={0}
        type="submit"
        variant="solid"
        width="full"
        bg="#F9AE99"
        _hover={{
          filter: "opacity(.8)",
        }}
      >
        Entrar
      </Button>
    </Stack>
  );
}
