import { Avatar, Heading, Inline } from "@orbit-ui/components";

export function OrbitAvatar() {
   return (
      <>
        <Heading>Avatar</Heading>
        <Inline alignY="center">
          <Avatar size="2xs" src="https://raw.githubusercontent.com/gsoft-inc/sg-orbit/master/packages/components/src/avatar/docs/assets/hadfield.png" name="Chris Hadfield" />
          <Avatar size="xs" src="https://raw.githubusercontent.com/gsoft-inc/sg-orbit/master/packages/components/src/avatar/docs/assets/hadfield.png" name="Chris Hadfield" />
          <Avatar size="sm" src="https://raw.githubusercontent.com/gsoft-inc/sg-orbit/master/packages/components/src/avatar/docs/assets/hadfield.png" name="Chris Hadfield" />
          <Avatar name="Chris Hadfield" src="https://raw.githubusercontent.com/gsoft-inc/sg-orbit/master/packages/components/src/avatar/docs/assets/hadfield.png" />
          <Avatar size="lg" src="https://raw.githubusercontent.com/gsoft-inc/sg-orbit/master/packages/components/src/avatar/docs/assets/hadfield.png" name="Chris Hadfield" />
          <Avatar size="xl" src="https://raw.githubusercontent.com/gsoft-inc/sg-orbit/master/packages/components/src/avatar/docs/assets/hadfield.png" name="Chris Hadfield" />
          <Avatar size="2xl" src="https://raw.githubusercontent.com/gsoft-inc/sg-orbit/master/packages/components/src/avatar/docs/assets/hadfield.png" name="Chris Hadfield" />
        </Inline>
      </>
   )
}