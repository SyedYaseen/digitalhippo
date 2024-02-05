import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper"


export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
    <div className="flex flex-col border-4 border-red-500 py-20 text-center mx-auto max-w-3xl">
      <h1 className="text-4xl sm:text-6xl bold">your marketplace for {' '}
      <span className="text-blue-400">
      high quality assets
      </span></h1>
      <p>Testing push</p>
    </div>
    </MaxWidthWrapper>
    </>
  );
}
