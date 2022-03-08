import { Accordion, Content, H3, Heading, Item, InfoIcon, HelpIcon, NotificationIcon, Text } from "@orbit-ui/components";

export function OrbitAccordion() {
  return (
    <>
    <Heading>Accordion</Heading>
    <Accordion>
        <Item key="mars">
            <H3>
                <NotificationIcon />
                <Text>Mars</Text>
            </H3>
            <Content>
                Mars is the fourth planet from the Sun and the second-smallest planet in the Solar
                System.
            </Content>
        </Item>
        <Item key="jupiter">
            <H3>
                <InfoIcon />
                <Text>Jupiter</Text>
            </H3>
            <Content>
                Jupiter is the fifth planet from the Sun and the largest in the Solar System.
            </Content>
        </Item>
        <Item key="venus">
            <H3>
                <HelpIcon />
                <Text>Venus</Text>
            </H3>
            <Content>
                Venus is the second planet from the Sun. It is named after the Roman goddess of love and
                beauty.
            </Content>
        </Item>
    </Accordion>
    </>
  )
}