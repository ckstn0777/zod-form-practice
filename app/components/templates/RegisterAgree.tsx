import { AiFillCheckCircle, AiOutlineRight } from "react-icons/ai";
import CheckBtnText from "./CheckBtnText";
import React from "react";
import { cn } from "@/app/lib/util";

type RegisterAgreeProps = {
  setSubmitBtnDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: (
    name: string,
    value: string | boolean | number,
    shouldValidate?: boolean | undefined
  ) => void;
};

export default function RegisterAgree({
  setSubmitBtnDisabled,
  setValue,
}: RegisterAgreeProps) {
  // 약관 동의 데이터 - 서버 전송용
  const [agree, setAgree] = React.useState({
    personalInfo: false,
    chanTerms: false,
    chanPolicy: false,
    marketingSMS: false,
    marketingEmail: false,
  });

  const [allAgree, setAllAgree] = React.useState(false); // 전체동의
  const [marketingAgree, setMarketingAgree] = React.useState(false); // 마케팅전체동의

  // 약관전체 전체 동의 선택
  const handleAllAgree = () => {
    if (!allAgree) {
      setAgree({
        personalInfo: true,
        chanTerms: true,
        chanPolicy: true,
        marketingSMS: true,
        marketingEmail: true,
      });
      setMarketingAgree(true);
    } else {
      setAgree({
        personalInfo: false,
        chanTerms: false,
        chanPolicy: false,
        marketingSMS: false,
        marketingEmail: false,
      });
      setMarketingAgree(false);
    }
  };

  // 마케팅 전체 수신 동의
  const handleAllMarketingAgree = () => {
    if (!marketingAgree) {
      setAgree({
        ...agree,
        marketingSMS: true,
        marketingEmail: true,
      });
    } else {
      setAgree({
        ...agree,
        marketingSMS: false,
        marketingEmail: false,
      });
    }
  };

  // 약관전체 동의 - 전체 동의 되었는지 체크해서 상태 변경
  React.useEffect(() => {
    if (Object.values(agree).findIndex((v) => v === false) === -1) {
      setAllAgree(true);
    } else {
      setAllAgree(false);
    }
  }, [agree]);

  // 마케팅 수신 동의 - 전체 동의 되었는지 체크해서 상태 변경
  React.useEffect(() => {
    if (agree.marketingSMS && agree.marketingEmail) {
      setMarketingAgree(true);
    } else {
      setMarketingAgree(false);
    }
  }, [agree]);

  // 필수 동의 체크 되면 버튼 활성화
  React.useEffect(() => {
    setValue("agree", JSON.stringify(agree)); // react-hook-form 를 통해 서버 전송용 데이터 저장

    if (agree.personalInfo && agree.chanTerms && agree.chanPolicy) {
      setSubmitBtnDisabled(false);
    } else {
      setSubmitBtnDisabled(true);
    }
  }, [agree, setSubmitBtnDisabled, setValue]);

  return (
    <div className="border border-gray-300 rounded mt-[20px] mb-[40px] text-sm">
      <div className="border-b border-gray-300 p-5">
        <button
          className="flex justify-center items-center font-bold"
          type="button"
        >
          <AiFillCheckCircle
            className={cn("text-gray-300 mr-2", allAgree && "text-[#00CCAA]")}
            size={24}
            onClick={() => {
              setAllAgree(!allAgree);
              handleAllAgree();
            }}
          />
          약관 전체 동의
        </button>
      </div>
      <div className="p-5 flex flex-col items-start gap-4 text-gray-500">
        <CheckBtnText
          rightIcon
          checked={agree.personalInfo}
          onClick={() => {
            setAgree({ ...agree, personalInfo: !agree.personalInfo });
          }}
        >
          개인정보 처리방침 (필수)
        </CheckBtnText>
        <CheckBtnText
          rightIcon
          checked={agree.chanTerms}
          onClick={() => {
            setAgree({ ...agree, chanTerms: !agree.chanTerms });
          }}
        >
          Chan 소모임 이용약관 동의 (필수)
        </CheckBtnText>
        <CheckBtnText
          rightIcon
          checked={agree.chanPolicy}
          onClick={() => {
            setAgree({ ...agree, chanPolicy: !agree.chanPolicy });
          }}
        >
          Chan 소모임 운영 정책 동의 (필수)
        </CheckBtnText>
        <CheckBtnText
          checked={marketingAgree}
          onClick={() => {
            setMarketingAgree(!marketingAgree);
            handleAllMarketingAgree();
          }}
        >
          마케팅 수신 동의 (선택)
        </CheckBtnText>

        <div className="ml-6 mt-[-4px]">
          <div className="flex gap-5 mb-[14px]">
            <CheckBtnText
              checked={agree.marketingSMS}
              onClick={() => {
                setAgree({ ...agree, marketingSMS: !agree.marketingSMS });
              }}
            >
              문자(SMS)
            </CheckBtnText>
            <CheckBtnText
              checked={agree.marketingEmail}
              onClick={() => {
                setAgree({ ...agree, marketingEmail: !agree.marketingEmail });
              }}
            >
              이메일
            </CheckBtnText>
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
