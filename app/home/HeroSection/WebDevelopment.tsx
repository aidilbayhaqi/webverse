import Image from "next/image";

export default function WebDevelopment() {
  return (
    <div className="relative w-[900px] h-[350px] lg:h-[400px] hidden md:block">
      <Image src="/ecommerce.png" width={400} height={250} alt="" 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-lg animate-float-fast z-10" />
      <Image src="/citter.png" width={300} height={200} alt=""
        className="absolute left-[10%] top-[40%] rotate-[-10deg] rounded-xl shadow-lg animate-float-slow" />

      <Image src="/companyprofile.png" width={300} height={200} alt=""
        className="absolute right-[10%] top-[35%] rotate-[10deg] rounded-xl shadow-lg animate-float-slow" />

      <Image src="/bycoffe.png" width={250} height={150} alt=""
        className="absolute left-[25%] top-[65%] rotate-[-5deg] rounded-xl shadow-lg animate-float-fast" />

      <Image src="/portofolio.png" width={250} height={150} alt=""
        className="absolute right-[25%] top-[65%] rotate-[5deg] rounded-xl shadow-lg animate-float-fast" />
    </div>
  );
}
