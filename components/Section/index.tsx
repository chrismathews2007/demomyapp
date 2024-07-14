import React, { ReactNode, CSSProperties } from "react";
import { Box, Section as RadixSection } from "@radix-ui/themes";

interface SectionProps {
  children: ReactNode;
  boxStyle?: CSSProperties;
  sectionStyle?: CSSProperties;
}

const Section: React.FC<SectionProps> = ({ children, boxStyle, sectionStyle }) => {
  return (
    <Box
      py="8"
      px="8"
      style={{
        backgroundColor: "var(--gray-a2)",
        borderRadius: "var(--radius-3)",
        ...boxStyle,
      }}
    >
      <RadixSection style={sectionStyle}>{children}</RadixSection>
    </Box>
  );
};

export default Section;
