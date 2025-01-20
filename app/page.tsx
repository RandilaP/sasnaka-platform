import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
      <Image src={'/hero.jpeg'} alt="hero" width={1300} height={800} className="w-screen h-screen"/>
    </div>
    </>
  );
}
