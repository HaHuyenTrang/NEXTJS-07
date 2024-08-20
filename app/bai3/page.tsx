"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function page() {
    const router=useRouter();
    const searchParams=useSearchParams();
    const [getvalueurl,setGetvalueurl]=useState('')
    useEffect(()=>{
      const searchValueUrl= searchParams.get('search');
      if(searchValueUrl){
        setGetvalueurl(searchValueUrl)
      }
    },[searchParams])
    const geturl=()=>{
        router.push(`/bai3?name=${value}`)
    }
    const [value,setvalue]=useState<any>();
    
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const value= event.target.value;

         setvalue(value)
    }
  return (
    <div>
        <input onChange={handleChange} className='border-2 border-black ' type="text" placeholder='tìm kiếm theo tên'/>
        <br />
        <br />
        <input className='border-2  border-black' type="text" placeholder='tìm kiếm theo danh mục' />
        <br />
        <button onClick={geturl} className='border border-black'>Tìm kiếm</button>
        <div>Tên sản phẩm: {getvalueurl}</div>
    </div>
  )
}
