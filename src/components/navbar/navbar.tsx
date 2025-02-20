import Link from "next/link"
import styles from "./navbar.module.css"

export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
        <div className="flex gap-4">
            <Link href={"#hero"} className={`${styles.links} tracking-widest transition`}>Bio</Link>
            <Link href={"#projects" } className={`${styles.links} tracking-widest transition`}>Projetos</Link>
            <Link href={"#certificates"} className={`${styles.links} tracking-widest transition`}>Certificados</Link>
        </div>
        <div>
            
        </div>
    </div>
  )
}
