"use client"
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
export default function page() {
    const router=useRouter();
    const searchParams=useSearchParams();
    const geturl=()=>{
        router.push(`/posts?search=${value}`)
    }
    const [value,setvalue]=useState<any>();
    const [getvalueurl,setGetvalueurl]=useState('')
    useEffect(()=>{
      const searchValueUrl= searchParams.get('search');
      if(searchValueUrl){
        setGetvalueurl(searchValueUrl)
      }
    },[searchParams])
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const value= event.target.value;

         setvalue(value)
    }
  return (
    <div>
        <h1>bài 1</h1>
        <input onChange={handleChange} className='border-2' type="text" />
        <button onClick={geturl} className='border-2'>Tìm kiếm</button>
        {/*
            1. lấy giá trị người dùng nhập 
            2. tạo sự kiện khi nhấn vào button tìm kiếm
            3. bắn giá trị  người dùng nhập lên URL
            3.1 sử dụng router.push()        
        */}
        <h1>bài 2</h1>
        <div>Search Value: {getvalueurl}</div>
    </div>
  )
}
