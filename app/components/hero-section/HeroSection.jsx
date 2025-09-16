import Button from "../other/button/Button";


export default function HeroSection() {
  return (
    <div className="flex flex-col gap-[20px] justify-center items-center h-[60vh] relative">
        <div className="border-[50px] blur-2xl bg-[#D9D9D905] rounded-full w-120 h-120 absolute top-50 left-1/2 -translate-x-1/2 z-0">
        </div>
        <div className="font-bold text-[32px] font-spaceGrotesk text-white flex items-center gap-2 ">
            Hi , i am <h1 className="text-green">Usman Hanif</h1>
        </div>
        <p className="text-white max-w-[677px] text-center font-inter">A passionate Fronted Software Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with JavaScript / Reactjs and some other cool libraries and frameworks</p>
        <div className="flex items-center gap-[15px] relative z-10">
            <Button variant={'bgBtn'}>
                Contact me Today
            </Button>
            <Button className={''} variant={'outlineBtn'}>
                Contact me
            </Button>
        </div>
    </div>
  )
}
