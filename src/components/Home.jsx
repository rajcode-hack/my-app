import { Box, Container, Heading, Image, Stack, Text} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import vg1 from "../assets/img1.jpg"
import vg2 from "../assets/img2.jpg"
import vg3 from "../assets/img3.jpg"
import vg4 from "../assets/img4.jpg"
import vg5 from "../assets/img5.png"

const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%, -50%)",
    textTransform:'uppercase',
    p:'4',
    size:'3xl',
}

const Home = () => {
  return (
    <Box>
      <MyCarrousel />
      <Container maxW minH={"100vh"} p="16">
        <Heading textTransform={"uppercase"} py="2" w={'fit-content'} borderBottom={'2px solid'}
        m="auto"
        >
            services
            </Heading>

                 <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={vg5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text letterSpacing={"widest"}>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi reiciendis illo iusto. Eos earum harum sed nisi ducimus, quod officiis minima alias et optio perspiciatis neque nesciunt obcaecati molestiae aspernatur.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi reiciendis illo iusto. Eos earum harum sed nisi ducimus, quod officiis minima alias et optio perspiciatis neque nesciunt obcaecati molestiae aspernatur.
          </Text>
            </Stack>
        </Container>
    </Box>
  );
};

const MyCarrousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showsStatus={false}
        showsThumbs={false}
        showArrows={false}
        >

            <Box w={"full"} h={'100vh'}>
                <Image src={vg1} />
                <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions} >watch The Future </Heading>

            </Box>

            <Box w={"full"} h={'100vh'}>
                <Image src={vg2} />
                <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions} > Future Is Gaming </Heading>

            </Box>

             <Box w={"full"} h={'100vh'}>
                <Image src={vg3} />
                <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions} > GAMING IS CONSOLE</Heading>

            </Box>

            <Box w={"full"} h={'100vh'}>
                <Image src={vg4} />
                <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions} > NIGHT LIFE IS COOL </Heading>

            </Box>
    </Carousel>
)

export default Home
