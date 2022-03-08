import { as, Box, Button, Heading, Inline } from "@orbit-ui/components";

export function OrbitButton() {
  return (
    <>
      <Heading>Button</Heading>
<Inline>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="tertiary">Tertiary</Button>
    <Button variant="negative">Negative</Button>
</Inline>
    </>
  )
}