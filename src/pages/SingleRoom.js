import React, { Component, useContext, useState,useEffect } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from'../components/Banner'
import { Link, useLocation } from 'react-router-dom'
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero'
var [mainImg,...defaultImg]=[];
function SingleRoom (){
  const location=useLocation()
  const context = useContext(RoomContext);

  const Arrslug=location.pathname.split("/")
     const {getRoom}=context
   
    const [slug,setSlug]=useState("");
    const [room,setRoom]=useState();
    
    useEffect(() => {

        setSlug(Arrslug[2]);
        
        const room=getRoom(Arrslug[2]);
        [mainImg,...defaultImg] =room.images;
        console.log(defaultImg)
        setRoom(room);
     
      
    }, [])

    return (
     
      <>
        {
          room!==undefined && <div>
           <StyledHero img={mainImg||defaultBcg}>
          <Banner title={`${room.name} room`}>
            <Link to='/rooms' className='btn-primary'>
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className='single-room'>
          <div className='single-room-images'>
          {defaultImg.map((item,index)=>
            <img key={index} src={item} alt={room.name}/> 
          )}
          </div>
            <div className='single-room-info'>
              <article className='desc'>
                <h3>details</h3>
                <p>{room.description}</p>
              </article>
              <article className='info'>
                <h3>info</h3>
                <h6>price : ${room.price}</h6>
                <h6>size : {room.size} SQFT</h6>
                <h6>
                  max capacity : {
                    room.capacity>1 ?`${room.capacity} people` : `${room.capacity} person`
                  }
                </h6>
                <h6>{room.pets ? "pets allowed":"no pets allowed"}</h6>
                <h6>{room.breakfast && "free breakfast included"}</h6>

              </article>
            </div>
        </section>
        <section className='room-extras'>
                  <h6>extras</h6>
                  <ul className='extras'>
                  {room.extras.map((item,index)=>{
                    return <li key={index} >- {item}</li>
                  })}
                  </ul>
        </section>
        </div>
        }
        {
          room===undefined && <div className='error'><h3>Not found room....</h3>
          <Link to='/rooms' className="btn-primary">back to room</Link>
          </div>
        }
      
      </>
    )
  // }
}
export default SingleRoom
