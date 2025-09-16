import Button from "../other/button/Button";

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-[30px] justify-center items-center h-[60vh] relative ">
      <div className="flex flex-col gap-[16px] justify-center items-center z-10 relative">
        <div className="font-bold text-[24px] tablet:text-[28px] laptop:text-[28px] desktop:text-[26px] desktop-lg:text-[28px] desktop-xl:text-[32px] font-spaceGrotesk text-white flex items-center gap-2 ">
          Hi , i am <h1 className="text-green">Usman Hanif</h1>
        </div>
        <p className="text-white max-w-[677px] text-center font-inter text-[12px] laptop:text-[14px]">
          A passionate Fronted Software Developer 🚀 having a special interest
          in Frontend technologies and experience of building Web applications
          with JavaScript / Reactjs and some other cool libraries and frameworks
        </p>
      </div>

      <div className="flex items-center gap-[15px] relative z-10">
        <Button variant={"bgBtn"}>Contact me Today</Button>
        <Button className={""} variant={"outlineBtn"}>
          Contact me
        </Button>
      </div>
    </div>
  );
}
