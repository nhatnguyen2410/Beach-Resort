import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
export default class Services extends Component {
state={
    services:[
        {
            icon:<FaCocktail/>,
            title:"free cocktails",
            info:"The drinks that you can use for the the meal and with your friend"
        },
        {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info:"The drinks that you can use for the the meal and with your friend"
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free shuttle",
            info:"The drinks that you can use for the the meal and with your friend"
        },
        {
            icon:<FaBeer/>,
            title:"Strongest Beer",
            info:"The drinks that you can use for the the meal and with your friend"
        }
    ]
}


  render() {
    return (
      <section className='services'>
       <Title title='services'/>
       <div/>
       <div className='services-center'>
        {this.state.services.map((item,index)=>{
            return <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>

            </article>
        })}
       </div>
      </section>
    )
  }
}
