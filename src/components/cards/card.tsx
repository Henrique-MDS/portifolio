import Link from "next/link";
import styles from "./card.module.css";

export default function Card({ title, description, className, link }: { title: string; description: string; className: string; link:string }) {
  return (
    <Link href={`${link}`} rel="external" target="_blank">
      <div className={`bg-slate-600 ${styles.cards} shadow-lg cursor-pointer`}>
        <div className={`${styles.bg} ${styles[className]}`}></div>
        <div className="p-4 text-gray-300">
          <div className="flex gap-2 flex-wrap">
            <span className={`bg-orange-500 p-2 rounded-full text-white cursor-pointer ${styles.tags}`}>
              HTML
            </span>
            <span className={`bg-cyan-600 p-2 rounded-full text-white cursor-pointer ${styles.tags}`}>
              CSS
            </span>
            <span className={`bg-amber-400 p-2 rounded-full text-white cursor-pointer ${styles.tags}`}>
              JavaScript
            </span>
          </div>
          <h3 className="text-xl font-bold text-center">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}
