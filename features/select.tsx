import { Button, Content, Counter, Div, Heading, Inline, Item, Message, Popover, PopoverTrigger, Select, Text, TextLink } from "@orbit-ui/components";

export function OrbitSelect() {
  return(
    <>
    <Heading>Select</Heading>
<Select placeholder="Planets">
    <Item key="earth">Earth</Item>
    <Item key="jupiter">Jupiter</Item>
    <Item key="mars">Mars</Item>
    <Item key="mercury">Mercury</Item>
    <Item key="neptune">Neptune</Item>
    <Item key="saturn">Saturn</Item>
    <Item key="uranus">Uranus</Item>
</Select>
    </>
  )
}