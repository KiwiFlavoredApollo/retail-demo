import { MainPage } from "@/pages/MainPage.tsx";
import { ShoppingCartPage } from "@/pages/ShoppingCartPage.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ "/" } element={ <MainPage></MainPage> }></Route>
          <Route path={ "/shopping-cart" } element={ <ShoppingCartPage></ShoppingCartPage> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
