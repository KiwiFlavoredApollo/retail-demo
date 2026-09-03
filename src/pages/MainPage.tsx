import { Button, Container, Stack } from "@chakra-ui/react";

export const MainPage = () => {
  return (
    <>
      <Container maxWidth={"lg"} height={"100vh"}>
        <Stack direction={"column"}>
          <Button>Hello World</Button>
        </Stack>
      </Container>
    </>
  );
}