function Card(prop) {
  console.log(prop);
  const readmore =(url)=>{
    window.open(url)
  }
  return (
    <>
      <div className="flex flex-wrap gap-4 ml-24  mt-3 ">
        {prop.data.map((elem, index) => {
          return (
            <div
              key={index}
              className="h-[350px] w-64 bg-slate-50 text-black  flex-wrap mr-4 p-1 hover:scale-[1.025] transition all ease-in  rounded shadow-2xl  "
            >
              <img
                src={elem.urlToImage}
                className="h-36 w-64 hover:scale-[1.025] overflow-hidden rounded "
              />
              <a className=" text-sm font-semibold mt-1 leading-0 hover:underline hover:text-blue-500 hover:italic" onClick={()=>readmore(elem.url)} >
                {elem.title}
              </a>
              <p className="p-1 text-sm w-[95%]  line-clamp-3">
                {elem.description}
              </p>
              <br></br>
              <button
                className="bg-blue-900 text-white  ml-1 h-7 w-20 text-sm  active:scale-95 "
                onClick={()=>readmore(elem.url)}
              >
                Read More
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Card;
