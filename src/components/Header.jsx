import React from 'react'
import { Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerContent,
    DrawerOverlay,
    DrawerCloseButton,
    Button, 
    useDisclosure,
    VStack,
    HStack} from '@chakra-ui/react'
    import {Link} from "react-router-dom"
    import {BiMenuAltLeft } from "react-icons/bi"

const Header = () => {

    const {isOpen,onOpen,onClose}= useDisclosure()

  return (
   <>
   <Button pos={'fixed'} colorScheme="purple" 
   top={'4'} left={'4'} w={'10'} p={'0'}
   h={'10'} borderRadius={'full'} onClick={onOpen}
   zIndex={'overlay'} > 
     <BiMenuAltLeft size={'30'} />
   </Button>

    <Drawer isOpen={isOpen} placement="left"
     onClose={onClose}>
    <DrawerOverlay/>
    <DrawerContent>
       <DrawerCloseButton/>
        <DrawerHeader>Vedio Hub</DrawerHeader>
        <DrawerBody>
          <VStack alignItems={'flex-start'}>
           <Button onClick ={onClose} colorScheme={'purple'} 
            variant={'ghost'}>
             <Link to={'/'} >Home</Link>
            </Button>    

            <Button onClick ={onClose} colorScheme={'purple'} 
            variant={'ghost'}>
             <Link to={'/vedios'} >Vedios</Link>
            </Button> 

            <Button onClick ={onClose} colorScheme={'purple'} 
            variant={'ghost'}>
             <Link to={'/'} >Free Videos</Link>
            </Button> 

            <Button onClick ={onClose} colorScheme={'purple'} 
            variant={'ghost'}>
             <Link to={'/upload'} >Upload Vedios</Link>
            </Button> 
        </VStack>  

        <HStack pos={"absolute"} bottom={"10"} left={'0'}
            w={"full"} justifyContent={'space-evenly'} >
        <Button onClick ={onClose} colorScheme={'purple'} >
             <Link to={'/login'} >Log In </Link>
            </Button> 
        
            <Button onClick ={onClose} colorScheme={'purple'}>
             <Link to={'/signup'} >Sign Up </Link>
            </Button>

        </HStack>

        </DrawerBody>
    </DrawerContent>
   </Drawer>
   </>
  )
}


export default Header;
