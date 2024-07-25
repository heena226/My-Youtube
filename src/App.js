// import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchResults from './components/SearchResults';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />
        },
        {
          path: "/watch",
          element: <WatchPage />
        },
        {
          path: "/demo",
          element: <>
                    <Demo />
                    <Demo2 />
                  </>
        },
        {
          path: "/search-results",
          element: <SearchResults />
        }
      ]
    },
  ])
  return (
    <Provider store={store}>
      <div className=''>
        <Head/>
        <RouterProvider router={appRouter}>        
          <Body/>
        </RouterProvider>
      </div>
    </Provider>
  );
  /**
    Head
    Body
      Sidebar
        MenuItems
      MainContainer
        ButtonsList
        VideoContainer
          VideoCard      
  */
}

export default App;
