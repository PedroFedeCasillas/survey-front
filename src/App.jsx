import { Route, Routes } from "react-router-dom";
import "./App.css";
//import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Result } from "./components/results/Result";
import { Landing } from "./components/landing/Landing";
import { SurveyForm } from "./components/form/SurveyForm";
import { useLocation } from "react-router-dom";
import { EditSurvey } from "./components/updateSurvey/UpdateSurvey";
import { Home } from "./components/home/home";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/survey" element={<SurveyForm />} />
        <Route exact path="/result" element={<Result />} />
        <Route path="/surveyEdit/:id" element={<EditSurvey />} />
      </Routes>
    </div>
  );
}

export default App;
