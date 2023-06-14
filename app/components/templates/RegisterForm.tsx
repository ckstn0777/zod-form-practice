"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import InputGroup from "./InputGroup";
import Button from "../common/Button";
import { RegisterSchemaType, registerSchema } from "@/app/lib/RegisterSchema";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (data) =>
    console.log(data);

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="font-notoSansKr text-xl font-bold mb-[24px]">
        회원 정보 입력
      </h3>

      <InputGroup
        id="name"
        label="이메일"
        errorMessage="이메일을 입력해주세요."
        {...register("email")}
      />

      <InputGroup
        id="userId"
        label="아이디"
        errorMessage="아이디를 입력해주세요."
        {...register("userId")}
      />

      <InputGroup
        id="password"
        label="비밀번호"
        type="password"
        errorMessage="비밀번호를 입력해주세요."
        {...register("password")}
      />

      <InputGroup
        id="passwordCheck"
        label="비밀번호 확인"
        type="password"
        errorMessage="비밀번호를 다시 입력해주세요."
        {...register("passwordCheck")}
      />

      <Button type="submit">가입하기</Button>
    </form>
  );
}
