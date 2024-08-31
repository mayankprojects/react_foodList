function Error({items})
{
    return (
        <>
        {items.length === 0 && <h3 className="text-center text-xl">Please Enter the Items</h3>}
        </>
    );
}

export default Error;