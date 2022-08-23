import {
  Container,
  Box,
  Flex,
  Button,
  Avatar,
  VStack,
  Text
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      w='100vw'
      h='100vh'
      backgroundPosition={'center'}
      backgroundRepeat='no-repeat'
      backgroundSize={'cover'}
      bgImage='url("/images/bg.jpg")'>
      <VStack
        backgroundRepeat='no-repeat'
        backgroundPosition={'center'}
        w='80'
        h='80'
        bgImage='url("/images/user.jpg")'
        py='20'
        left='40vw'
        top='10vw'
        pos={'absolute'}>
        <Flex
          bgImage='url("/images/box.png")'
          backgroundRepeat='no-repeat'
          backgroundPosition={'center'}
          w='20'
          h='20'
          align={'center'}
          pl='4'>
          <Avatar src=''/>
        </Flex>
        <Text>Giovana Furlan Portifólio</Text>
        <Button
          bgImage='url("/images/btn-start.jpg")'
          backgroundRepeat='no-repeat'
          backgroundPosition={'center'}
          w='40'
          h='38'
          borderRadius={0}>

        </Button>
      </VStack>
    </Box>
  )
}