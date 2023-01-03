import {
  Box,
  Flex,
  Button,
  Avatar,
  VStack,
  Text,
  Image
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

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
        bgImage='url("/images/user.png")'
        py='20'
        left={{
          lg: '40vw',
          sm: '8'
        }}
        top={{
          sm: '50vw',
          lg: '10vw'
        }}
        pos={'absolute'}>
        <Button
          pos='absolute'
          top='0.5'
          right='2'
          bg='none'
          p='0'>
          <Image
            src='/images/x.png'
            alt='X'
            w='24px' />
        </Button>

        <Flex
          bgImage='url("/images/box.png")'
          backgroundRepeat='no-repeat'
          backgroundPosition={'center'}
          w='20'
          h='20'
          align={'center'}
          pl='4'>
          <Avatar src='' />
        </Flex>
        <Text>
          Bem vindo
        </Text>
        <Button
          onClick={() => router.push('/inicio')}
          bgImage='url("/images/btn-start.jpg")'
          backgroundRepeat='no-repeat'
          backgroundPosition={'center'}
          w='40'
          h='45px'
          borderRadius={0}
          _hover={{
            color: 'none'
          }}>
        </Button>
      </VStack>
    </Box>
  )
}