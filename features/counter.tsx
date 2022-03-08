import { Counter, Div, Heading, Inline, Text } from "@orbit-ui/components";

export function OrbitCounter() {
  return(
    <>
    <Heading>Counter</Heading>
    <Inline gap={10} alignY="center">
    <Div>
        <Text>Satellites</Text> <Counter pushed>15</Counter>
    </Div>
    <Div>
        <Text>Satellites</Text>{" "}
        <Counter pushed variant="divider">
            100+
        </Counter>
    </Div>
</Inline>
    </>
  )
}