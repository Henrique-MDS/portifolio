import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <div className="" id="certificates">
      <h2 className="text-center text-7xl pb-5">Certificados e Links</h2>
      <div className="flex flex-col gap-4 p-4 items-center">
        <div className={`${styles.certificates} flex items-center gap-4 bg-teal-500 cursor-pointer shadow-lg max-w-xl rounded-md p-1`}>
          <Image 
            src={"/dev-web-icon.png"}
            alt=""
            width={48}
            height={48}
          />
          <Link href={"https://www.freecodecamp.org/certification/HenriqueMiguelDaSilva/responsive-web-design"} rel="external" target="blank">
            Certificado de Desenvolvimento Web Responsivo - FreeCodeCamp
          </Link>
        </div>
        <div className={`${styles.certificates} flex items-center gap-4 bg-yellow-500 cursor-pointer shadow-lg max-w-xl rounded-md p-1`}>
          <Image 
              src={"/algorithm-icon.png"}
              alt=""
              width={48}
              height={48}
            />
            <Link href={"https://www.freecodecamp.org/certification/HenriqueMiguelDaSilva/javascript-algorithms-and-data-structures-v8"} rel="external" target="blank">
              Certificado Algoritmo e Estrutura de Dados JavaScript - FreeCodeCamp
            </Link>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center pt-8">
        <Link href={"https://github.com/Henrique-MDS"} rel="external" target="blank">
          <Image 
            src={"/github-icon.png"}
            alt=""
            width={35}
            height={35}
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/henrique-miguel-717383349/"} rel="external" target="blank">
        <Image 
            src={"/linkedin-icon.png"}
            alt=""
            width={35}
            height={35}
          />
        </Link>
      </div>
    </div>
  )
}
