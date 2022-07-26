import React from 'react'
import "./Home.css"
import bag1 from "./images/bag-1.png"
import bag2 from "./images/bag-2.png"
import bag3 from "./images/bag-3.png"

import shoe1 from "./images/shoe-1.png"
import shoe2 from "./images/shoe-2.png"
import shoe3 from "./images/shoe-3.png"

import watch from "./images/watch.png"
import bag from "./images/bag.png"
import shoes from "./images/shoes.png"

import headphone from "./images/headphone.png"
import tv from "./images/tv.png"
import xbox from "./images/xbox.png"



const Home = () => {
  return (
    <div>
      
      <section id="home" className="py-4 py-md-5">
        <div classNameName="container">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active rounded p-5">
                <div className="row">
                  <div className="col-md-7 m-auto p-3">
                    <div className="product_info">
                      <h2 className="product_title display-3">Cool  Headphone</h2>
                      <p className="product_description">
                        This is the best headphone in the world for people who
                        just want to waste time in front of funky world.
                      </p>
                      <h1 className="product_price py-md-4">$420</h1>
                      <button className=" homebtn "><a href="#">Buy Now</a></button>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <img
                      src={headphone}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item rounded p-5">
                <div className="row">
                  <div className="col-md-7 m-auto p-3">
                    <div className="product_info">
                      <h2 className="product_title display-3">Best LED TV</h2>
                      <p className="product_description">
                        Get the Full HD LED TV
                      </p>
                      <h1 className="product_price py-md-4">$420</h1>
                      <button className=" c-button "><a href="#">Buy Now</a></button>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <img
                      src={tv}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item rounded p-5">
                <div className="row">
                  <div className="col-md-7 m-auto p-3">
                    <div className="product_info">
                      <h2 className="product_title display-3">X-Box</h2>
                      <p className="product_description">
                       Get it Now..
                      </p>
                      <h1 className="product_price py-md-4">$420</h1>
                      <button className=" homebtn "><a href="#">Buy Now</a></button>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <img
                      src={xbox}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <section id="categories" className="py-4 py-md-5">
        <div className="container">
          <div className="row gy-5 gy-lg-0 gx-md-5 text-white flex-wrap">
            <div className="col-md-6 col-lg-4">
              <div
                className="category category1 rounded d-flex align-items-center p-3"
              >
                <h3 className='product-title'>Watch</h3>
                <img
                  src={watch}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div
                className="category category2 rounded d-flex align-items-center p-3"
              >
                <h3>Bags</h3>
                <img src={bag} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div
                className="category category3 rounded d-flex align-items-center p-3"
              >
                <h3>Shoes</h3>
                <img
                  src={shoes}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="products_showcase" className="py-4 py-md-5">
        <div className="container">
          <div id="shoes" className="product_type_1 pb-5">
            <h1 className="product_type_title mb-4">Shoes</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-md-5 gy-5 gy-lg-0">
              <div className="col">
                <div className="card border border-0 rounded shadow h-100 ">
                  <img
                    src={shoe1}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Card title</h5>
                    <h4 className="product_pricing fw-semibold">$120</h4>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. 
                    </p>

                  </div>
                  <div className="p-3">
                    <button className=" homebtn"><a href="#" className=" text-decoration-none ">Buy Now<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                      <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg></span></a></button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border border-0 rounded shadow h-100 ">
                  <img
                    src={shoe2}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Card title</h5>
                    <h4 className="product_pricing fw-semibold">$120</h4>
                    <p className="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>

                  </div>
                  <div className="p-3">
                    <button className=" homebtn"><a href="#" className=" text-decoration-none ">Buy Now<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                      <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg></span></a></button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border border-0 rounded shadow h-100 ">
                  <img
                    src={shoe3}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Card title</h5>
                    <h4 className="product_pricing fw-semibold">$120</h4>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. 
                    </p>

                  </div>
                  <div className="p-3">
                    <button className=" homebtn"><a href="#" className=" text-decoration-none ">Buy Now<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                      <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg></span></a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="backpack" className="product_type_2">
            <h1 className="product_type_title mb-4">Bags</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-md-5 gy-5 gy-lg-0">
              <div className="col">
                <div className="card border border-0 rounded shadow h-100 ">
                  <img
                    src={bag1}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Card title</h5>
                    <h4 className="product_pricing fw-semibold">$120</h4>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. 
                    </p>

                  </div>
                  <div className="p-3">
                    <button className=" homebtn"><a href="#" className=" text-decoration-none ">Buy Now<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                      <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg></span></a></button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border border-0 rounded shadow h-100 ">
                  <img
                    src={bag2}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Card title</h5>
                    <h4 className="product_pricing fw-semibold">$120</h4>
                    <p className="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>

                  </div>
                  <div className="p-3">
                    <button className=" homebtn"><a href="#" className=" text-decoration-none ">Buy Now<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                      <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg></span></a></button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border border-0 rounded shadow h-100 ">
                  <img
                    src={bag3}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Card title</h5>
                    <h4 className="product_pricing fw-semibold">$120</h4>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. 
                      
                    </p>
                    <div className="p-3">
                    <button className=" homebtn"><a href="#" className=" text-decoration-none ">Buy Now<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                      <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg></span></a></button>
                  </div>

                  </div>
                  
                </div>
              </div>
            </div>


          </div> </div>
      </section>
      

      
    </div>
  )
}

export default Home