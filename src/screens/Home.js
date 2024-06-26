import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export default function Home() {
    const [foodCat,setFoodCat]=useState([]);
    const [foodIte,setFoodIte]=useState([]);


    return (
        <>
            <div>
                <div><Navbar /></div>
                <div><Carousel/></div>
                <div className='m-3'>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div><Footer/></div>
            </div>
        </>
    )
}
