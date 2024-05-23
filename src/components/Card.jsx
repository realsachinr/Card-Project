import React from "react";
import { useState } from "react";
import "./Card.css"
function Card({ data }) {

  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);

  }
  return (
    <div>
      <div className={`flip-card w-full  ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner cursor-pointer flex justify-center items-center">
        <div className="flip-card-front">
        <div className="w-[30rem] drop-shadow-2xl shadow-black shadow-2xl  rounded-lg bg-[url('https://i.pinimg.com/originals/fd/18/56/fd185654a65bb5f3d656a8cb9bc074d4.jpg')] bg-cover h-64">
        {data && (
          <div>
            <div className="px-7 flex h-[14rem] items-center flex-row  gap-8">
              <div className="w-28 ">
                <img
                  className="w-28 rounded-lg "
                  src={data.picture.large}
                  alt=""
                />
              </div>
              <div className="lef">
                <div className="flex text-[28px] font-semibold gap-1">
                  <span>{`${data.name.title} ${data.name.first} ${data.name.last}`}</span>
                </div>
                <p>Gender : {data.gender}</p>
                <p>Age : {data.dob.age}</p>
                <p>Phone : {data.cell}</p>
              </div>
            </div>
            <div className="w-full shadow-lg flex px-5  items-center justify-between rounded-lg  h-12 bg-[#029CE4]">
              <div className="w-6 py-2  animate-bounce leading-[10px]">
                <div className="flex">
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                </div>
                <div className="flex">
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                </div>
                <div className="flex">
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                </div>
              </div>
              <p className="text-white ">Join the Team</p>
              <div className="w-6 py-2  animate-bounce leading-[10px]">
                <div className="flex">
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                </div>
                <div className="flex">
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                </div>
                <div className="flex">
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
        </div>
        <div className="flip-card-back">
        <div className="w-[30rem] drop-shadow-2xl shadow-black shadow-2xl  rounded-lg bg-[url('https://i.pinimg.com/originals/fd/18/56/fd185654a65bb5f3d656a8cb9bc074d4.jpg')] bg-cover h-64">
        {data && (
          <div>
            <div className="px-5 w-full flex h-[14rem] items-center flex-row  gap-8">
              
              <div >
                <div className="flex w-[20rem] font-semibold gap-1">
                  <span  className="text-[17px]">{`Address: ${data.location.street.number}, ${data.location.street.name}, ${data.location.city}, ${data.location.state}, ${data.location.postcode}`}</span>
                </div>
                <p>DOB : {data.dob.date}</p>
                <p>Phone : {data.phone}</p>
                <p>Registered : {data.registered.date}</p>
              </div>
            </div>
            <div className="w-full shadow-lg flex px-5  items-center justify-between rounded-lg  h-12 bg-[#029CE4]">
              <div className="w-6 py-2  animate-bounce leading-[10px]">
                <div className="flex">
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                </div>
                <div className="flex">
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                </div>
                <div className="flex">
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                </div>
              </div>
              <p className="text-white ">{data.email}</p>
              <div className="w-6 py-2  animate-bounce leading-[10px]">
                <div className="flex">
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                </div>
                <div className="flex">
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                </div>
                <div className="flex">
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                  <p>*</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
        </div>
      </div>
    </div>


      
      
    </div>
  );
}

export default Card
