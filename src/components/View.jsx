import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [data,changedata]=useState([])
    const fetchdata = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/albums").then(
            (response)=>{
                changedata(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchdata()},[])
  return (
    <div>
        <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">USER ID</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">TITLE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value,i) =>
                                        {
                                            return <tr>
                                            <th scope="row">{value.uesrId}</th>
                                            <td>{value.id}</td>
                                            <td>{value.title}</td>
                                            
                                        </tr>
                                        }
                                )

                                }
                           
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default View