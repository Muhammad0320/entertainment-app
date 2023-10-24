import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Movies from "./pages/MoviesPage";
import Bookmark from "./pages/Bookmark";
import AppLayout from "./ui/AppLayout";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./Styles/GlobalStyles";
import TVSeries from "./pages/TVSeries";
import { ViewPortProvider } from "./contexts/Viewport";

function App() {
  return (
    <ViewPortProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TVSeries />} />
            <Route path="/bookmarks" element={<Bookmark />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ViewPortProvider>
  );
}

export default App;
