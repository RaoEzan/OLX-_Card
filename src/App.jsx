import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios('https://dummyjson.com/products')
      .then(res => {
        console.log(res.data.products);
        setProducts(res.data.products)
      }).catch((err) => {
        console.log(err);
        setError(true);
      }).finally(() => {
        console.log("finally chal rha ha");
        setLoading(false);
      })
  }, []);

  
  const filterItems = (category) => {
    const filtered = products.filter(item => item.category === category);
    setFilteredProducts(filtered);
  };


  // Products ko categories ke mutabiq group karna
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <>

    <nav className="navbar bg-#fff border-bottom border-body fixed-top" data-bs-theme="#fff" >
      <div className="container-fluid">
      <svg height="20" viewBox="0 0 36.289 20.768" className="logo">
  <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z"></path>
</svg>

        <form className="d-flex" role="search">
        <input className="form-control form-control-lg me-2" type="search" placeholder="Search" aria-label="Search" />

          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  
  




      
      <h1 className='text-center text-5xl bg-[#00bcff] text-white py-5 hover:bg-amber-300 hover:text-black cursor-pointer'>Hello world</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error occurred</h1>}

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>


        {Object.keys(groupedProducts).map(category => ( 
          <div key={category} style={{ width: '100%'}}>
            <h2 className="text-3xl text-center bg-gray-800 text-black py-3">{category.toUpperCase()}</h2>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              padding: '10px'
            }}>

              
  
              {groupedProducts[category].map(item =>  (
                <Card
                
                  key={item.id}
                  price={item.price}
                  title={item.title}
                  image={item.thumbnail}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;