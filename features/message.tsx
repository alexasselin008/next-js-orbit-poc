import { Button, Content, Counter, Div, Heading, Inline, Message, Text, TextLink } from "@orbit-ui/components";

export function OrbitMessage() {
  return(
    <>
    <Heading>TextLink</Heading>
<Message variant="negative" onDismiss={() => {}}>
    <Content>Cannot contact email server.</Content>
    <Button>Retry</Button>
</Message>
    </>
  )
}