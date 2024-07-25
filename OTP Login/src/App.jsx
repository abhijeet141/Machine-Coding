import LoginPage from "./component/LoginPage"
import MainPage from "./component/MainPage"
import RenderOtp from "./component/RenderOtp"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage></LoginPage>}/>
      <Route path="/otp" element={<RenderOtp></RenderOtp>}/>
      <Route path="/MainPage" element={<MainPage></MainPage>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
