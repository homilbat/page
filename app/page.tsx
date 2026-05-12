import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex justify-center bg-[#f3f4f6]">
      <div className="relative max-w-[562px] w-full shadow-lg">
        {/* Main Image */}
        <img
          src="/design/main.png"
          alt="Main Screen Prototype"
          className="w-full h-auto block"
        />

        {/* 
          메인 텍스트 변경을 위한 오버레이 (위치 및 크기, 배경색 조정 필요) 
          기존 "ai와함께 더 빠르고 더 잘쓰세요" 텍스트를 덮어씁니다.
        */}
        <div 
          className="absolute z-10 bg-white flex flex-col justify-center items-center text-center px-4"
          style={{
            top: "20%",       /* 텍스트의 세로 위치 조절 */
            left: "0%",       /* 텍스트의 가로 위치 조절 */
            width: "100%",    /* 텍스트 배경 영역의 가로 길이 */
            height: "15%",    /* 텍스트 배경 영역의 세로 길이 */
          }}
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
            종혁과함께 더 빠르게 더 잘<br/>전문가같이 쓰세요
          </h1>
        </div>

        {/* 
          상단 네비게이션 클릭 영역 그룹 
          (이 박스의 top, left, width, height를 조절해서 
          이미지의 "기능 | 요금제 | 자주 묻는 질문" 부분에 덮어씌우세요)
        */}
        <div 
          className="absolute flex z-10"
          style={{
            top: "3%",       /* 세로 위치 조절 */
            left: "50%",     /* 가로 위치 조절 */
            width: "40%",    /* 전체 메뉴 영역의 가로 길이 */
            height: "5%",    /* 전체 메뉴 영역의 세로 길이 */
          }}
        >
          {/* 기능 (현재 기능 페이지는 없으므로 #처리 하거나 나중에 추가) */}
          <Link href="/" className="flex-1 cursor-pointer" title="기능" />
          
          {/* 요금제 */}
          <Link href="/pricing" className="flex-1 cursor-pointer" title="요금제" />
          
          {/* 자주 묻는 질문 (글자가 더 기니까 flex 비율을 더 크게 줄 수 있음) */}
          <Link href="/faq" className="flex-[1.5] cursor-pointer" title="자주 묻는 질문" />
        </div>
      </div>
    </div>
  );
}
