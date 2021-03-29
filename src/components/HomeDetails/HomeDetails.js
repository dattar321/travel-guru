import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './HomeDetail.css'


const HomeDetails = () => {
    let history = useHistory();
    let card = {
        id:1,
        name:"Sundarban",
        detail:`The Sundarbans is of universal importance for globally endangered species including the Royal Bengal Tiger`
    };
    const handleBook =(d)=>{
        if(d==='sundarban'){
            const cardTemp={
                id:1,
                name:"Sundarban",
                detail:`The Sundarbans is of universal importance for globally endangered species including the Royal Bengal Tiger`
            }
            card =cardTemp;
        }else if(d==='sreemangal'){
            const cardTemp={
                id:2,
                name:"Sreemangal",
                detail:`Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden`
            }
            card = cardTemp;
        }else{
            const cardTemp={
                id:3,
                name:"Cox-Bazar",
                detail:`Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront Sea Beach.`
            }
            card = cardTemp;
        }
        addCardDetail();
    }
    const addCardDetail =()=>{
        document.getElementById("cartDetails").innerHTML=`
        <h1>${card.name} </h1>
        <p>${card.detail}</p>
        `
    }
    
    const handleBookingOrder =()=>{
        localStorage.setItem('card',JSON.stringify(card));
        history.push("/startbook");
    }
    
    return (
        <div class="container" style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
        <div className="row " >
            <div  className="col-md-4">
                <div id ='cartDetails'>
                    <h1>{card.name} </h1>
                    <p>{card.detail}</p>
                </div>
                <button onClick={handleBookingOrder} className="bttn">Booking</button>   
            </div>
            <div className="col-md-8">
                <div className="row ">
                    <div onClick={()=>handleBook('cox-bazar')}  className="col-md-4">
                        <div class="card cox-bazar" >
                                <div class="card-body d-flex align-items-end">
                                    <h3>Cox-Bazar</h3>
                                </div>
                        </div>
                    </div>
                    <div onClick={()=>handleBook('sreemangal')}  className="col-md-4 ">
                        <div class="card sreemangal" >
                            <div class="card-body d-flex align-items-end">
                                <h3>Sreemangal</h3>
                            </div>
                        </div>
                    </div>
                       <div onClick={()=>handleBook('sundarban')} className="col-md-4" >
                        <div class="card sundarban" >
                            <div class="card-body d-flex align-items-end">
                                <h3>Sundarban</h3>
                            </div>
                        </div>
                            
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HomeDetails;