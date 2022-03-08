import { as, Box, Button, Card, Content, Heading, Inline, Stack } from "@orbit-ui/components";

export function OrbitCard() {
  return (
    <>
      <Heading>Card</Heading>
<Stack>
    <Inline>
        <Card size="xs">
            <Heading>NASA Headquarters</Heading>
            <Content>
                300 E. Street SW, Suite 5R30
                <br />
                Washington, DC 20546
                <br />
                (202) 358-0001 (Office)
                <br />
                (202) 358-4338 (Fax)
            </Content>
        </Card>
        <Card size="sm">
            <Heading>NASA Headquarters</Heading>
            <Content>
                300 E. Street SW, Suite 5R30
                <br />
                Washington, DC 20546
                <br />
                (202) 358-0001 (Office)
                <br />
                (202) 358-4338 (Fax)
            </Content>
        </Card>
        <Card>
            <Heading>NASA Headquarters</Heading>
            <Content>
                300 E. Street SW, Suite 5R30
                <br />
                Washington, DC 20546
                <br />
                (202) 358-0001 (Office)
                <br />
                (202) 358-4338 (Fax)
            </Content>
        </Card>
    </Inline>
    <Inline>
        <Card size="lg">
            <Heading>NASA Headquarters</Heading>
            <Content>
                300 E. Street SW, Suite 5R30
                <br />
                Washington, DC 20546
                <br />
                (202) 358-0001 (Office)
                <br />
                (202) 358-4338 (Fax)
            </Content>
        </Card>
        <Card size="xl">
            <Heading>NASA Headquarters</Heading>
            <Content>
                300 E. Street SW, Suite 5R30
                <br />
                Washington, DC 20546
                <br />
                (202) 358-0001 (Office)
                <br />
                (202) 358-4338 (Fax)
            </Content>
        </Card>
    </Inline>
</Stack>
    </>
  )
}