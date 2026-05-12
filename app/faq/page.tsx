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
