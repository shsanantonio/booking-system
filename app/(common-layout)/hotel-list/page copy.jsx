
const HotelList = () => {
    var hotelArr = []


    const fetchPosts = async () => {
    const body = {"searchParams":{"location":{"id":"118361","name":"London","fullName":"London And Vicinity, England, United Kingdom","type":"MultiCity","state":"Greater London","country":"GB","coordinates":{"lat":51.507538,"long":-0.127804},"referenceScore":100000,"isTermMatch":true},"startDate":"2023-10-20T00:00:00-07:00","endDate":"2023-10-22T00:00:00-07:00","adults":2,"children":0,"occupancies":[{"numOfAdults":2,"childAges":[]}],"isType":true,"boundaries":[]},"currency":"USD","ipAddress":"","correlationId":"chkIDb0b08a09-0ac4-46f3-808e-6f1ef9952181"}

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }
    
        const response = await fetch('https://checkins-hotel-api.vercel.app/api/v1/hotels/content/hotelcontent/getHotelContent', requestOptions)
        // console.log('response', response)
        const data = await response.json();
        hotelArr = data["hotels"]
    };
    console.log("HOTELS", hotelArr["hotels"])
    
    fetchPosts();
  
  // hotelArr.forEach((hotel) => (
  //     console.log(hotel[index].name)
  // ))


  return(
    <div>hello
      <ul>
      </ul>
    </div>
  )
}

const Page = () => {



  return (
    <div>
        <HotelList />
    </div>
  )
}

export default Page