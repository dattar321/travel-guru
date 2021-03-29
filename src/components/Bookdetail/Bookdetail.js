import React from 'react';
import { useHistory } from 'react-router';
import './Bookdetail.css'

const Bookdetail = () => {
    let history = useHistory()
    const handleHotelBook = ()=>{
        history.push("/hotelbook");
    }
    
    const scard = localStorage.getItem('card');
    const card = JSON.parse(scard);
    return (
        <div class="container"style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <div className="row  d-flex align-items-center ">
                <div className="col-md-4">
                    {<h1>{card.name}</h1>}
                    {<p>{card.detail}</p>}
                    
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-5">
                        <div className="boxx">
                            <p>Origin</p>
                            <input className="input-box" type="text" placeholder="Dhaka" required/>
                            <p>Destination</p>
                            <input className="input-box" type="text" value={card.name}/>
                            <div style={{display:"flex"}}>
                                <div >
                                    <h6>From</h6>
                                    <input className = "input-date" type="date" name="" required/>
                                </div>
                                <div >
                                    <h6>To</h6>
                                    <input className = "input-date" type="date" name="" required/>
                                </div>
                            </div>
                            <button onClick={handleHotelBook} className="btn-book" >Start Booking</button>
                        </div>
                   
                </div>
            </div>
        </div>
        
    );
};

export default Bookdetail;