const { default: Form } = require("./Form");
const { default: Tip } = require("./Tip");

function LeftSide() {
    return (
        <div className="w-full md:w-8/16">
            <div className="mb-8">
                <p className="text-sm text-cyan-very-dark font-mono font-bold mb-2">Bill</p>
                <Form id="bill" image="icon-dollar.svg"/>
            </div>

            <div className="mb-8">
                <p className="text-sm text-cyan-very-dark font-mono font-bold mb-3">Select Tip %</p>
                <div className="items-center grid grid-cols-2 md:grid-cols-3  gap-x-4 ">
                    
                    <Tip variant="primary" value="5%" />
                    <Tip variant="primary" value="10%" />
                    <Tip variant="primary" value="15%" />
                    <Tip variant="primary" value="25%" />
                    <Tip variant="primary" value="50%" />
                    <input className="text-2xl md:text-lg w-full py-2 rounded-md font-mono font-bold mx-auto bg-gray-200 text-cyan-dark-grayish-1 focus:outline-none focus:ring-2 focus:ring-primary-cyan text-center" type="text" placeholder="Custom" />
                </div>
            </div>
            

            <div className="mb-8">
                <p className="text-sm text-cyan-very-dark font-mono font-bold mb-2">Number of People</p>
                <Form id="numb" image="icon-person.svg"/>
            </div>

        </div>
    )
}

export default LeftSide
