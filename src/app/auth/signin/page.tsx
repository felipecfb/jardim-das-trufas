"use client";

import { Form } from "@/components/Form";
import { Box, Flex, Image } from "@chakra-ui/react";

export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      p="4"
      bg="#121214"
    >
      <Box p="4" boxShadow="md" bg="white" borderRadius="8">
        <Image src="../logo.png" alt="Logo" maxW="150px" mx="auto" />
        <Form />
      </Box>
    </Flex>
  );
}
