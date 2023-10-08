"use client";
import data from './data.json';

import { useState, useEffect } from "react";
import { FixedSizeList as List } from "react-window";

const Page = () => {
    console.log("im right here")
    const [hotelList, setHotelList] = useState([]);

    const fetchPosts = async () => {
        const body = {"searchParams":{"location":{"id":"118361","name":"London","fullName":"London And Vicinity, England, United Kingdom","type":"MultiCity","state":"Greater London","country":"GB","coordinates":{"lat":51.507538,"long":-0.127804},"referenceScore":100000,"isTermMatch":true},"startDate":"2023-10-20T00:00:00-07:00","endDate":"2023-10-22T00:00:00-07:00","adults":2,"children":0,"occupancies":[{"numOfAdults":2,"childAges":[]}],"isType":true,"boundaries":[]},"currency":"USD","ipAddress":"","correlationId":"chkIDb0b08a09-0ac4-46f3-808e-6f1ef9952181"}

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };
        const response = await fetch('https://checkins-hotel-api.vercel.app/api/v1/hotels/content/hotelcontent/getHotelContent', requestOptions)
        const data = await response.json();
        setHotelList(data["hotels"]);
        console.log(data["hotels"])
        
    };


    const Row = ({ index, style }) => {

        return (
        <div style={style}>
            {hotelList[index].name}
            <div className="hotel-list"><img src={hotelList[index].heroImage} /></div>
        </div>
      );
    }

    useEffect(() => {
        fetchPosts();
     }, []); 



    return (
        <section>
            {Row && (<List
                height={1500}
                itemCount={hotelList.length}
                width={1000}
                itemSize={300}
            >
                {Row}
            </List>)}
        </section>

    )
}

export default Page