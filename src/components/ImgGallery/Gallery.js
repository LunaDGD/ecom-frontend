import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { ImageWithOverlay } from './ImageWithOverlay';

function Gallery() {
  return (
    <div>
      <Box
        maxW="7xl"
        mx="auto"
        px={{
          base: '4',
          md: '8',
          lg: '12',
        }}
        py={{
          base: '6',
          md: '8',
          lg: '12',
        }}
      >
        <Stack
          height={{
            md: '640px',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}
          spacing={{
            base: '6',
            md: '10',
          }}
          align="stretch"
        >
          <ImageWithOverlay
            flex="1"
            objectPosition="top center"
            title="Gaming PCs Made Simple"
            description="Dress that feels a little fany for when pajamas aren't cutting it"
            src="/images/PC-BUILD-MWAVE.jpeg"
            alt="Lovely Image"
          />
          <Stack
            spacing={{
              base: '6',
              md: '10',
            }}
            maxW={{
              md: '400px',
            }}
          >
            <ImageWithOverlay
              spacing="4"
              title="Ready to Upgrade"
              src="/images/293925.deb7ece83ab199119ea2e4fec5d5dc74.jpg"
              alt="Lovely Image"
            />
            <ImageWithOverlay
              spacing="4"
              title="Built for Performance"
              src="/images/pc-cover-768x426.jpeg"
              alt="Lovely Image"
            />
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}

export default Gallery;
