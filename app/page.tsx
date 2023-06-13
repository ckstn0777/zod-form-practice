import Image from "next/image";
import Button from "./components/common/Button";
import Input from "./components/common/Input";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-[72px] max-w-[640px] mx-auto">
      <h2 className="font-notoSansKr text-4xl font-bold text-primary mb-16">
        Chan 스튜디오
      </h2>

      <form className="w-full">
        <h3 className="font-notoSansKr text-xl font-bold mb-[24px]">
          회원 정보 입력
        </h3>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm text-[#686e7b] mb-[2px]">
            이메일
          </label>
          <div className="mb-[20px]">
            <div>
              <Input id="email" name="email" />
            </div>
            <div>
              <p className="mt-[4px] text-xs">이메일을 입력해주세요.</p>
            </div>
          </div>
        </div>

        <Button>가입하기</Button>
      </form>
    </main>
  );
}
