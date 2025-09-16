import Link from "next/link"

export default function Button({children , className , asLink=false , variant}) {

    const ElemType = asLink == true ? Link : "button" 

    const variants = {
      outlineBtn:"border border-[#4C5C52] hover:bg-green",
      bgBtn:"bg-green border border-[#4C5C52] hover:bg-transparent"
    }

  return (
    <ElemType className={`rounded-full text-white px-[12px] h-[31.5px] text-[12px] font-semibold font-inter shadow-[0px_2.13px_5.33px_0px_#07BA4C1A_inset] transition-all ease-linear duration-300 cursor-pointer ${variants[variant]} ${className}`}>{children}</ElemType>
  )
}
