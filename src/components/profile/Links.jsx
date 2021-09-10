import React from "react";
import { VStack, Box, HStack, Heading, Spacer, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { links } from "../../data";

const Link = ({ data }) => {
  const { name, url, color, desc, icon: Icon } = data;

  const handleLink = () => {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.click();
  };

  return (
    <HStack
      w="100%"
      onClick={handleLink}
      align="center"
      justify="center"
      bg="white"
      h="4rem"
      pr="1rem"
      borderRadius="md"
      cursor="pointer"
    >
      <Box
        bg={color}
        color="white"
        h="4rem"
        w="4rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius=".3rem 0 0 .3rem"
      >
        <Icon style={{ fontSize: "24px" }} />
      </Box>
      <VStack spacing=".2rem" align="left">
        <Heading size="md">{name}</Heading>
        <Text fontSize="12px" color="blackAlpha.500">
          {desc}
        </Text>
      </VStack>
      <Spacer />
      <Box color="blackAlpha.400">
        <FaArrowRight fontSize="10px" />
      </Box>
    </HStack>
  );
};

export function Links() {
  return (
    <VStack w="100%" spacing="1rem">
      {links.map((l, i) => (
        <Link key={i} data={l} />
      ))}
    </VStack>
  );
}
