import React from 'react';
import HotelbookHeader from './HotelbookHeader';
import './Hotelbook.css';

const Hotelbook = () => {
    const handleHotelBook = ()=>{
        document.getElementById("hotel-book").innerText = `Hotel Booking Succesfull!
                                                            Welcome to our hotel.`
    }
    const card = JSON.parse(localStorage.getItem('card'));
    console.log(card);
    return (
        <div >
            <HotelbookHeader></HotelbookHeader>
            <div className="contain">
                <p>Stay in {card.name}</p><br/>
                <div className="row ">
                    <div className="col-md-4">
                        <div onClick={handleHotelBook} className="hotel-card safe-stay">
                            <div className="hotel-detail">
                                <h6>Light bright stylish apt</h6>
                                <p>4 guest 2 bedroom 2 baths</p>
                                <small>Wifi air condition</small>
                                <small>Cancellation fexibility available</small>
                                <p>4.9(20) $34/per night</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div onClick={handleHotelBook} className="hotel-card panorama">
                            <div className="hotel-detail">
                                <h6>Apartment in lost panaroma</h6>
                                <p>4 guest 2 bedroom 2 baths</p>
                                <small>Wifi air condition</small>
                                <small>Cancellation fexibility available</small>
                                <p>4.8(20) $52/per night</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div onClick={handleHotelBook} className="hotel-card lounge">
                            <div className="hotel-detail">
                                <h6>AR lounge & Pool</h6>
                                <p>4 guest 2 bedroom 2 baths</p>
                                <small>Wifi air condition</small>
                                <small>Cancellation fexibility available</small>
                                <p>4.9(27) $46/per night</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
            </div>

            <div style={{textAlign:"center"}}>
                <h3><span id ="hotel-book"></span></h3>
            </div>
        </div>
    );
};

export default Hotelbook;