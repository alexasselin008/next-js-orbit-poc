import { Alert, AlertTrigger, Autocomplete, Button, Content, Heading, Item } from "@orbit-ui/components";

export function OrbitAutocomplete() {
    return (
        <>
          <Heading>Autocomplete</Heading>
          <Autocomplete placeholder="Planets" aria-label="Planets">
              <Item key="earth">Earth</Item>
              <Item key="jupiter">Jupiter</Item>
              <Item key="mars">Mars</Item>
              <Item key="mercury">Mercury</Item>
              <Item key="neptune">Neptune</Item>
              <Item key="saturn">Saturn</Item>
              <Item key="uranus">Uranus</Item>
          </Autocomplete>
        </>
    );
}