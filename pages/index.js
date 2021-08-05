import Head from 'next/head'
import Header from '../components/Header'
import LeftSide from '../components/LeftSide'
import RightSide from '../components/RightSide'

export default function Home() {
  return (
    <div className="flex flex-col bg-cyan-light-grayish-1 items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="bg-white p-8 pl-10 rounded-tl-3xl rounded-tr-3xl md:rounded-3xl gap-x-8 md:gap-x-12 md:flex min-w-screen">
        <LeftSide />
        <RightSide />
      </div>
      
    </div>
  )
}

function countTipAmount(){
  var a = document.getElementById("bill").value;
  var b = document.getElementById("numb").value;

  console.log(a);
}
