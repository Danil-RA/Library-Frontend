import React, {useEffect,useState} from 'react'
import axios from 'axios'

function Expired() {

    const [Expiry,setExpiryTime] = useState()

    useEffect(() => {
        axios.get('http://localhost:3001/expire')
            .then((response) => {
                setExpiryTime(response.data);
            })
            .catch((error) => {
                console.error('Error fetching books:', error);
            });
    }, []);


    return (
    <div>
        {Expiry.map((ex) => (
              ex.Expire && (
              <tr key={ex._id}>
                <td >{ex.title}</td>
                <td >{ex.name}</td>
              </tr>
              )
            ))}
    </div>
  )
}

export default Expired