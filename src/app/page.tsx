import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

const perks = [
  {
    name: "Instant delivery",
    symbol: ArrowDownToLine,
    desc: "Get assets in seconds"
  },
  {
    name: "Guaranteed quality",
    symbol: CheckCircle,
    desc: "Verified by team for quality"
  },
  {
    name: "For the planet",
    symbol: Leaf,
    desc: "1% sales to la la"
  }
]

export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className="flex flex-col  py-20 text-center items-center mx-auto max-w-3xl">
        <h1 className="text-4xl sm:text-6xl bold">your marketplace for {' '}
        <span className="text-blue-400">
        high quality assets
        </span></h1>

        <div className="flex flex-col sm:flex-row mt-6 gap-4">
          <Link href='/products' className={buttonVariants()}>
            Browse trending
          </Link>
          <Button variant='ghost'>Our quality promise &rarr;</Button>
        </div>
      </div>
    </MaxWidthWrapper>

    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map(perk => (
            <div key={perk.name} 
            className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="flex flex-shrink justify-center">
                <div className="flex justify-center p-6 items-center rounded-full bg-slate-300" >
                < perk.symbol className=""/>
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium">{perk.name}</h3>
                <p className="text-muted-foreground mt-3 text-sm">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
      

    </section>

    </>
    
  );
}
