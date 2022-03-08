import { Button, Content, Counter, Div, Heading, Inline, Message, Modal, ModalTrigger, Paragraph, Text, TextLink } from "@orbit-ui/components";

export function OrbitModal() {
  return(
    <>
    <Heading>Modal</Heading>
<ModalTrigger>
    <Button variant="secondary">Open</Button>
    <Modal>
        <Heading>Apollo 11 movie</Heading>
        <Content>
            <Paragraph>
                Apollo 11 is a 2019 American documentary film edited, produced and directed by Todd
                Douglas Miller. It focuses on the 1969 Apollo 11 mission, the first spaceflight from
                which men walked on the Moon.
            </Paragraph>
            <Paragraph>
                The film consists solely of archival footage, including 70 mm film previously
                unreleased to the public, and does not feature narration, interviews or modern
                recreations. The Saturn V rocket, Apollo crew consisting of Buzz Aldrin, Neil
                Armstrong, and Michael Collins, and Apollo program Earth-based mission operations
                engineers are prominently featured in the film.
            </Paragraph>
        </Content>
    </Modal>
</ModalTrigger>
    </>
  )
}