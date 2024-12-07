import { useEffect, useState } from "react";
import Card from "./Card";

function Newsapp() {
    const[search,setsearch]=useState("india")
    const[news,setnews]=useState(null)
    const API_KEY="d604885517754cc9b1acbb712d6ef406"
    async function getdata(){
const response=await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
const jsondata= await response.json()
console.log(jsondata.articles)
setnews(jsondata.articles)
    }
    useEffect(()=>{
getdata()
    },[])
   function searchinput(event){
    setsearch(event.target.value)
   }
    function inputhandel(e){
 console.log(e.target.value)
 setsearch(e.target.value)

    }
  return (
    <>
      <nav className="bg-slate-200 h-20 w-full flex justify-between p-3 items-center fixed top-0 z-10 ">
        <div className="logo text-blue-950 text-2xl font-semibold">
          Trendy News
        </div>
        <div className="tags text-xl underline ml-40  ">
          <a className="mr-2">All News</a>
          <a>Trending</a>
        </div>
        <div className="inputdiv ">
          <input
            type="text"
            placeholder="Search.in"
            className="h-10 p-1 mr-2 text-lg "
            value={search}
            onChange={inputhandel}
          />
          <button className="bg-blue-900 p-2 text-white transition-all ease-in active:scale-[1.025] " onClick={getdata}>Search</button>
        </div>
      </nav>
      <div className=" herosection  h-min w-screen mt-[100px]">

      
      <p className="text-center text-2xl text-black font-semibold  mt-3">Stay Updated With TrendyNews</p> 
      <div className="btn flex justify-center  gap-5  mt-3">
        

        <button onClick={searchinput} value="Sports" className="rounded-xl bg-blue-900 text-white p-2 w-28 hover:scale-[1.025] transition-all ease-in">Sports</button>
        <button onClick={searchinput} value="Entertainment" className="rounded-xl bg-blue-900 text-white p-2 w-32 hover:scale-[1.025] transition-all ease-in">Entertainment</button>
        <button onClick={searchinput} value="Politics" className="rounded-xl bg-blue-900 text-white p-2 w-28 hover:scale-[1.025] transition-all ease-in">Politics</button>
        <button onClick={searchinput} value="Health" className="rounded-xl bg-blue-900 text-white p-2 w-28 hover:scale-[1.025] transition-all ease-in">Health</button>
        <button onClick={searchinput} value="Fitness" className="rounded-xl bg-blue-900 text-white p-2 w-28 hover:scale-[1.025] transition-all ease-in">Fitness</button>
      </div>
      <div >
{news? <Card data={news}></Card> :null}
       
      </div>
      </div>
    </>
  );
}
export default Newsapp;
