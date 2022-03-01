import { Box, keyframes } from "@chakra-ui/react";

const bgAnimation = keyframes`
    0% { transform: translate(0, 0); }
    10% { transform: translate(-5%, -5%); }
    20% { transform: translate(-10%, 5%); }
    30% { transform: translate(5%, -10%); }
    40% { transform: translate(-5%, 15%); }
    50% { transform: translate(-10%, 5%); }
    60% { transform: translate(15%, 0); }
    70% { transform: translate(0, 10%); }
    80% { transform: translate(-15%, 0); }
    90% { transform: translate(10%, 5%); }
    100% { transform: translate(5%, 0); }
`;

export const Noise = () => {
  return (
    <Box
      position="fixed"
      top="-50%"
      left="-50%"
      right="-50%"
      bottom="-50%"
      width="200%"
      height="200vh"
      background="transparent url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0"
      opacity="0.45"
      zIndex="10"
      visibility="visible"
      animation={`${bgAnimation} 0.2s infinite`}
      pointerEvents="none"
    />
  );
};
