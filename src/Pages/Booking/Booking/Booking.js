import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const [ service , setService ] = useState({});
    const { serviceId } = useParams();

    useEffect(() => {
        const url = `https://calm-harbor-68998.herokuapp.com/services/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setService(data);
        })
    },[])

    return (
        <div>
            <h2>Details of: {service.name}</h2>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;