import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
// import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
export default function Home({user,login}) {
  const [foodCat, setFoodCat] = useState([])
  const [foodItems, setFoodItems] = useState([])
  const [search, setSearch] = useState('')
  const nav=useNavigate()

  let categories=[
    {
        CategoryName: "Biryani/Rice"
    },
    {
        CategoryName: "Starter"
    },
    {
        CategoryName: "Pizza"
    }
]

  let foodList=[
    {
        "CategoryName": "Biryani/Rice",
        "name": "Chicken Fried Rice",
        "img": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "options": [
            {
                "half": "130",
                "full": "220"
            }
        ],
        "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        "CategoryName": "Biryani/Rice",
        "name": "Veg Fried Rice",
        "img": "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "options": [
            {
                "half": "110",
                "full": "200"
            }
        ],
        "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        "CategoryName": "Biryani/Rice",
        "name": "Fish Biryani",
        "img": "https://media.istockphoto.com/photos/king-fish-biryani-with-raita-served-in-a-golden-dish-isolated-on-dark-picture-id1409942571?b=1&k=20&m=1409942571&s=170667a&w=0&h=ozlMJf5hsDmS2sSdEdBWnoSZOEITef4qGMeWeq2lyTc=",
        "options": [
            {
                "half": "200",
                "full": "320"
            }
        ],
        "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        "CategoryName": "Biryani/Rice",
        "name": "Chicken Biryani",
        "img": "https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049__340.jpg",
        "options": [
            {
                "half": "170",
                "full": "300"
            }
        ],
        "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        "CategoryName": "Biryani/Rice",
        "name": "Veg Biryani",
        "img": "https://media.istockphoto.com/photos/veg-biryani-picture-id1363306527?b=1&k=20&m=1363306527&s=170667a&w=0&h=VCbro7CX8nq2kruynWOCO2GbMGCea2dDJy6O6ebCKD0=",
        "options": [
            {
                "half": "150",
                "full": "260"
            }
        ],
        "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        "CategoryName": "Biryani/Rice",
        "name": "Prawns Fried Rice",
        "img": "https://cdn.pixabay.com/photo/2018/03/23/08/27/thai-fried-rice-3253027__340.jpg",
        "options": [
            {
                "half": "120",
                "full": "220"
            }
        ],
        "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        "CategoryName": "Starter",
        "name": "Chilli Paneer",
        "img": "https://media.istockphoto.com/photos/spicy-paneer-or-chilli-paneer-or-paneer-tikka-or-cottage-cheese-in-picture-id697316634?b=1&k=20&m=697316634&s=170667a&w=0&h=bctfHdYTz9q2dJUnuxGRDUUwC9UBWjL_oQo5ECVVDAs=",
        "options": [
            {
                "half": "120",
                "full": "200"
            }
        ],
        "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        "CategoryName": "Starter",
        "name": "Paneer 65",
        "img": "https://media.istockphoto.com/photos/paneer-tikka-kabab-in-red-sauce-is-an-indian-dish-made-from-chunks-of-picture-id1257507446?b=1&k=20&m=1257507446&s=170667a&w=0&h=Nd7QsslbvPqOcvwu1bY0rEPZXJqwoKTYCal3nty4X-Y=",
        "options": [
            {
                "half": "150",
                "full": "260"
            }
        ],
        "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        "CategoryName": "Starter",
        "name": "Chicken Tikka",
        "img": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "options": [
            {
                "half": "170",
                "full": "300"
            }
        ],
        "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        "CategoryName": "Starter",
        "name": "Paneer Tikka",
        "img": "https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU=",
        "options": [
            {
                "half": "170",
                "full": "250"
            }
        ],
        "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        "CategoryName": "Pizza",
        "name": "Chicken Cheese Pizza",
        "img": "https://media.istockphoto.com/photos/double-topping-pizza-on-the-wooden-desk-isolated-picture-id1074109872?k=20&m=1074109872&s=612x612&w=0&h=JoYwwTfU_mMBykXpRB_DmgeecfotutOIO9pV5_JObpk=",
        "options": [
            {
                "regular": "120",
                "medium": "230",
                "large": "350"
            }
        ],
        "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        "CategoryName": "Pizza",
        "name": "Mix Veg Pizza",
        "img": "https://media.istockphoto.com/photos/chinese-food-veg-pizza-picture-id1341905237?k=20&m=1341905237&s=612x612&w=0&h=Lbuza1Ig5cC1PwQhqTsq-Uac8hg1W-V0Wx4d4lqDeB0=",
        "options": [
            {
                "regular": "100",
                "medium": "200",
                "large": "300"
            }
        ],
        "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    }
]
  // const loadFoodItems = async () => {
  //   let response = await fetch("http://localhost:5000/api/auth/foodData", {
  //     // credentials: 'include',
  //     // Origin:"http://localhost:3000/login",
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }

  //   });
  //   response = await response.json()
  //   // console.log(response[1][0].CategoryName)
  //   setFoodItems(response[0])
  //   setFoodCat(response[1])
  // }

  // useEffect(() => {
  //   loadFoodItems()
  // }, [])
  useEffect(()=>{
    setFoodCat(categories)
    setFoodItems(foodList)
    console.log(user.email)
  },[])

  return (
    <div >
      <div>
        <Navbar login={login} nav={nav} />
      </div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

          <div className="carousel-inner " id='carousel'>
            <div class=" carousel-caption  " style={{ zIndex: "9" }}>
              <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
                <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                <button className="btn text-white bg-danger" onClick={() => { setSearch('') }}>X</button>
              </div>
            </div>
            <div className="carousel-item active" >
              <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='container'> {/* boootstrap is mobile first */}
        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (
                // justify-content-center
                <div className='row mb-3'>
                  <div key={data.id} className='fs-3 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                  {foodItems !== [] ? foodItems.filter(
                    (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                    .map(filterItems => {
                      return (
                        <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                          {console.log(filterItems.url)}
                          <Card user={user} foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card>
                        </div>
                      )
                    }) : <div> No Such Data </div>}
                </div>
              )
            })
            : ""}
      </div>
      <Footer />
    </div>









  )
}
