import Head from 'next/head';
import Image from 'next/image'; 


export default function Home() {
  return (

  
    <div className='bg-gray-200'>
      <Head>
        <title>BookoPhile</title>
        <link rel = "icon" href = "	https://icons.iconarchive.com/icons/martz90/circle/128/books-icon.png" type = "image/x-icon">
        </link>
      </Head>
        {/* Header portion */}

        {/* Main portion */}
       <main className='bg-green-400'>
         <p>Book app</p>
       </main>

        {/* Footer portion */}

    </div>
  );
}
