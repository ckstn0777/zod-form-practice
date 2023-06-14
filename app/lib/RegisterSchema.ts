import { z } from "zod";

export type RegisterSchemaType = z.infer<typeof registerSchema>;

export const registerSchema = z
  .object({
    email: z.string().email("이메일 형식을 입력해주세요."),
    userId: z.string().min(3).max(20),
    password: z.string().min(6).max(20),
    passwordCheck: z.string().min(6).max(20),
  })
  .refine((data) => data.password === data.passwordCheck, {
    path: ["passwordCheck"],
    message: "비밀번호가 일치하지 않습니다.",
  });
