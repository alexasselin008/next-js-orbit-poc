import { as, Box, Heading } from "@orbit-ui/components";

export function OrbitBox() {
  const Div = as(Box, "div");
  return (
    <>
      <Heading>Box</Heading>
        <Div padding={4} border="alias-low-break" slot="content">
            Enjoy space like never before.
        </Div>
    </>
  )
}