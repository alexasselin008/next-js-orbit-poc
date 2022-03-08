import { Button, Content, Counter, Div, Heading, Inline, Message, NumberInput, Text, TextLink } from "@orbit-ui/components";

export function OrbitNumberInput() {
  return(
    <>
    <Heading>NumberInput</Heading>
    <NumberInput min={15} max={30} defaultValue={18} placeholder="Age" />
    </>
  )
}


