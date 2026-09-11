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
  Image, Heading, Box, Splitter, Separator
} from "@chakra-ui/react";
import exampleImage from "@/assets/react.svg"
import {
  LuBell,
  LuFlipHorizontal,
  LuHeart,
  LuMail, LuRotate3D, LuRotateCcw, LuRotateCw,
  LuSearch,
  LuShoppingCart,
  LuShuffle,
  LuUser,
  LuX
} from "react-icons/lu";

export const SwipePage = () => {
  return (
    <Container maxWidth={ "xl" } height={ "100vh" }>
      <Grid templateRows={ "1fr auto 1fr" } gap={ "8" } height={ "100%" }>
        <GridItem></GridItem>
        <GridItem>
          <Card.Root>
            <Image src={ exampleImage } boxSize={ "100%" } fit={ "contain" }></Image>
            <Card.Body></Card.Body>
            <Card.Footer>
              <Grid width={"100%"} templateColumns={ "1fr auto 1fr auto 1fr auto 1fr" }>
                <GridItem></GridItem>
                <GridItem>
                  <IconButton colorPalette={ "red" }  size={"2xl"} rounded={ "full" }>
                    <LuX></LuX>
                  </IconButton>
                </GridItem>
                <GridItem></GridItem>
                <GridItem>
                  <IconButton colorPalette={ "blue" }  size={"2xl"}  rounded={ "full" }>
                    <LuRotateCw></LuRotateCw>
                  </IconButton>
                </GridItem>
                <GridItem></GridItem>
                <GridItem>
                  <IconButton colorPalette={ "green" }  size={"2xl"}  rounded={ "full" }>
                    <LuHeart></LuHeart>
                  </IconButton>
                </GridItem>
                <GridItem></GridItem>
              </Grid>
            </Card.Footer>
          </Card.Root>
        </GridItem>
        <GridItem></GridItem>
      </Grid>
    </Container>
  )
    ;
}