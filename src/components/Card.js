// components/Card.js
import Image from "next/image";

export default function Card({ imgSrc, title, description, link, gradient }) {
  return (
    <div className="relative group h-full">
      <div
        className={`absolute -inset-1 rounded-xl blur-sm opacity-0 group-hover:opacity-100 animate-spin-slow transition duration-500 ${gradient}`}
      ></div>
      <div className="relative z-10 min-h-[500px] h-full flex flex-col justify-between bg-white p-6 rounded-xl shadow-lg hover:shadow-md transition-shadow duration-300">
        <div>
          <Image
            src={imgSrc}
            width={400}
            height={250}
            alt={title}
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
          <p className="text-base text-gray-700 mb-4">{description}</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-800"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
