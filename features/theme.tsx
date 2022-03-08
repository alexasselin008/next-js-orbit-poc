import { Button, Heading, useColorSchemeContext } from "@orbit-ui/components";

export function OrbitTheme() {
    const { colorScheme, setColorScheme } = useColorSchemeContext();
  return (
    <>
      <Heading>Theme</Heading>
      <Button onClick={() => {
        setColorScheme!(colorScheme === "light" ? "dark" : "light");
      }}>Toggle</Button> 
    </>
  )
}