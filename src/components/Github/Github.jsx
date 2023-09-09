import React,{useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data,setData] = useState();
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Abdulllah-Rizwan')
    //     .then(res => res.json()
    //     .then(data => {
    //         setData(data);
    //         console.log(data);
    //     })
    //     )
    // },[])

    const data = useLoaderData();
    return (
    <div className='bg-gray-600 text-center m-4 text-white p-4 text-3xl'>
      <h1>Github followers:{data.followers}</h1>
      <img src={data.avatar_url} alth='git photo' width={300}/>
    </div>
  )
}

export default Github

export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/Abdulllah-Rizwan')
    return response.json();
}
