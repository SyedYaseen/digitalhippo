const MaxWidthWrapper = ({className, children}: 
    {className?: string, children: ReactNode}) => {
  return (
    <div className="mx-auto bg-slate-500 max-w-scren-xl px-2.5 md:px-20">{{children}}</div>
  )
}

export default MaxWidthWrapper