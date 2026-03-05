import Image from "next/image";

export default function AIAutomation() {
  return (
    <div className="relative items-center w-[900px] h-[800px] hidden md:block" data-reveal="">
      {/* <video
        src="/ai-automation-demo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full rounded-2xl shadow-2xl border border-white/10"
      /> */}
      <Image src={'/preview-ai.png'} alt="" width={500} height={500} className="absolute left-1/2 top-1/2
    -translate-x-1/2 -translate-y-1/2
    rounded-2xl shadow-2xl animate-float-fast"></Image>
      {/* <span className="absolute -top-4 -right-4 bg-green-500 text-black text-sm font-bold px-4 py-2 rounded-full">
        AI Automation
      </span> */}
    </div>
  );
}
