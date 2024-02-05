import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Ghost } from "lucide-react";


export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
    <div className="flex flex-col  py-20 text-center mx-auto max-w-3xl">
      <h1 className="text-4xl sm:text-6xl bold">your marketplace for {' '}
      <span className="text-blue-400">
      high quality assets
      </span></h1>
      <div className="flex flex-col mt-6 gap-4">
      <Link href='/products' className={buttonVariants()}>
        Browse trending</Link>
        <Button variant='ghost'>try stuff</Button>
        </div>

    </div>
    </MaxWidthWrapper>
    </>
  );
}
