
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body>
        <Header/>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
          </Routes>
        </Router>
        <Footer/>
      </body>
    </html>   
  );
}
export default App;
