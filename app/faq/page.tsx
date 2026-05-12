import Link from "next/link";

export default function FAQ() {
  return (
    <div className="w-full flex justify-center bg-[#f3f4f6]">
      <div className="relative max-w-[1050px] w-full shadow-lg bg-white">
        <img
          src="/design/faq.png"
          alt="FAQ Prototype"
          className="w-full h-auto block"
        />

        {/* 상단 네비게이션 통일 영역 (기존 메뉴를 흰색 배경으로 덮어씀) */}
        <div className="absolute top-0 right-0 w-[60%] h-[80px] bg-white z-20 flex items-center justify-end gap-8 md:gap-12 px-10">
          <Link href="/" className="cursor-pointer text-gray-800 hover:text-blue-600 font-bold text-[16px] md:text-[18px] whitespace-nowrap transition-colors">기능</Link>
          <Link href="/pricing" className="cursor-pointer text-gray-800 hover:text-blue-600 font-bold text-[16px] md:text-[18px] whitespace-nowrap transition-colors">요금제</Link>
          <Link href="/faq" className="cursor-pointer text-gray-800 hover:text-blue-600 font-bold text-[16px] md:text-[18px] whitespace-nowrap transition-colors">자주 묻는 질문</Link>
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
