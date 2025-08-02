import Link from 'next/link'
import Image from 'next/image'

export default function Topbar() {
  return (
    <div className="border-black border-b h-[140px] flex items-center justify-between px-5">
        <Image 
            src="https://bakagott.se/wp-content/uploads/2023/04/cropped-cropped-Original-size-BAKA-GOTT-1-1-207x118.png"
            width={207}
            height={118}
            alt="Bakagoott.se - Svensk Pizzabotten"
        />

        <ul className="flex items-center gap-6 h-full">
            <li className="h-full">
                <Link 
                    href="/" 
                    className="h-full flex items-center px-6 hover:bg-[#134978] hover:text-white transition-colors"
                    shallow={false}>
                    Etikett
                </Link>
            </li>
            <li className="h-full">
                <Link 
                    href="/delivery-note"
                    className="h-full flex items-center px-6 hover:bg-[#134978] hover:text-white transition-colors"

                    shallow={false}>
                    Följesedel
                </Link>
            </li>
        </ul>
    </div>
  )
}