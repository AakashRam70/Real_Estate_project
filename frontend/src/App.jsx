import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Favourites from './pages/Favourites';
import Bookings from './pages/Bookings';
import Header from './components/Header';
import Footer from './components/Footer';
import { Suspense, useState } from 'react';
import Layout from './components/Layout';
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from "react-query/devtools";
import "react-toastify/dist/ReactToastify.css";
import Property from './pages/Property';
import UserDetailContext from './context/userDetailContext.js';

export default function App() {

  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    Favourites: [],
    bookings: [],
    token: null,
  })
  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }} >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading data...</div>}>
            <Header />
            <Routes>
              <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/listing'>
                  <Route index element={<Listing />} />
                  <Route path=':propertyId' element={<Property />} />
                </Route>
                <Route path='/bookings' element={<Bookings />} />
                <Route path='/favourites' element={<Favourites />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}
