function Form({image, id}) {
    return (
        <>
        <label className="relative flex items-center bg-gray-100 p-2 px-5 space-x-2 cursor-pointer active:ring-2 active:ring-primary-cyan rounded-md">
            <img className="h-4" src={image} alt="" />
            <input id={id} className=" outline-none rounded-lg w-full bg-gray-100 text-cyan-very-dark text-2xl text-right font-mono font-bold" type="text" />

        </label>
      </>
    )
}

export default Form
