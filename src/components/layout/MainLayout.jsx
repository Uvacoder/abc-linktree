import React from "react";
import { VStack, Box } from "@chakra-ui/react";

export function MainLayout({ children }) {
  return (
    <VStack spacing="0">
      <Box h="15vh" bg="blue.300" maxW="100vw" w="100%"></Box>
      <Box h="100%" minH="85vh" bg="gray.100" w="100%"></Box>
      {children}
    </VStack>
  );
}
