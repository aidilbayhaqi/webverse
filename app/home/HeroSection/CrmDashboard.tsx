import Image from "next/image";

export default function CRMDashboard() {
  return (
    <div className="relative w-[900px] h-[480px] hidden md:block">
      <Image src="/porto2.png" width={700} height={400} alt=""
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl z-10" />

      <Image src="/dashboard-analytics.png" width={320} height={200} alt=""
        className="absolute left-[5%] top-[45%] rotate-[-6deg] rounded-xl shadow-lg animate-float-slow" />

      <Image src="/dashboard-crm.png" width={320} height={200} alt=""
        className="absolute right-[5%] top-[40%] rotate-[6deg] rounded-xl shadow-lg animate-float-slow" />
    </div>
  );
}
