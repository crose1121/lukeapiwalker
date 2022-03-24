import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const Form = () => {

    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("people");
    const [id, setId] = useState(0);

    const history = useHistory();
    
    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/${selectedCategory}/${id}`);
    }

    useEffect(()=>{

        axios.get("https://swapi.dev/api/")
            .then(response=>{
                let catList = Object.keys(response.data);
                setCategoryList(catList);
            })
            .catch(err=>console.log("Error: ",err))
    },[])



    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="">Search For: </label>
                    <select id="" onChange={(e)=>setSelectedCategory(e.target.value)}>
                        {
                            categoryList.map((cat, i)=>{
                                return (
                                    <option key={i} value={cat}>{cat}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div>
                    <label htmlFor="">ID: </label>
                    <input type="number" onChange={(e)=>setId(e.target.value)}/>
                </div>
                <input type="submit" value="Search"/>
            </form>
        </div>
    );
};


export default Form;