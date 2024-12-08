import Head from 'next/head';
import Image from 'next/image';

export default function Studio() {
  return (
    <div className="max-w-[1440px] h-auto">
      <Head>
        <title>Avion</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow">
        <div className="flex flex-col md:flex-row items-center gap-0 bg-white">
          {/* Text Section */}
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <h1 className="text-3xl text-[#2A254B]">
              From a studio in London to a global brand with over 400 outlets
            </h1>
            <p className="mt-4 text-[#2A254B]">
              When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
            </p>
            <p className="mt-4 text-[#2A254B]">
              Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique became the hotbed for the London interior design community.
            </p>
            <button className="mt-8 bg-gray-100 hover:bg-gray-700 text-[#2A254B] py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Get in touch
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 h-auto">
            <Image
              src="/s1.png"
              alt="Avion Furniture"
              width={720}
              height={603}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}