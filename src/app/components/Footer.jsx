import Link from 'next/link';
import Image from 'next/image';
import logo from '../components/assets/logo.png';

const Footer = () => {
    return (
        <footer className="p-4 bg-[#1c1c1c]">
  <div className="mx-auto max-w-screen-xl text-center">
      <Link href={"#"} className='flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white'><Image src={logo} alt="logo" height={150} width={150}/></Link>
      <p className="my-6 text-gray-500 dark:text-gray-400">Profesjonalne usługi informatyczne na terenie Wolsztyna i okolic.</p>
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">Strona główna</a>
          </li>
          <li>
              <a href="#offer" className="mr-4 hover:underline md:mr-6">Oferta</a>
          </li>
          <li>
              <a href="#contact" className="mr-4 hover:underline md:mr-6 ">Kontakt</a>
          </li>
      </ul>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#home" className="hover:underline">Wolsoft</a>. Wykonanie: Nikodem Dziurla.</span>
  </div>
</footer>
    )
}

export default Footer