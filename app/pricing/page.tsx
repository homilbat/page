import Link from "next/link";

export default function Pricing() {
  return (
    <div className="w-full min-h-screen flex justify-center bg-[#f3f4f6]">
      <div className="relative shadow-lg bg-white" style={{ maxWidth: "100%", width: "max-content" }}>
        <img
          src="/design/price.png"
          alt="Pricing Prototype"
          className="max-w-full h-auto block"
        />

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
