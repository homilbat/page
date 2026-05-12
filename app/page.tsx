import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center bg-[#f3f4f6]">
      <div className="relative shadow-lg bg-white" style={{ maxWidth: "100%", width: "max-content" }}>
        {/* Main Image */}
        <img
          src="/design/main.png"
          alt="Main Screen Prototype"
          className="max-w-full h-auto block"
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

        </div>

        {/* 상단 네비게이션 투명 클릭 영역: 왼쪽(홈), 가운데(요금제), 오른쪽(FAQ) 3등분 */}
        <div className="absolute top-0 left-0 w-full h-[5%] z-20 flex">
          <Link href="/" className="flex-1 h-full cursor-pointer" title="홈/기능" />
          <Link href="/pricing" className="flex-1 h-full cursor-pointer" title="요금제" />
          <Link href="/faq" className="flex-1 h-full cursor-pointer" title="자주 묻는 질문" />
        </div>
      </div>
    </div>
  );
}
