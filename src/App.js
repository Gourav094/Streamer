import { Provider } from "react-redux";
import "./App.css"
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import SearchPage from "./components/SearchPage";

const appRouter = createBrowserRouter([{
  path: "/",
  element: (
    <div>
      <Header/>
      <Body />
    </div>
  ),
  children: [
    {
      path: "/",
      element: <MainContainer />,
    },
    {
      path: "/watch",
      element: <WatchPage />
    },
    {
      path:"/search",
      element:<SearchPage/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div >
        {/* <BrowserRouter>  <Header /></BrowserRouter> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
