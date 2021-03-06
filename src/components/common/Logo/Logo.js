import { theme } from "@chakra-ui/react";

export default function Logo({ size, color = "whiteAlpha.900" }) {
  const [type, level] = color.split(".");
  const fillColor = theme.colors[type][level];

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 30 13">
      <path
        fill={fillColor}
        d="M21.1.2c1.3 1.4 2.6 2.9 3.9 4.3 1.5 1.7 3 3.3 4.6 5 .2.3.3.4 0 .7-.8.8-1.5 1.6-2.3 2.4-.2.2-.4.2-.6 0-1.7-1.9-3.4-3.7-5.1-5.6-.3-.3-.5-.3-.8 0-1.8 1.8-3.5 3.6-5.2 5.5-.3.3-.4.3-.6 0-.7-.9-1.5-1.6-2.3-2.4-.2-.2-.2-.3 0-.5 2.8-3.1 5.5-6.2 8.3-9.3 0-.1 0-.1.1-.1zM3 3.3c.6.7 1.2 1.3 1.8 2 1.3 1.4 2.6 2.8 4 4.3.2.2.2.3 0 .6-.8.8-1.6 1.6-2.3 2.5-.2.2-.3.2-.5 0-1.8-2-3.7-4-5.5-5.9-.2-.2-.2-.3 0-.5.8-1.1 1.6-2 2.5-3z"
      />
    </svg>
  );
}
