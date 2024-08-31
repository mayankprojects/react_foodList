
export default function Foodinput({onkeydown}) {
    
  return (
    <>
      <input type="text" className="mx-auto block m-3 p-2 w-3/4 focus:outline-none border-2 border-black rounded-lg" placeholder="Enter the food name" onKeyDown={onkeydown}/>
    </>
  )
}
