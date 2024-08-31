export default function Item({ item, handleBuy, bought}) {
  return (
    <>
      <div>
        <li className={`font-mono text-lg border-2 border-white p-3 m-3 rounded-lg ${bought && 'bg-blue-200'}`}>
          {item}
          <button
            className="bg-orange-300 float-right p-1 text-black border-none rounded-lg w-12"
            onClick={handleBuy}
          >
            Add
          </button>
        </li>
      </div>
    </>
  );
}
