"use client";
import data from './data.json';

import { useState, useEffect } from "react";
import { FixedSizeList as List } from "react-window";

const Page = () => {
    const [hotelList, setHotelList] = useState([]);

    const [hotel, setHotel] = useState({
        fullName: "The Beverly Hills Hotel, Beverly Hills, California, US",
        startDate: "2023-10-25T00:00:00-07:00",
        endDate: "2023-10-27T00:00:00-07:00",
        adults: 2,
        children: 0,
        currency: "USD"
    });
    

    const fetchPosts = async () => {
        // const body = {"searchParams":{"location":{"id":"118361","name":"London","fullName":"London And Vicinity, England, United Kingdom","type":"MultiCity","state":"Greater London","country":"GB","coordinates":{"lat":51.507538,"long":-0.127804},"referenceScore":100000,"isTermMatch":true},"startDate":"2023-10-20T00:00:00-07:00","endDate":"2023-10-22T00:00:00-07:00","adults":2,"children":0,"occupancies":[{"numOfAdults":2,"childAges":[]}],"isType":true,"boundaries":[]},"currency":"USD","ipAddress":"","correlationId":"chkIDb0b08a09-0ac4-46f3-808e-6f1ef9952181"}

        const body = {
            "searchParams": {
              "location": {
                "id": "1738587",
                "name": "The Beverly Hills Hotel",
                "fullName": hotel.fullName,
                "type": "Hotel",
                "city": "Beverly Hills",
                "state": "California",
                "country": "US",
                "coordinates": {
                  "lat": 34.081535,
                  "long": -118.41385
                },
                "referenceId": "39600805",
                "referenceScore": 100000,
                "isTermMatch": true
              },
              "startDate": hotel.startDate,
              "endDate": hotel.endDate,
              "adults": hotel.adults,
              "children": hotel.children,
              "occupancies": [
                {
                  "numOfAdults": 2,
                  "childAges": []
                }
              ],
              "isType": null
            },
            "currency": hotel.currency,
            "ipAddress": "",
            "correlationId": "chkID07a72fa3-7354-49e5-b81e-1ee4585c94fd"
          }

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