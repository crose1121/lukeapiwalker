import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";

const Details = () => {

    const { category, id } = useParams();

    const [data, setData] = useState({});

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response=>{
                setData(response.data);
            })
            .catch(err=>console.log("Error: ", err));
    },[category, id])



    return (
        <div>
            {
                category==="people"?
                <div>
                    <h1><strong>{data.name}</strong></h1>
                    <br />
                    <h3>Height: {data.height}cm</h3>
                    <h3>Mass: {data.mass}kg</h3>
                    <h3>Hair Color: {data.hair_color}</h3>
                </div>
                :category==="planets"?
                <div>
                    <h1><strong>{data.name}</strong></h1>
                    <br />
                    <h3>Rotational Period: {data.rotational_period}</h3>
                    <h3>Orbital Period: {data.orbital_period}kg</h3>
                    <h3>Climate: {data.climate}</h3>
                </div>
                :category==="starships"?
                <div>
                    <h1><strong>{data.name}</strong></h1>
                    <br />
                    <h3>Model: {data.model}</h3>
                    <h3>Manufacturer: {data.manufacturer}</h3>
                </div>:
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs9GMjnAxAR4z7fWxdLZNXoNiRNrd3zHD_3FcnbKsFCu4R15cOtb69vpyovwRhT7PQfVA&usqp=CAU" alt="" />
            }
        </div>
    );
};

Details.propTypes = {};

export default Details;