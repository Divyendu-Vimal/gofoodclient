import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    let response = await fetch("http://localhost:4000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    //console.log(response[0], response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>

        <div>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            style={{ objectFit: "contain !important" }}
          >
            <div className="carousel-inner" id="carousel">
              <div className="carousel-caption" style={{ zIndex: "10" }}>
                <div className="d-flex justify-content-center">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="carousel-item active">
                <img
                  src="https://media.istockphoto.com/photos/double-topping-pizza-on-the-wooden-desk-isolated-picture-id1074109872?k=20&m=1074109872&s=612x612&w=0&h=JoYwwTfU_mMBykXpRB_DmgeecfotutOIO9pV5_JObpk="
                  className="d-block w-100"
                  style={{ filter: "brightness(30%)" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU="
                  className="d-block w-100"
                  style={{ filter: "brightness(30%)" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049__340.jpg"
                  className="d-block w-100"
                  style={{ filter: "brightness(30%)" }}
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
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
              data-bs-target="#carouselExampleFade"
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

        <div className="container">
          {foodCat.length !== 0
            ? foodCat.map((data) => {
                return (
                  <div key={data._id} className="row mb-3">
                    <div className="fs-3 m-3">{data.CategoryName}</div>
                    <hr />
                    {foodItem.length !== 0 ? (
                      foodItem
                        .filter(
                          (item) =>
                            item.CategoryName === data.CategoryName &&
                            item.name
                              .toLowerCase()
                              .includes(search.toLowerCase())
                        )
                        .map((filterItems) => {
                          return (
                            <div
                              key={filterItems._id}
                              className="col-12 col-md-6 col-lg-3"
                            >
                              <Card
                                foodName={filterItems.name}
                                options={filterItems.options[0]}
                                imgSrc={filterItems.img}
                              ></Card>
                            </div>
                          );
                        })
                    ) : (
                      <div>No such Data found</div>
                    )}
                  </div>
                );
              })
            : ""}
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
