import Link from 'next/link'
 
export default function Topbar() {
  return (
    <div className="border-black border-b h-[40px] flex items-center justify-between px-5">
        <div>Logo</div>

        <ul className="flex items-center gap-3">
            <li>
                <Link href="/" shallow={false}>
                    Hem
                </Link>
                <Link href="/label" shallow={false}>
                    Etiketter
                </Link>

            </li>
        </ul>
    </div>
  )
}