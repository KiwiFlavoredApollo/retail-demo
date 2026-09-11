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
  Text,
  Image, Heading,
  Table
} from "@chakra-ui/react";
import { LuBell, LuMail, LuMinus, LuPlus, LuSearch, LuShoppingCart, LuUser, LuX } from "react-icons/lu";
import exampleImage from "@/assets/hero.png"

export const ShoppingCartPage = () => {
  return (
    <>
      <Grid templateRows={ "auto" }>
        <GridItem padding={ "2" }>
          <Container maxWidth={ "8xl" }>
            <Stack direction={ "row-reverse" } gap={ 4 }>
              <IconButton rounded={ "full" } variant={ "ghost" }>
                <LuShoppingCart></LuShoppingCart>
              </IconButton>
              <IconButton rounded={ "full" } variant={ "ghost" }>
                <LuUser></LuUser>
              </IconButton>
            </Stack>
          </Container>
        </GridItem>

        <GridItem>
          <Container maxWidth={ "8xl" }>
            <Grid templateColumns={ "2fr 1fr" } gap={ "4" }>
              <GridItem>
                <Card.Root>
                  <Card.Header>
                    <Grid templateColumns={ "1fr auto" }>
                      <GridItem></GridItem>
                      <GridItem>
                        <IconButton variant={ "ghost" } rounded={ "full" }>
                          <LuX></LuX>
                        </IconButton>
                      </GridItem>
                    </Grid>
                  </Card.Header>
                  <Card.Body>
                    <Grid templateColumns={ "auto 1fr" } gap={ "8" }>
                      <GridItem>
                        <Image src={ exampleImage } width={ "100px" }></Image>
                      </GridItem>
                      <GridItem>
                        <Stack gap={ "4" }>
                          <Card.Title>LG Gram 2026</Card.Title>
                          <Text>{ (1_000_000).toLocaleString() } 원</Text>
                        </Stack>
                      </GridItem>
                    </Grid>
                  </Card.Body>
                  <Card.Footer justifyContent={ "flex-end" }>
                    <Stack direction={ "row-reverse" } gap={ "4" }>
                      <IconButton rounded={ "full" }>
                        <LuPlus></LuPlus>
                      </IconButton>
                      <Text alignContent={ "center" }>1</Text>
                      <IconButton rounded={ "full" }>
                        <LuMinus></LuMinus>
                      </IconButton>
                    </Stack>
                  </Card.Footer>
                </Card.Root>
              </GridItem>
              <GridItem>
                <Stack gap={ "4" }>
                  <Card.Root>
                    <Card.Body>
                      <Table.Root>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>상품가격</Table.Cell>
                            <Table.Cell textAlign={ "end" }>{ (1_000_000).toLocaleString() } 원</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>배송비</Table.Cell>
                            <Table.Cell textAlign={ "end" }>{ (3_000).toLocaleString() } 원</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>전체가격</Table.Cell>
                            <Table.Cell textAlign={ "end" }>{ (1_000_000 + 3_000).toLocaleString() } 원</Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table.Root>
                    </Card.Body>
                  </Card.Root>
                  <Button rounded={ "full" }>결제하기</Button>
                </Stack>
              </GridItem>
            </Grid>
          </Container>
        </GridItem>
      </Grid>
    </>
  );
}