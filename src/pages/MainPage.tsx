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
  Image, Heading, Box
} from "@chakra-ui/react";
import exampleImage from "@/assets/hero.png"
import { LuBell, LuLayoutDashboard, LuMail, LuSearch, LuShoppingCart, LuUser } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid templateRows={ "auto" } gap={ "8" }>
        <GridItem padding={ "4" }>
          <Container maxWidth={ "8xl" }>
            <Stack direction={ "row-reverse" } gap={ "4" }>
              <IconButton rounded={ "full" } variant={ "ghost" }>
                <LuShoppingCart></LuShoppingCart>
              </IconButton>
              <IconButton rounded={ "full" } variant={ "ghost" }>
                <LuUser></LuUser>
              </IconButton>
              <IconButton rounded={ "full" } variant={ "solid" } onClick={() => navigate("/dashboard")}>
                <LuLayoutDashboard></LuLayoutDashboard>
              </IconButton>
            </Stack>
          </Container>
        </GridItem>

        <GridItem>
          <Container maxWidth={ "xl" }>
            <InputGroup width={ "100%" } startElement={ <LuSearch></LuSearch> }>
              <Input rounded={ "full" }></Input>
            </InputGroup>
          </Container>
        </GridItem>

        <GridItem>
          <Box height={ "400px" } backgroundColor={ "white" }></Box>
        </GridItem>

        <GridItem>
          <Container maxWidth={ "8xl" }>
            <Grid templateColumns={ "repeat(4, 1fr)" } gap={ "8" }>
              <GridItem>
                <Card.Root>
                  <Card.Header>
                    <Card.Title>
                      바람막이
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Image src={ exampleImage }></Image>
                  </Card.Body>
                </Card.Root>
              </GridItem>
              <GridItem>
                <Card.Root>
                  <Card.Header>
                    <Card.Title>
                      트레이닝 팬츠
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Image src={ exampleImage }></Image>
                  </Card.Body>
                </Card.Root>
              </GridItem>
              <GridItem>
                <Card.Root>
                  <Card.Header>
                    <Card.Title>
                      숏 팬츠
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Image src={ exampleImage }></Image>
                  </Card.Body>
                </Card.Root>
              </GridItem>
              <GridItem>
                <Card.Root>
                  <Card.Header>
                    <Card.Title>
                      러닝
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Image src={ exampleImage }></Image>
                  </Card.Body>
                </Card.Root>
              </GridItem>
            </Grid>
          </Container>
        </GridItem>
      </Grid>
    </>
  )
    ;
}