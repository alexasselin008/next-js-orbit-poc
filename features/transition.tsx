import { Text, Button, Div, Heading, Transition } from "@orbit-ui/components";
import { useCallback, useState } from "react";

export function OrbitTransition() {
    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = useCallback(() => {
        setIsVisible(x => !x);
    }, [setIsVisible]);

  return (
    <>
    <Heading>Transition</Heading>
        <Div minHeight="80px">
            <Button onClick={handleToggle} variant="secondary" marginBottom={4}>
                Toggle animation
            </Button>
            <Transition show={isVisible} enter="o-ui-fade-in" leave="o-ui-fade-out">
                <Text>Earth is a small town with many neighborhoods in a very big universe.</Text>
            </Transition>
        </Div>
    </>
  )
}