import React from "react";
import { VStack } from "@chakra-ui/react";

export function InfoLayout({ children }) {
  return (
    <VStack w="100%" maxW="xl" pos="absolute" zIndex="3" p="0 2rem">
      {children}
    </VStack>
  );
}
