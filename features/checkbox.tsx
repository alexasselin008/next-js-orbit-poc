import { as, Box, Button, Checkbox, CheckboxGroup, Heading, Inline } from "@orbit-ui/components";

export function OrbitCheckbox() {
  return (
    <>
      <Heading>Checkbox</Heading>
<CheckboxGroup orientation="vertical">
    <Checkbox value="milky-way">Milky Way</Checkbox>
    <Checkbox value="andromeda">Andromeda</Checkbox>
    <Checkbox value="medusa">Medusa</Checkbox>
</CheckboxGroup>
    </>
  )
}