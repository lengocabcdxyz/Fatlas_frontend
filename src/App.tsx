import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./features/auth/LoginForm";
import SignUpForm from "./features/auth/SignUpForm";

import { useAuth } from "./hooks/useAuth";

import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Library from "./Library";
import "./App.css";

function App() {
  useAuth();

  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/signin"
              element={<LoginForm />}
            />

            <Route
              path="/signup"
              element={<SignUpForm />}
            />

            <Route
              path="/library"
              element={<Library />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;