import { MainPage } from "@/pages/MainPage.tsx";
import { DashboardPage } from "@/pages/DashboardPage.tsx";
import { ShoppingCartPage } from "@/pages/ShoppingCartPage.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ "/" } element={ <MainPage></MainPage> }></Route>
          <Route path={ "/dashboard" } element={ <DashboardPage></DashboardPage> }></Route>
          <Route path={ "/shopping-cart" } element={ <ShoppingCartPage></ShoppingCartPage> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
