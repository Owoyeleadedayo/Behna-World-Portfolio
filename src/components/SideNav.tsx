import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
 

const SideNav = () => {
  return (
    <Box
    position={"fixed"}
    top={0}
    bottom={0}
    height={"100vh"}
    width={"250px"}
    bg={"white"}
    display={{lg:"block", base:"none"}}
    >
      <Flex></Flex>
    </Box>
  )
}

export default SideNav
