// import { Button, ButtonGroup, Checkbox, ErrorMessage, Field, Form, Label, TextInput } from "@sharegate/orbit-ui";
// import { Button, ButtonGroup, Checkbox, ErrorMessage, Field, Form, Label, TextInput } from "@sharegate/orbit-ui";
//import { useFormik } from "formik";
import { Flex } from "@orbit-ui/components";
import {
    OrbitAccordion,
    OrbitAlert,
    OrbitAutocomplete,
    OrbitAvatar,
    OrbitBadge,
    OrbitBox,
    OrbitButton,
    OrbitCard,
    OrbitCheckbox,
    OrbitCounter,
    OrbitDateInput,
    OrbitForm,
    OrbitMenu,
    OrbitMessage,
    OrbitModal,
    OrbitNumberInput,
    OrbitPopover,
    OrbitSelect,
    OrbitSwitch,
    OrbitTabs,
    OrbitTextArea,
    OrbitTextLink,
    OrbitTheme,
    OrbitTransition
} from "../features"

const IndexPage = () => {
    return (
        <Flex direction="column" padding={8} gap={4}>
            <OrbitAccordion />
            <OrbitAlert />
            <OrbitAutocomplete />
            <OrbitAvatar />
            <OrbitBadge />
            <OrbitBox />
            <OrbitButton />
            <OrbitCard />
            <OrbitCheckbox />
            <OrbitCounter />
            <OrbitDateInput />
            <OrbitForm />
            <OrbitTextLink />
            <OrbitMenu />
            <OrbitMessage />
            <OrbitModal />
            <OrbitNumberInput />
            <OrbitPopover />
            <OrbitSelect />
            <OrbitSwitch />
            <OrbitTabs />
            <OrbitTextArea />
            <OrbitTransition />
            <OrbitTheme />
        </Flex>
    );
};

export default IndexPage;
