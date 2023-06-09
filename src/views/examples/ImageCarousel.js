import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider } from "semantic-ui-react";

import CustomDotGroup from "../components/CustomDotGroup";

const ImageCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1}
    totalSlides={3}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <Image src='/caveira.jpg'  />
      </Slide>
      <Slide tag="a" index={1}>
        <Image src='/caveira.jpg'  />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src='/caveira.jpg'  />
      </Slide>
    </Slider>

    <Divider />
    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default ImageCarousel;
