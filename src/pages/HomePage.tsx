import { Heading, Box, Grid, GridItem, Text, Flex } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
  return (
    //
    <>
      <Box
        ml={{ lg: "250px", base: "0px" }}
        bg={"linear-gradient(to right, #bdc3c7, #2c3e50)"}
        h={"100%"}
        minH={"100vh"}
        width={{ lg: "calc(100vw - 250px)", base: "100vw" }}
        px={{ md: "50px", base: "20px" }}
      >
        <Heading
          as={"h2"}
          padding={"20px"}
          fontFamily={"Merriweather"}
          fontWeight={700}
        >
          Behna World Construction
        </Heading>

        <Box position={"relative"}>
          <Box
            position={"absolute"}
            zIndex={1}
            w={"700px"}
            h={"700px"}
            bg={"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
            borderRadius={"100px"}
          />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} zIndex={10}>
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={4}
              h={"400px"}
              zIndex={10}
            >
              <GridItem
                w="100%"
                h="100%"
                bg="white"
                borderRadius={"8px"}
                zIndex={10}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Flex
                  maxW={"150px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={"auto"}
                  flexDirection={"column"}
                >
                  <Heading fontFamily={"Pacifico"} fontSize={"60px"}>
                    100+
                  </Heading>
                  <Text fontFamily={"Pacifico"} fontSize={"20px"}>
                    Completed Project
                  </Text>
                </Flex>
              </GridItem>
              <GridItem
                w="100%"
                h="100%"
                bg="white"
                borderRadius={"8px"}
                zIndex={10}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Flex
                  maxW={"150px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={"auto"}
                  flexDirection={"column"}
                >
                  <Heading fontFamily={"Pacifico"} fontSize={"50px"}>
                    Building
                  </Heading>
                  <Text fontFamily={"Pacifico"} fontSize={"30px"}>
                    Expert
                  </Text>
                </Flex>
              </GridItem>
              <GridItem
                w="100%"
                h="100%"
                bg="white"
                borderRadius={"8px"}
                zIndex={10}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Flex
                  maxW={"150px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={"auto"}
                  flexDirection={"column"}
                >
                  <Heading fontFamily={"Pacifico"} fontSize={"50px"}>
                    Building
                  </Heading>
                  <Text fontFamily={"Pacifico"} fontSize={"30px"}>
                    Expert
                  </Text>
                </Flex>
              </GridItem>
              <GridItem
                w="100%"
                h="100%"
                bg="white"
                borderRadius={"8px"}
                zIndex={10}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Flex
                  maxW={"150px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={"auto"}
                  flexDirection={"column"}
                >
                  <Heading fontFamily={"Pacifico"} fontSize={"50px"}>
                    Building
                  </Heading>
                  <Text fontFamily={"Pacifico"} fontSize={"30px"}>
                    Expert
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
            <GridItem
              w="100%"
              h="400px"
              bg="white"
              borderRadius={"8px"}
              zIndex={10}
            />
            <GridItem
              w="100%"
              h="400px"
              bg="white"
              borderRadius={"8px"}
              zIndex={10}
            />
            <GridItem
              w="100%"
              h="400px"
              bg="white"
              borderRadius={"8px"}
              zIndex={10}
            />
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default HomePage
