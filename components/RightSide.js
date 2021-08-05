function RightSide() {
    return (
        <div className="bg-cyan-very-dark p-6 pt-8 w-full md:w-8/16 rounded-xl">
            <div className="flex items-center mb-10">
                <div>
                    <p className="text-white text-md font-mono ">Tip Amount</p>
                    <p className="text-xs font-mono text-cyan-dark-grayish-1">/ person</p>
                </div>
                <h2 className="text-3xl font-mono font-bold text-primary-cyan ml-auto">$4.27</h2>
            </div>
            <div className="flex items-center mb-10">
                <div>
                    <p className="text-white text-md font-mono ">Total</p>
                    <p className="text-xs font-mono text-cyan-dark-grayish-1">/ person</p>
                </div>
                <h2 className="text-3xl font-mono font-bold text-primary-cyan ml-auto">$32.79</h2>
            </div>
            <button className="bg-primary-cyan text-cyan-very-dark font-mono font-bold tracking-widest w-full py-2 rounded-lg active:bg-cyan-light-grayish-1 md:mt-24">RESET</button>
        </div>
    )
}

export default RightSide
