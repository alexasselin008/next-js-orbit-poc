import { Button, Content, Counter, Div, Heading, Inline, Message, Popover, PopoverTrigger, Text, TextLink } from "@orbit-ui/components";

export function OrbitPopover() {
  return(
    <>
    <Heading>Popover</Heading>
<PopoverTrigger>
    <Button variant="secondary">Trigger</Button>
    <Popover>
        <Heading>WikiSpace</Heading>
        <Content>
            SpaceX designs, manufactures, and launches the world's most advanced rockets and
            spacecraft. The company was founded in 2002 by Elon Musk to revolutionize space
            transportation, with the ultimate goal of making life multiplanetary.
        </Content>
    </Popover>
</PopoverTrigger>
    </>
  )
}