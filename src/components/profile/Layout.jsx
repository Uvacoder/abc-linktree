import React from "react";
import { VStack } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <VStack w="100%" maxW="xl">
      {children}
    </VStack>
  );
}
