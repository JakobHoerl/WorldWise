import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Homepage from "./pages/Homepage.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import Login from "./pages/Login.jsx";
import Citylist from "./components/Citylist.jsx";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx";

const URL = "http://localhost:8000/cities";

function App() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setLoading(true);
        const res = await fetch(URL);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("No cities found");
      } finally {
        setLoading(false);
      }
    }
    fetchCities();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<Citylist cities={cities} loading={loading} />}
            />
            <Route
              path="cities"
              element={
                <Citylist
                  cities={cities}
                  loading={loading}
                  setCities={setCities}
                />
              }
            />
            <Route path="cities/:id" element={<City />} />
            <Route
              path="countries"
              element={<CountryList cities={cities} loading={loading} />}
            ></Route>
            <Route path="form" element={<p>Form</p>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
