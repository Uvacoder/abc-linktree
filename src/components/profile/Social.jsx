import React from "react";
import { IconButton, HStack } from "@chakra-ui/react";
import { social } from "../../data";

export function Social() {
  const handleLink = (link) => {
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.click();
  };
  return (
    <HStack w="100%" spacing="1rem" justify="space-between">
      {social.map((s, i) => (
        <IconButton
          key={i}
          color={s.color}
          bg="white"
          borderRadius="50%"
          icon={<s.icon />}
          onClick={() => handleLink(s.url)}
        />
      ))}
    </HStack>
  );
}
