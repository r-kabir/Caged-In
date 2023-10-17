import {createRoutesFromElements, createBrowserRouter, Route, RouterProvider} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import Friends from "./pages/Friends";
import Posts from "./pages/Posts";

function App() {
  
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/caged-in" element={<RootLayout />}>
          <Route index element={<Profile />}></Route>
          <Route path="feed" element={<Feed />}></Route>
          <Route path="friends" element={<Friends />}></Route>
          <Route path="posts" element={<Posts />}></Route>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
