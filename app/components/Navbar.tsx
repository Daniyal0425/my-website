
import Link from "next/link"
export default function Navbar () {
    return ( 
        <div>
        <ul className ="flex gap-20 bg-blue-800 text-white h-20 w-full p-8">
        <li> <Link href = "/"> Home </Link></li>
        <li> <Link href="/used-cars"> Used Car </Link> </li>
        <li> <Link href="/new-cars"> New Cars </Link> </li>
        <li> <Link href="/bikes"> Bikes </Link> </li>
        <li> <Link href="/auto-store"> Auto Store </Link> </li>
        <li> <Link href="/form"> Form </Link></li>
        <li> <Link href="/contact-us"> Contact us </Link></li>
        <button></button>
       </ul> 
       <div className ="card">
        <img src="/app/images/bva.jpeg"></img>
       </div>
        {/* <img src="images/bva.jpg" alt = "Loading ..." width = "500" height = "500"> */}
        <img src="/app/images/bva.jpeg"></img>
        </div>
    )
}