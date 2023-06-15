"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import InputGroup from "./InputGroup";
import Button from "../common/Button";
import { RegisterSchemaType, registerSchema } from "@/app/lib/RegisterSchema";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (data) =>
    alert(JSON.stringify(data));

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="font-notoSansKr text-xl font-bold mb-[24px]">
        회원 정보 입력
      </h3>

      <InputGroup
        id="email"
        label="이메일"
        placeholder="@이하 주소까지 모두 입력"
        errorMessage={errors.email?.message}
        {...register("email")}
      />

      <InputGroup
        id="userId"
        label="아이디"
        placeholder="영문 소문자 또는 영문+숫자 조합 4~30자리"
        errorMessage={errors.userId?.message}
        {...register("userId")}
      />

      <InputGroup
        id="password"
        label="비밀번호"
        type="password"
        placeholder={"영문+숫자+특수문자 조합 8~15자리"}
        errorMessage={errors.password?.message}
        {...register("password")}
      />

      <InputGroup
        id="passwordCheck"
        label="비밀번호 확인"
        type="password"
        placeholder={"비밀번호 확인"}
        errorMessage={errors.passwordCheck?.message}
        {...register("passwordCheck")}
      />

      <InputGroup
        id="recommendationCode"
        label="추천코드"
        placeholder={"추천코드 입력"}
        errorMessage={errors.recommendationCode?.message}
        required={false}
        {...register("recommendationCode")}
      />

      <Button type="submit">가입하기</Button>
    </form>
  );
}
