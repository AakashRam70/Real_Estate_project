import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Listing from './pages/Listing';
import AddProperty from './pages/AddProperty';
import Favourites from './pages/Favourites';
import Bookings from './pages/Bookings';
import Header from './components/Header';
import Footer from './components/Footer';
import { Suspense } from 'react';
import Layout from './components/Layout';
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from "react-query/devtools";
import "react-toastify/dist/ReactToastify.css";
import Property from './pages/Property';

export default function App() {

  const queryClient = new QueryClient();
  return (
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
              <Route path='/addproperty' element={<AddProperty />} />
              <Route path='/bookings' element={<Bookings />} />
              <Route path='/favourites' element={<Favourites />} />
            </Route>
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
