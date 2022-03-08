import { Counter, Div, Heading, Inline, Text, TextLink } from "@orbit-ui/components";

export function OrbitTextLink() {
  return(
    <>
    <Heading>TextLink</Heading>
<Inline>
    <TextLink variant="accent" href="#">
        Accent
    </TextLink>
    <TextLink variant="negative" href="#">
        Negative
    </TextLink>
</Inline>
    </>
  )
}