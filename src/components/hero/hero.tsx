import Image from "next/image";
import styles from "./hero.module.css"

export default function Hero() {
  return (
    <div className={`${styles.hero} flex gap-12 justify-center p-12`} id="hero">
      <div>
        <Image 
            src={"./portifolio-photo.png"}
            alt=""
            width={1024}
            height={760}
            quality={80}
        />
      </div>
      <div className="text-gray-300 flex flex-col gap-4">
        <h2 className="text-7xl text-center">Sobre</h2>
        <p>
        Olá, me chamo Henrique e sou um Desenvolvedor Web, uso JavaScript, React, HTML, CSS e Python. Gosto de criar aplicativos legais e fáceis de usar, sempre tentando fazer tudo certinho. 
        </p>
        <div className="flex items-center gap-2 flex-wrap">
            <span className={`bg-orange-500 p-2 rounded-full text-white cursor-pointer ${styles.tags}`}>HTML</span>
            <span className={`bg-cyan-600 p-2 rounded-full text-white cursor-pointer ${styles.tags}`}>CSS</span>
            <span className={`bg-amber-400 p-2 rounded-full text-white cursor-pointer ${styles.tags}`}>JavaScript</span>
            <span className={`bg-cyan-600 p-2 rounded-full text-white cursor-pointer ${styles.tags}`}>TypeScript</span>
            <span className={`bg-slate-800 p-2 rounded-full text-white cursor-pointer ${styles.tags}`}>Python</span>
            <span className={`bg-cyan-600 p-2 rounded-full text-white cursor-pointer ${styles.tags}`}>React</span>
            <span className={`bg-black p-2 rounded-full text-white cursor-pointer ${styles.tags}`}>NextJS</span>
        </div>
        <p>
        Me interesso por criar o front-end, fazendo coisas que funcionam. Vivo aprendendo e melhorando o que sei para fazer projetos bem bacanas.
        </p>
      </div>
    </div>
  )
}
