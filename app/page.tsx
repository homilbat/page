import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex justify-center bg-[#f3f4f6]">
      <div className="relative max-w-[1050px] w-full shadow-lg bg-white">
        {/* Main Image */}
        <img
          src="/design/main.png"
          alt="Main Screen Prototype"
          className="w-full h-auto block"
        />

        {/* 
          메인 텍스트 변경을 위한 오버레이 
        */}
        <div 
          className="absolute z-10 flex flex-col justify-center items-center text-center px-4"
          style={{
            top: "20%",       
            left: "0%",       
            width: "100%",    
          }}
        >
          <h1 className="text-[2rem] md:text-[3rem] font-bold text-gray-900 mb-2 leading-tight bg-white/80 px-10 py-5 rounded-2xl shadow-sm backdrop-blur-sm">
            종혁과함께 더 빠르게<br/>더 전문가같이 더 잘 쓰세요
          </h1>
        </div>

        {/* 상단 네비게이션 투명 클릭 영역 (이미지에 디자인이 포함되어 있으므로 영역만 지정) */}
        <div className="absolute top-0 right-0 w-[70%] h-[80px] z-20 flex items-center justify-end">
          <Link href="/" className="w-[15%] h-full cursor-pointer" title="기능" />
          <Link href="/pricing" className="w-[15%] h-full cursor-pointer" title="요금제" />
          <Link href="/faq" className="w-[20%] h-full cursor-pointer mr-[2%]" title="자주 묻는 질문" />
        </div>
        
        {/* 로고 영역 클릭 (홈으로) */}
        <Link 
          href="/"
          className="absolute z-20"
          style={{ top: "0%", left: "0%", width: "40%", height: "80px" }}
          title="홈으로"
        />
      </div>
    </div>
  );
}
