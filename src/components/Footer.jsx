import React from 'react'
import {
    Box,
    Button,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub
} from "react-icons/ai";

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
    <Stack direction={['column', 'row']}>
      <VStack  w={'full'} px={'4'}>
        <Heading
          size="md"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        >
          Subscribe to get updates
        </Heading>
        <HStack borderBottom={'2px solid white'} py="2" >
          <Input
            placeholder="Enter Email Here..."
            border={'none'}
            borderRadius="none"
            outline={'none'}
            focusBorderColor="none"
          />
          <Button
            p={'0'}
            colorScheme={'purple'}
            variant={'ghost'}
            borderRadius={'0 20px 20px 0'}
          >
            <AiOutlineSend size={20} />
          </Button>
        </HStack>
      </VStack>

      <VStack
        w={'full'}
        borderLeft={['none', '1px solid white']}
        borderRight={['none', '1px solid white']}
      >
        <Heading textTransform={'uppercase'} textAlign={'center'}>
          VIDEO HUB
        </Heading>
        <Text>All rights reserved</Text>
      </VStack>

      <VStack w={'full'} alignItems={'center'} justifyItems={'left'}>
        <Heading size={'md'} textTransform={'uppercase'}>
          Social Media
        </Heading>
        <VStack alignItems={'left'}> 
          <HStack>
         <AiFillYoutube/>
          <Button variant={'link'} colorScheme={'white'}>
          <a target={'black'} href="https://youtube.com/">
            Youtube
          </a>
        </Button>
          </HStack>
        
        <HStack>
         < AiFillInstagram/>
        <Button variant={'link'} colorScheme={'white'}>
          <a target={'black'} href="https://instagram.com/">
            Instagram
          </a>
        </Button>
        </HStack>
        
        <HStack>
          <AiFillGithub/>
        <Button variant={'link'} colorScheme={'white'}>
          <a target={'black'} href="https://github.com/">
            Github
          </a>
        </Button>
        </HStack>
        </VStack> 
      </VStack>
    </Stack>
  </Box>
  )
}

export default Footer
