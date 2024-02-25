import { Box, Flex, Image } from "@chakra-ui/react";

/**
 * Component for displaying a navbar with the brand logo.
 */
export default function Navbar() {
  return (
    <>
      <Flex
        alignItems="center"
        bg="white"
        borderBottomWidth="0.8px"
        borderColor="gray.300"
        height="65px"
        justifyContent="center"
        position="fixed"
        width="100%"
        zIndex="2"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          maxWidth="1100px"
          width="100%"
          marginInlineStart={[4, 6]}
          marginInlineEnd={[4, 6]}
        >
          <Image src="/carenow-logo.png" paddingBottom="12px" width="130px" />
        </Flex>
      </Flex>
      <Box height="65px" />
    </>
  );
}
