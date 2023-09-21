import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid"

const Contact = () => {
    return (
      <section className='section' id="contact">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="w-auto my-24 lg:mb-16 text-center items-center justify-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Kontakt</h2>
                <p className="text-gray-500 text-[30px] dark:text-gray-400">Jak się z nami skontakować?</p>
            </div>
        </div>
        <div className=" grid space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 text-center">
            <div>
              <div className="mb-4 w-10 h-10 bg-primary-100 lg:h-12 lg:w-12 mx-auto block m-auto">
                  <MapPinIcon className="h-10 w-10"/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Lokalizacja naszej firmy:</h3>
              <p className="text-gray-500 dark:text-gray-400">ul. 5 Stycznia 5A
              <br />64-200 Wolsztyn</p>
          </div>
          <div>
              <div className="mb-4 w-10 h-10 bg-primary-100 lg:h-12 lg:w-12 mx-auto block m-auto">
                 <DevicePhoneMobileIcon className="h-10 w-10"/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Telefon kontaktowy:</h3>
              <p className="text-gray-500 dark:text-gray-400">tel. 68 384 07 90
             <br /> Damian Frybel tel. 508 366 901
             <br /> Patryk Dziurla  tel. 502 561 521
                </p>
          </div>
          <div>
              <div className="mb-4 w-10 h-10 bg-primary-100 lg:h-12 lg:w-12 mx-auto block m-auto">
                 <EnvelopeIcon className="h-10 w-10"/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Email kontaktowy:</h3>
              <p className="text-gray-500 dark:text-gray-400">wolsoft@wolsoft.pl</p>
          </div>
        </div>
      </section>
    )
  }
  
  export default Contact