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
  Stack, Table,
  Text,
  Image, type ImageProps
} from "@chakra-ui/react";
import { LuBell, LuMail, LuMoveUpRight, LuPlus, LuSearch } from "react-icons/lu";
import reactIcon from "@/assets/react.svg"
import viteIcon from "@/assets/vite.svg"
import heroImage from "@/assets/hero.png"

export const DashboardPage = () => {
  const sideButtonProps: ButtonProps = {
    "variant": "ghost",
    "rounded": "full"
  }

  const cardRootProps: CardRootProps = {
    "variant": "outline",
    "height": "100%",
  }

  const projectImageProps: ImageProps = {
    "boxSize": "30px",
    "fit": "contain",
  }

  return (
    <>
      <Container maxWidth={ "8xl" } padding={ "4" }>
        <Grid
          templateRows={ "auto 1fr" }
          templateColumns={ "2fr 10fr" }
          height={ "100%" }
          gap={ "4" }
        >
          <GridItem rowSpan={ 1 } colSpan={ 1 }></GridItem>

          <GridItem rowSpan={ 1 } colSpan={ 1 }>
            <Stack direction={ "row" }>
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
          </GridItem>

          <GridItem rowSpan={ 1 } colSpan={ 1 }>
            <Stack direction={ "column" } gap={ "4" }>
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
            <Grid
              templateRows={ "auto" }
              templateColumns={ "repeat(4, 1fr)" }
              height={ "100%" }
              gap={ "4" }
            >
              <GridItem>
                <Card.Root { ...cardRootProps }>
                  <Card.Header>
                    <Grid templateColumns={ "auto 1fr auto" }>
                      <GridItem alignContent={ "center" }>
                        <Card.Title>Total Projects</Card.Title>
                      </GridItem>
                      <GridItem></GridItem>
                      <GridItem>
                        <IconButton rounded={ "full" }>
                          <LuMoveUpRight></LuMoveUpRight>
                        </IconButton>
                      </GridItem>
                    </Grid>
                  </Card.Header>
                  <Card.Body>
                    <Text textStyle={ "4xl" }>{ 24 }</Text>
                  </Card.Body>
                </Card.Root>
              </GridItem>
              <GridItem>
                <Card.Root { ...cardRootProps }>
                  <Card.Header>
                    <Grid templateColumns={ "auto 1fr auto" }>
                      <GridItem alignContent={ "center" }>
                        <Card.Title>Ended Projects</Card.Title>
                      </GridItem>
                      <GridItem></GridItem>
                      <GridItem>
                        <IconButton rounded={ "full" }>
                          <LuMoveUpRight></LuMoveUpRight>
                        </IconButton>
                      </GridItem>
                    </Grid>
                  </Card.Header>
                  <Card.Body>
                    <Text textStyle={ "4xl" }>{ 10 }</Text>
                  </Card.Body>
                </Card.Root>
              </GridItem>
              <GridItem>
                <Card.Root { ...cardRootProps }>
                  <Card.Header>
                    <Grid templateColumns={ "auto 1fr auto" }>
                      <GridItem alignContent={ "center" }>
                        <Card.Title>Running Projects</Card.Title>
                      </GridItem>
                      <GridItem></GridItem>
                      <GridItem>
                        <IconButton rounded={ "full" }>
                          <LuMoveUpRight></LuMoveUpRight>
                        </IconButton>
                      </GridItem>
                    </Grid>
                  </Card.Header>
                  <Card.Body>
                    <Text textStyle={ "4xl" }>{ 12 }</Text>
                  </Card.Body>
                </Card.Root>
              </GridItem>
              <GridItem>
                <Card.Root { ...cardRootProps }>
                  <Card.Header>
                    <Grid templateColumns={ "auto 1fr auto" }>
                      <GridItem alignContent={ "center" }>
                        <Card.Title>Pending Projects</Card.Title>
                      </GridItem>
                      <GridItem></GridItem>
                      <GridItem>
                        <IconButton rounded={ "full" }>
                          <LuMoveUpRight></LuMoveUpRight>
                        </IconButton>
                      </GridItem>
                    </Grid>
                  </Card.Header>
                  <Card.Body>
                    <Text textStyle={ "4xl" }>{ 2 }</Text>
                  </Card.Body>
                </Card.Root>
              </GridItem>
              <GridItem colSpan={ 2 }>
                <Card.Root { ...cardRootProps }>
                  <Card.Header>
                    <Card.Title>Projects Analytics</Card.Title>
                  </Card.Header>
                  <Card.Body>
                  </Card.Body>
                </Card.Root>
              </GridItem>
              <GridItem>
                <Card.Root { ...cardRootProps }>
                  <Card.Header>
                    <Card.Title>Reminders</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Text>LG CNS Bootcamp</Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button rounded={ "full" } width={ "full" }>
                      Start
                    </Button>
                  </Card.Footer>
                </Card.Root>
              </GridItem>
              <GridItem rowSpan={ 2 } colSpan={ 1 }>
                <Card.Root { ...cardRootProps }>
                  <Card.Header>
                    <Grid templateColumns={ "auto 1fr auto" }>
                      <GridItem alignContent={ "center" }>
                        <Card.Title>Projects</Card.Title>
                      </GridItem>
                      <GridItem></GridItem>
                      <GridItem>
                        <Button rounded={ "full" }>
                          <LuPlus></LuPlus>New
                        </Button>
                      </GridItem>
                    </Grid>
                  </Card.Header>
                  <Card.Body>
                    <Table.Root>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell><Image src={ reactIcon } { ...projectImageProps }></Image></Table.Cell>
                          <Table.Cell>React</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell><Image src={ viteIcon } { ...projectImageProps }></Image></Table.Cell>
                          <Table.Cell>Vite</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell><Image src={ heroImage } { ...projectImageProps }></Image></Table.Cell>
                          <Table.Cell>JavaScript</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell><Image src={ heroImage } { ...projectImageProps }></Image></Table.Cell>
                          <Table.Cell>TypeScript</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table.Root>
                  </Card.Body>
                </Card.Root>
              </GridItem>
              <GridItem colSpan={ 2 }>
                <Card.Root { ...cardRootProps }>
                  <Card.Header>
                    <Grid templateColumns={ "auto 1fr auto" }>
                      <GridItem alignContent={ "center" }>
                        <Card.Title>Team Collaboration</Card.Title>
                      </GridItem>
                      <GridItem></GridItem>
                      <GridItem>
                        <Button rounded={ "full" }>
                          <LuPlus></LuPlus>Add Member
                        </Button>
                      </GridItem>
                    </Grid>
                  </Card.Header>
                  <Card.Body>
                    <Table.Root>
                      <Table.Row>
                        <Table.Cell width="1%">
                          <Avatar.Root></Avatar.Root>
                        </Table.Cell>
                        <Table.Cell>
                          <Stack>
                            <Text>John</Text>
                            <Text></Text>
                          </Stack>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <Avatar.Root></Avatar.Root>
                        </Table.Cell>
                        <Table.Cell>
                          <Stack>
                            <Text>Alice</Text>
                            <Text></Text>
                          </Stack>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <Avatar.Root></Avatar.Root>
                        </Table.Cell>
                        <Table.Cell>
                          <Stack>
                            <Text>Bob</Text>
                            <Text></Text>
                          </Stack>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Root>
                  </Card.Body>
                </Card.Root>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
    ;
}