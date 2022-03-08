import { Badge, Heading, Inline, Text, EmailIcon,  Div } from "@orbit-ui/components";

function Square() {
    return <Div backgroundColor="accent-2" width="45px" height="45px" />;
}

export function Circle() {
    return <Div backgroundColor="accent-2" borderRadius="100%" width="45px" height="45px" />;
}

export function OrbitBadge() {
  return (
    <>
      <Heading>Badge</Heading>
      <Inline gap={5} alignY="center">
        <Inline gap={8}>
            <Badge>
                <Text>100</Text>
                <Square />
            </Badge>
            <Badge variant="dot">
                <Square />
            </Badge>
        </Inline>
        <Inline gap={8}>
            <Badge overlap="circle">
                <Text>100</Text>
                <Circle />
            </Badge>
            <Badge variant="dot" overlap="circle">
                <Circle />
            </Badge>
        </Inline>
  </Inline>
    </>
  )
}