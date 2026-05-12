import Link from "next/link";

export default function FAQ() {
  return (
    <div className="w-full flex justify-center bg-[#f3f4f6]">
      <div className="relative max-w-[1050px] w-full shadow-lg">
        <img
          src="/design/faq.png"
          alt="FAQ Prototype"
          className="w-full h-auto block"
        />

        {/* 상단 네비게이션 클릭 영역 그룹 */}
        <div 
          className="absolute flex z-10"
          style={{
            top: "3%",       /* 세로 위치 조절 */
            left: "50%",     /* 가로 위치 조절 */
            width: "40%",    /* 전체 메뉴 영역의 가로 길이 */
            height: "5%",    /* 전체 메뉴 영역의 세로 길이 */
          }}
        >
          <Link href="/" className="flex-1 cursor-pointer" title="기능" />
          <Link href="/pricing" className="flex-1 cursor-pointer" title="요금제" />
          <Link href="/faq" className="flex-[1.5] cursor-pointer" title="자주 묻는 질문" />
        </div>
        
        {/* 상단 왼쪽 로고 클릭 영역 (메인으로 이동) */}
        <Link 
          href="/"
          className="absolute z-10"
          style={{ top: "2%", left: "5%", width: "15%", height: "8%" }}
          title="로고 (홈으로)"
        />
      </div>
    </div>
  );
}
