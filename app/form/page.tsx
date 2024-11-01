export default function Forms(){
    return(
        <div>
            <br></br>
            <h1 className="text-4xl font-bold text-center uppercase font-sans">
                enter your details
            </h1>

            <div>
            <form className="mt-20 flex gap-5 justify-center items-center flex-col border">
                <input type="email" className="p-3 rounded-2xl w-2/5 border border-blue-800"
                 placeholder="Enter your Email" />

                <input type="password" className="p-3 rounded-2xl w-2/5 border border-blue-800" 
                placeholder="Enter your Password" />

                <button className=" py-3 px-7 rounded-lg 
                 bg-blue-500 text-white">Place your order <a href = "/form/thankyou/page.tsx"></a></button>
                 <br></br>
            </form>
            </div>
        
        </div>
    )
}