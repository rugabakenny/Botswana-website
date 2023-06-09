import React,{Component,useState,useEffect} from 'react';
import "../css/tailwindcss.css";
import "../css/tourism.css";
import Navbar from "./navbar";
import Footer from "./Footer.js";
import ReactTooltip from 'react-tooltip';
import axios from 'axios';
import { Tooltip } from 'reactstrap';
import Background from '../images/car.jpg';
function CarRental() {

    const [data, setData] = useState([]);
    const pathed='http://127.0.0.1:8000'
    
    
           //let fetch information
           useEffect( ()=>{
              // async await
             const response = axios.get('http://127.0.0.1:8000/Carrental/') 
             .then(res=>{
               setData(res.data);
               console.log(res)
           
             })
             .catch((err)=>{
               console.log(err)
             })
           } ,[]
           );


        const [tooltipOpen, setTooltipOpen] = useState(false);
      
        const toggle = () => setTooltipOpen(!tooltipOpen);
    return(
        <>
<Navbar/>
<div className="car" style={{height:"400px"}}>
            <div className=" bg-black bg-opacity-25 ">

<h1 className="py-12 pt-48 text-4xl font-bold text-center text-white md:text-4xl">Rent and Buy your desired car in Botswana</h1>
<div className="flex flex-wrap ">
    <div className="p-4 mt-8 ml-10 md:w-1/2 md:ml-0 md:p-0">
     <form className="form-group">
     {/* <select  className="px-12 py-3 font-bold text-white bg-blue-500 rounded cursor-pointer float-center md:float-right md:px-28 text-md md:text-xl hover:bg-blue-900">
     <option>select location</option>
         <option>Gabarone</option>
         <option>Kasane</option>
         <option>FrancisTown</option>
       </select> */}
       </form>
    </div>
    
</div>
            </div>

        </div>
<div class="mx-3 mt-2">
<h5 className=" p-2 pt-4 font-bold">Get a car on an affordable price</h5>
		<div class="row">
        {data.map((item,key)=>{ 
        return( 
 <div class="col-md-3 ">
<div class="card mb-3 shadow-md">
     <img class="card-img-top"
      src={pathed+item.image} alt={item.image}/>
     <div class="card-body">
     <h4 class="card-title font-">{item.location}</h4>
     <h4 class="card-title font-">{item.telephone}</h4>
     <h4 class="card-title font-">{item.price}</h4>
     <h4 class="card-title text-sm">{item.description}</h4>
      {/* <div class="flex">
      <div>
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="Tooltippassenger"> <i class="fas fa-users text-black mx-1 prefix "></i></span>
      <br/>
      <span>8</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="Tooltippassenger" toggle={toggle}>
       Passenger
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="Tooltipgear"> <i class="fa fa-arrows-alt text-black mx-1 prefix "></i></span>
      <br/>
      <span>Normal</span>
      <Tooltip placement="bottom" isOpen={tooltipOpen} target="Tooltipgear" toggle={toggle}>
       Gear Shift
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipBaggage"> <i class="fas fa-luggage-cart text-black mx-1 prefix "></i></span>
      <br/>
      <span>1</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipBaggage" toggle={toggle}>
       Baggage
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipDoor"> <i class="fas fa-door-open text-black mx-1 prefix "></i></span>
      <br/>
      <span>4</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipDoor" toggle={toggle}>
      Door
      </Tooltip>
      </div>
      
      </div> */}
      {/* <p class="card-text text-md my-4"><code class="text-2xl text-yellow-500">$</code> 50 /day</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150" data-toggle="modal" data-target="#exampleModalLong">
      View More
</button> */}

{/* 
<div class=" modal fade animated bounceIn" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
 <div class="modal-dialog" role="document">
  <div class="modal-content modal-fullscreen">
   <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLongTitle">Toyota RAVA4</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
     <span aria-hidden="true">&times;</span>
    </button>
   </div>
   <div class="modal-body bg-gray-100">
<div class="row">

<div class="col-md-6 mb-2">
<img class="w-full" src="image/Toyota RAVA4.jpg" style={{ height:200,}}/>

</div>
<div class="col-md-6 mb-2">
<div class="text-wrapper transition">
<p class="ml-2">The toyota Rav4  is mainly loved for its fuel economy, a seden 4-wheel drive car manufactured by Toyota Motors to perform high duty tasks, yet fuel efficient. manufactured by Japan’s leading auto-mobile company.</p>
</div>
</div>
</div>
<div class="p-2 mx-auto bg-white rounded-xl shadow-md  md:max-w-full">
<div class=" row ">
<h5 class="text-md font-bold">Car Features</h5>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Airbag</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p > FM Radio</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Air Conditioning</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Speed Km</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p > Steering Wheel</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >USB Charging Outlets</p>
</div>
</div>

</div>
<button type="button" class="whitespace-no-wrap inline-flex justify-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-900 hover:bg-blue-700 focus:outline-none  transition ease-in-out duration-150">
 Book Now
</button>
</div>

   </div>
   <div class="modal-footer">
    <button type="button" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
   </div>
  </div>
 </div>
</div> */}

   </div>
</div>
 </div>
 
)
}
)}
 {/* <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/Toyota Land Cruiser Safari.jpg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">Toyota Land Cruiser </h4>
      <p class="card-text">Location</p>
      <div class="flex">
      <div>
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="Tooltippassenger"> <i class="fas fa-users text-black mx-1 prefix "></i></span>
      <br/>
      <span>4</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="Tooltippassenger" toggle={toggle}>
       Passenger
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="Tooltipgear"> <i class="fa fa-arrows-alt text-black mx-1 prefix "></i></span>
      <br/>
      <span>Auto</span>
      <Tooltip placement="bottom" isOpen={tooltipOpen} target="Tooltipgear" toggle={toggle}>
       Gear Shift
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipBaggage"> <i class="fas fa-luggage-cart text-black mx-1 prefix "></i></span>
      <br/>
      <span>1</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipBaggage" toggle={toggle}>
       Baggage
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipDoor"> <i class="fas fa-door-open text-black mx-1 prefix "></i></span>
      <br/>
      <span>6</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipDoor" toggle={toggle}>
      Door
      </Tooltip>
      </div>
      
      </div>
      <p class="card-text text-md my-4"><code class="text-2xl text-yellow-500">$</code> 80 /day</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150" data-toggle="modal" data-target="#exampleModalLong">
      View More
</button>


<div class=" modal fade animated bounceIn" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
 <div class="modal-dialog" role="document">
  <div class="modal-content modal-fullscreen">
   <div class="modal-header">
    <h5 class="modal-title " id="exampleModalLongTitle">Toyota Land Cruiser</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
     <span aria-hidden="true">&times;</span>
    </button>
   </div>
   <div class="modal-body bg-gray-100">
<div class="row">

<div class="col-md-6 mb-2">
<img class="w-full" src="image/Toyota Land Cruiser Safari.jpg" style={{ height:200,}}/>

</div>
<div class="col-md-6 mb-2">
<div class="text-wrapper transition">
<p class="ml-2">The Toyota Land Cruiser is mainly loved for its fuel economy, a seden 4-wheel drive car manufactured by Toyota Motors to perform high duty tasks, yet fuel efficient. manufactured by Japan’s leading auto-mobile company.</p>
</div>
</div>
</div>
<div class="p-2 mx-auto bg-white rounded-xl shadow-md  md:max-w-full">
<div class=" row ">
<h5 class="text-md font-bold">Car Features</h5>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Airbag</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p > FM Radio</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Air Conditioning</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Speed Km</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p > Steering Wheel</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >USB Charging Outlets</p>
</div>
</div>

</div>
<button type="button" class="whitespace-no-wrap inline-flex justify-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-900 hover:bg-blue-700 focus:outline-none  transition ease-in-out duration-150">
 Book Now
</button>
</div>

   </div>
   <div class="modal-footer">
    <button type="button" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
   </div>
  </div>
 </div>
</div>
   </div>
</div>
 </div> */}
 {/* <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/Luxury Toyota V-8.jpg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">Luxury Toyota V-8</h4>
      <p class="card-text">Location</p>
      <div class="flex">
      <div>
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="Tooltippassenger"> <i class="fas fa-users text-black mx-1 prefix "></i></span>
      <br/>
      <span>5</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="Tooltippassenger" toggle={toggle}>
       Passenger
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="Tooltipgear"> <i class="fa fa-arrows-alt text-black mx-1 prefix "></i></span>
      <br/>
      <span>Normal</span>
      <Tooltip placement="bottom" isOpen={tooltipOpen} target="Tooltipgear" toggle={toggle}>
       Gear Shift
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipBaggage"> <i class="fas fa-luggage-cart text-black mx-1 prefix "></i></span>
      <br/>
      <span>1</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipBaggage" toggle={toggle}>
       Baggage
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipDoor"> <i class="fas fa-door-open text-black mx-1 prefix "></i></span>
      <br/>
      <span>4</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipDoor" toggle={toggle}>
      Door
      </Tooltip>
      </div>
      
      </div>
      <p class="card-text text-md my-4"><code class="text-2xl text-yellow-500">$</code> 70 /day</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150" data-toggle="modal" data-target="#exampleModalLong">
      View More
</button>


<div class=" modal fade animated bounceIn" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
 <div class="modal-dialog" role="document">
  <div class="modal-content modal-fullscreen">
   <div class="modal-header">
    <h5 class="modal-title " id="exampleModalLongTitle">Luxury Toyota V-8</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
     <span aria-hidden="true">&times;</span>
    </button>
   </div>
   <div class="modal-body bg-gray-100">
<div class="row">

<div class="col-md-6 mb-2">
<img class="w-full" src="image/Luxury Toyota V-8.jpg" style={{ height:200,}}/>

</div>
<div class="col-md-6 mb-2">
<div class="text-wrapper transition">
<p class="ml-2">The Luxury Toyota V-8 is mainly loved for its fuel economy, a seden 4-wheel drive car manufactured by Toyota Motors to perform high duty tasks, yet fuel efficient. manufactured by Japan’s leading auto-mobile company.</p>
</div>
</div>
</div>
<div class="p-2 mx-auto bg-white rounded-xl shadow-md  md:max-w-full">
<div class=" row ">
<h5 class="text-md font-bold">Car Features</h5>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Airbag</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p > FM Radio</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Air Conditioning</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Speed Km</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p > Steering Wheel</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >USB Charging Outlets</p>
</div>
</div>

</div>
<button type="button" class="whitespace-no-wrap inline-flex justify-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-900 hover:bg-blue-700 focus:outline-none  transition ease-in-out duration-150">
 Book Now
</button>
</div>

   </div>
   <div class="modal-footer">
    <button type="button" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
   </div>
  </div>
 </div>
</div>
   </div>
</div>
 </div> */}
 {/* <div class="col-md-3">
<div class="card mb-3 shadow-md ">
     <img class="card-img-top"
      src="image/VIP vehicle.jpg" style={{ height:200,}} alt=""/>
     <div class="card-body">
      <h4 class="card-title font-bold">VIP Vehicle</h4>
      <p class="card-text">Location</p>
      <div class="flex">
      <div>
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="Tooltippassenger"> <i class="fas fa-users text-black mx-1 prefix "></i></span>
      <br/>
      <span>5</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="Tooltippassenger" toggle={toggle}>
       Passenger
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="Tooltipgear"> <i class="fa fa-arrows-alt text-black mx-1 prefix "></i></span>
      <br/>
      <span>Auto</span>
      <Tooltip placement="bottom" isOpen={tooltipOpen} target="Tooltipgear" toggle={toggle}>
       Gear Shift
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipBaggage"> <i class="fas fa-luggage-cart text-black mx-1 prefix "></i></span>
      <br/>
      <span>1</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipBaggage" toggle={toggle}>
       Baggage
      </Tooltip>
      </div>
      <div class="mx-3">
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipDoor"> <i class="fas fa-door-open text-black mx-1 prefix "></i></span>
      <br/>
      <span>4</span>
      <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipDoor" toggle={toggle}>
      Door
      </Tooltip>
      </div>
      
      </div>
      <p class="card-text text-md my-4"><code class="text-2xl text-yellow-500">$</code> 100 /day</p>
      <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-bold rounded-md text-white bg-green-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-yellow active:bg-blue-700 transition ease-in-out duration-150" data-toggle="modal" data-target="#exampleModalLong">
      View More
</button>


<div class=" modal fade animated bounceIn" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
 <div class="modal-dialog" role="document">
  <div class="modal-content modal-fullscreen">
   <div class="modal-header">
    <h5 class="modal-title " id="exampleModalLongTitle">VIP Vehicle</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
     <span aria-hidden="true">&times;</span>
    </button>
   </div>
   <div class="modal-body bg-gray-100">
<div class="row">

<div class="col-md-6 mb-2">
<img class="w-full" src="image/VIP vehicle.jpg" style={{ height:200,}}/>

</div>
<div class="col-md-6 mb-2">
<div class="text-wrapper transition">
<p class="ml-2">The VIP Vehicle  is mainly loved for its fuel economy, a seden 4-wheel drive car manufactured by Toyota Motors to perform high duty tasks, yet fuel efficient. manufactured by Japan’s leading auto-mobile company.</p>
</div>
</div>
</div>
<div class="p-2 mx-auto bg-white rounded-xl shadow-md  md:max-w-full">
<div class=" row ">
<h5 class="text-md font-bold">Car Features</h5>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Airbag</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p > FM Radio</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Air Conditioning</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >Speed Km</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p > Steering Wheel</p>
</div>
</div>
<div class="col-md-4 mb-2 mb-2">
<div class="list-unstyled flex">
<i class="fas fa-check-circle mx-1 prefix text-blue-700  "></i>
    <p >USB Charging Outlets</p>
</div>
</div>

</div>
<button type="button" class="whitespace-no-wrap inline-flex justify-center justify-center px-6 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-900 hover:bg-blue-700 focus:outline-none  transition ease-in-out duration-150">
 Book Now
</button>
</div>

   </div>
   <div class="modal-footer">
    <button type="button" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
   </div>
  </div>
 </div>
</div>
   </div>
</div>
 </div> */}
 </div>
 </div>
<Footer/>   
</>
)
}
export default CarRental;