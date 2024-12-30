import Link from "next/link";

export default function Navbar() {
  return (
    <div className="py-4 px-4 sm:px-0 mx-auto flex justify-between max-w-screen-xl">
        <div className="sm:px-10">
            <h1 className="font-semibold text-3xl">KARES</h1>
        </div>
        <div className="flex items-center sm:px-10 gap-10">
            <ul className="flex gap-8">
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
            <div className="p-1 relative z-20 rounded-[7px] group">
                <Link href='/chat'>Start Chatting</Link>
                <div className="absolute inset-x-0 bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-[1px] w-1/2 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-[1px] w-1/2 mx-auto blur-sm bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>
        </div>
    </div>
  )
}
