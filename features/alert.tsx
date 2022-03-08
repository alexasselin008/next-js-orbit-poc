import { Alert, AlertTrigger, Button, Content, Heading } from "@orbit-ui/components";

export function OrbitAlert() {
    return (
        <>
          <Heading>Alert</Heading>
          <AlertTrigger>
              <Button variant="secondary">Open</Button>
              <Alert variant="negative" primaryButtonLabel="Retry" cancelButtonLabel="Cancel">
                  <Heading>Network error</Heading>
                  <Content>
                      Something went wrong while connecting to NASA network. Please try again in a few
                      minutes.
                  </Content>
              </Alert>
          </AlertTrigger>
        </>
    );
}