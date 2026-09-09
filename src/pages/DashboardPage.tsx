import {
  Avatar,
  Button,
  type ButtonProps,
  Card,
  type CardRootProps,
  Container,
  Grid,
  GridItem, IconButton, Input,
  InputGroup,
  Stack,
  Text
} from "@chakra-ui/react";
import { LuBell, LuMail, LuSearch } from "react-icons/lu";

export const MainPage = () => {
  const sideButtonProps: ButtonProps = {
    "variant": "ghost"
  }

  const cardRootProps: CardRootProps = {
    "variant": "outline",
    "height": "100px"
  }

  return (
    <>
      <Container maxWidth={ "8xl" } height={ "100vh" }>
        <Grid templateColumns={ "2fr 10fr" } height={ "100%" } gap={ "4" }>
          <GridItem>
            <Stack direction={ "column" }>
              <Button { ...sideButtonProps }>Dashboard</Button>
              <Button { ...sideButtonProps }>Tasks</Button>
              <Button { ...sideButtonProps }>Calendar</Button>
              <Button { ...sideButtonProps }>Analytics</Button>
              <Button { ...sideButtonProps }>Team</Button>

              <Button { ...sideButtonProps }>Settings</Button>
              <Button { ...sideButtonProps }>Help</Button>
              <Button { ...sideButtonProps }>Logout</Button>
            </Stack>
          </GridItem>

          <GridItem>
            <Stack direction={ "column" }>
              <Stack direction={ "row" }>
                <InputGroup startElement={ <LuSearch/> }>
                  <Input></Input>
                </InputGroup>
                <IconButton rounded={ "full" }>
                  <LuMail></LuMail>
                </IconButton>
                <IconButton rounded={ "full" }>
                  <LuBell></LuBell>
                </IconButton>
                <Avatar.Root>
                  <Avatar.Fallback></Avatar.Fallback>
                </Avatar.Root>
                <Text flexShrink={ 0 } alignContent={"center"}>John Doe</Text>
              </Stack>
              <Grid templateColumns={ "repeat(4, 1fr)" } height={ "100%" } gap={ "4" }>
                <GridItem>
                  <Card.Root { ...cardRootProps }></Card.Root>
                </GridItem>
                <GridItem>
                  <Card.Root { ...cardRootProps }></Card.Root>
                </GridItem>
                <GridItem>
                  <Card.Root { ...cardRootProps }></Card.Root>
                </GridItem>
                <GridItem>
                  <Card.Root { ...cardRootProps }></Card.Root>
                </GridItem>
              </Grid>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}