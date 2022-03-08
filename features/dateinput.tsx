import { subMonths, subWeeks } from "date-fns";
import { Counter, DateInput, Div, Heading, Inline, Text } from "@orbit-ui/components";

export function OrbitDateInput() {
  return(
    <>
    <Heading>DateInput</Heading>
<DateInput
    presetsVariant="expanded"
    presets={[
        {
            text: "7 D",
            date: subWeeks(new Date(), 1)
        },
        {
            text: "1 M",
            date: subMonths(new Date(), 1)
        },
        {
            text: "3 M",
            date: subMonths(new Date(), 3)
        },
        {
            text: "6 M",
            date: subMonths(new Date(), 6)
        }
    ]}
/>
    </>
  )
}