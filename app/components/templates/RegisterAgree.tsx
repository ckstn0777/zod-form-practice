import { AiFillCheckCircle, AiOutlineRight } from "react-icons/ai";
import CheckBtnText from "./CheckBtnText";

export default function RegisterAgree() {
  return (
    <div className="border border-gray-300 rounded mt-[20px] mb-[40px] text-sm">
      <div className="border-b border-gray-300 p-5">
        <button
          className="flex justify-center items-center font-bold"
          type="button"
        >
          <AiFillCheckCircle className="text-gray-300 mr-2" size={24} />
          약관 전체 동의
        </button>
      </div>
      <div className="p-5 flex flex-col items-start gap-4 text-gray-500">
        <CheckBtnText rightIcon>개인정보 처리방침 (필수)</CheckBtnText>
        <CheckBtnText rightIcon>Chan 소모임 이용약관 동의 (필수)</CheckBtnText>
        <CheckBtnText rightIcon>Chan 소모임 운영 정책 동의 (필수)</CheckBtnText>
        <CheckBtnText>마케팅 수신 동의 (선택)</CheckBtnText>

        <div className="ml-6 mt-[-4px]">
          <div className="flex gap-5 mb-[14px]">
            <CheckBtnText>문자(SMS)</CheckBtnText>
            <CheckBtnText>이메일</CheckBtnText>
          </div>

          <p className="text-xs mb-1">
            ・ 이벤트 및 혜택 정보를 받아 보실 수 있습니다.
          </p>
          <p className="text-xs">
            ・ 서비스의 주요 안내사항 및 거래정보 등과 관련된 내용은 수신여부와
            관계없이 발송됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
