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

export const DashboardPage = () => {
  const sideButtonProps: ButtonProps = {
    "variant": "ghost",
    "rounded": "full"
  }

  const cardRootProps: CardRootProps = {
    "variant": "outline",
    "height": "100px"
  }

  return (
    <>
      <Container maxWidth={ "8xl" } height={ "100vh" }>
        <Grid templateRows={ "auto 1fr" } templateColumns={ "2fr 10fr" } height={ "100%" } gap={ "4" }>
          <GridItem>
            <Stack direction={ "column" } gap={ "4" } padding={ "4" }>
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
              <Stack direction={ "row" } padding={ "4" }>
                <InputGroup startElement={ <LuSearch/> }>
                  <Input rounded={ "full" }></Input>
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
                <Text flexShrink={ 0 } alignContent={ "center" }>John Doe</Text>
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