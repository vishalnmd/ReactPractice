
function Temp(){
    return (
        <>
            <div className="flex items-center justify-center w-[24rem] bg-gray-200 rounded-3xl">
                <div className="w-full max-w-md p-6 bg-gray-200 rounded-xl shadow-lg">
                    <label className="block text-gray-500 text-lg font-medium mb-4 text-center">
                    Your Car Registration Number
                    </label>
                    

                    <input 
                    type="text" 
                    placeholder="MH01AB1234" 
                    className="w-full p-4 text-gray-500 bg-gray-200 rounded-full shadow-inner outline-none text-center 
                            shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),_inset_-5px_-5px_10px_rgba(255,255,255,0.5)]"
                    />
                </div>
            </div>
        </>
    )
}

export default Temp;