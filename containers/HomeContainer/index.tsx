import React from "react";
import CustomCarousel from "@/components/Carousel/CustomCarousel";
import CustomImage from "@/components/UI/Image/CustomImage";
import saleBanner from "@/Images/saleBanner.png";
import Section from "@/components/Section";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import { Container } from "@radix-ui/themes";
import ShopFromTopCategories from "@/components/ShopFromTopCategories/ShopFromTopCategories";

type Props = {};

const HomeContainer = (props: Props) => {
  const slidesData = [
    {
      content: <CustomImage src={saleBanner} alt="" size={"fullWidth"} />,
      hash: "slide1",
    },
    {
      content: <CustomImage src={saleBanner} alt="" size={"fullWidth"} />,
      hash: "slide2",
    },
    {
      content: <CustomImage src={saleBanner} alt="" size={"fullWidth"} />,
      hash: "slide3",
    },
    {
      content: <CustomImage src={saleBanner} alt="" size={"fullWidth"} />,
      hash: "slide4",
    },
  ];

  return (
    <div>
      <Section>
        <CustomCarousel
          slides={slidesData}
          sliderHeight="auto"
          slidesPerView={{
            640: 1,
            768: 1,
            1024: 1,
            1200: 1,
          }}
        />
      </Section>
      <Section sectionStyle={{ margin: "80px 0" }}>
        <Container size="1" style={{ padding: "0 50px" }}>
          <RelatedProducts />
        </Container>
      </Section>
      <Section sectionStyle={{ margin: "80px 0" }}>
        <Container size="1" style={{ padding: "0 50px" }}>
          <ShopFromTopCategories />
        </Container>
      </Section>
      <Section sectionStyle={{ margin: "80px 0" }}>
        <Container size="1" style={{ padding: "0 50px" }}>
          <RelatedProducts />
        </Container>
      </Section>
    </div>
  );
};

export default HomeContainer;
