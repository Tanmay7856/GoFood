
import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatchCart, useCart } from './ContextReducer'
// import { Dropdown, DropdownButton } from 'react-bootstrap';
export default function Card(props) {
  let data = useCart();

  let navigate = useNavigate()
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const priceRef = useRef();
  // const [btnEnable, setBtnEnable] = useState(false);
  // let totval = 0
  // let price = Object.values(options).map((value) => {
  //   return parseInt(value, 10);
  // });
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.item;
  const dispatch = useDispatchCart();
  // const handleClick = () => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/login")
  //   }
  // }
  const handleQty = (e) => {
    setQty(e.target.value);
  }
  const handleOptions = (e) => {
    setSize(e.target.value);
  }
  const handleAddToCart = async () => {
    // let food = []
    // for (const item of data) {
    //   if (item.id === foodItem._id) {
    //     food = item;

    //     break;
    //   }
    // }
    // console.log(food)
    // console.log(new Date())
    // if (food !== []) {
    //   if (food.size === size) {
    //     await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
    //     return
    //   }
    //   else if (food.size !== size) {
    //     await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
    //     console.log("Size different so simply ADD one more to the list")
    //     return
    //   }
    //   return
    // }

    // await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })


    // // setBtnEnable(true)
    

    const response = await fetch(`http://localhost:5000/tn/user/?email=${props.user.email}`, {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      //  body: JSON.stringify({ email: credentials.email, password: credentials.password })

    });
    
    const json = await response.json()
    console.log(json.users.orders)

    let food =json.users.orders
    
    food.unshift({name:foodItem.name,price:finalPrice,qty:qty,size:size})

    const response2 = await fetch("http://localhost:5000/tn/user/addorder", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id:props.user.id,orders:food})
    });
    // const data=await response2.json()
    // console.log(data)
    console.log(food)
    alert('added to cart!!!')

  }

  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  // useEffect(()=>{
  // checkBtn();
  //   },[data])

  let finalPrice = qty * parseInt(options[size]);   //This is where Price is changing
  // totval += finalPrice;
  // console.log(totval)
  return (
    <div>

      <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
        <img src={props.ImgSrc} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          {/* <p className="card-text">This is some random text. This is description.</p> */}
          <div className='container w-100 p-0' style={{ height: "38px" }}>
            <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }}  onChange={handleQty}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
            </select>
            <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} ref={priceRef}  onChange={handleOptions}>
              {priceOptions.map((i) => {
                return <option key={i} value={i}>{i}</option>
              })}
            </select>
            <div className=' d-inline ms-2 h-100 w-20 fs-5' >
              ₹{finalPrice}/-
            </div>
          </div>
          <hr></hr>
          <button className={`btn btn-success justify-center ms-2 `} onClick={handleAddToCart}>Add to Cart</button>
          {/* <button className={`btn btn-danger justify-center ms-2 ${btnEnable ? "" : "disabled"}`} onClick={handleRemoveCart}>Remove</button> */}
        </div>
      </div>
    </div>
  )
}
//