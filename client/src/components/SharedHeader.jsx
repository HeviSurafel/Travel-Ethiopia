
function SharedHeader({pathname, header,paragraph,color}) {
  return (
    <div className={`flex flex-col  gap-6 w-[70%] mx-auto  text-white`}
    style={{
      backgroundColor:color,
    }}
    >
          <div className=" border border-gray-500  pl-[50px] py-[30px]">
            <h3 className=" text-[25px] font-serif capitalize py-3">
              Home{pathname}
            </h3>
            <h1 className="text-[35px] font-semibold pb-3">{header}</h1>
            <p className="text-[18px] py-2 leading-10">
            {paragraph}
            </p>
          </div>
        </div>
  )
}

export default SharedHeader
