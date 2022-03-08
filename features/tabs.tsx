import { Button, Content, Counter, Div, Header, Heading, Inline, Item, Lozenge, Message, Popover, PopoverTrigger, Select, Tabs, Text, TextLink } from "@orbit-ui/components";

export function OrbitTabs() {
  return(
    <>
    <Heading>Select</Heading>
<Tabs aria-label="Planets">
    <Item key="mars">
        <Header>Mars</Header>
        <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
    </Item>
    <Item key="jupiter">
        <Header>
            <Text>Jupiter</Text>
            <Lozenge>New</Lozenge>
        </Header>
        <Content>
            Jupiter is the fifth planet from the Sun and the largest in the Solar System.
        </Content>
    </Item>
    <Item key="venus">
        <Header>Venus</Header>
        <Content>
            Venus is the second planet from the Sun. It is named after the Roman goddess of love and
            beauty.
        </Content>
    </Item>
</Tabs>
    </>
  )
}