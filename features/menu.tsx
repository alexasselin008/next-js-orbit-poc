import { Button, Counter, Div, Heading, Inline, Item, Menu, MenuTrigger, Text, TextLink } from "@orbit-ui/components";

export function OrbitMenu() {
  return(
    <>
    <Heading>Menu</Heading>
<MenuTrigger>
    <Button variant="secondary" >
        Test
    </Button>
    <Menu>
        <Item key="launch">Launch...</Item>
        <Item key="eject">Eject...</Item>
        <Item key="land">Land...</Item>
        <Item key="help">Help</Item>
        <Item key="exit">Exit</Item>
    </Menu>
</MenuTrigger>
    </>
  )
}