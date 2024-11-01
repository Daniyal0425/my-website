import Link from "next/link"
export default function Footer () {
    return (
        <div>
        <ul className = "flex gap-10 bg-blue-500 h-10 w-full p-2">
        <li> <Link href="/ contact-us"> Contact us </Link> </li>
        <li> <Link href="/ contact-us"> Social Media Link </Link> </li>
        </ul>
        </div>
    )
}