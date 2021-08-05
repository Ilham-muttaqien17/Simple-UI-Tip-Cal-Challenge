import classNames from "classnames";

function Tip({value, variant}) {
    const variants = {
        "primary": "bg-cyan-very-dark text-white focus:bg-primary-cyan focus:text-cyan-very-dark",
        "custom": "bg-gray-200 text-cyan-dark-grayish-1"
    }

    const pickedVariant = variants[variant];

    return (
        <div className="my-1">
            <button className={classNames("text-2xl md:text-lg w-full py-2 rounded-md font-mono font-bold mx-auto", pickedVariant)}>{value}</button>
        </div>
    )
}

export default Tip
