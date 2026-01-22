import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./Form";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { Checkbox } from "@/shared/ui/checkbox";

const meta: Meta<typeof Form> = {
  title: "shared/ui/Form",
  component: Form,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "React Hook Form + Zod를 사용한 Form 컴포넌트입니다. 폼 검증과 에러 처리를 제공합니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const loginSchema = z.object({
  email: z.string().email({ message: "유효한 이메일을 입력해주세요." }),
  password: z
    .string()
    .min(8, { message: "비밀번호는 최소 8자 이상이어야 합니다." }),
});

export const LoginForm: Story = {
  render: function LoginFormStory() {
    const form = useForm<z.infer<typeof loginSchema>>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });

    function onSubmit(values: z.infer<typeof loginSchema>) {
      console.log(values);
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-[350px] space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input placeholder="example@email.com" {...field} />
                </FormControl>
                <FormDescription>로그인에 사용할 이메일 주소</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            로그인
          </Button>
        </form>
      </Form>
    );
  },
};

const profileSchema = z.object({
  username: z.string().min(2, { message: "이름은 최소 2자 이상이어야 합니다." }),
  bio: z.string().max(160, { message: "자기소개는 160자 이내로 작성해주세요." }),
  terms: z.boolean().refine((val) => val === true, {
    message: "약관에 동의해주세요.",
  }),
});

export const ProfileForm: Story = {
  render: function ProfileFormStory() {
    const form = useForm<z.infer<typeof profileSchema>>({
      resolver: zodResolver(profileSchema),
      defaultValues: {
        username: "",
        bio: "",
        terms: false,
      },
    });

    function onSubmit(values: z.infer<typeof profileSchema>) {
      console.log(values);
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-[400px] space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input placeholder="홍길동" {...field} />
                </FormControl>
                <FormDescription>공개 프로필에 표시될 이름입니다.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>자기소개</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="간단한 자기소개를 작성해주세요."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>최대 160자까지 입력 가능합니다.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      />
                  </FormControl>
                  <FormLabel>이용약관에 동의합니다</FormLabel>
                </div>
                <div className="space-y-1 leading-none pl-6">
                  <FormDescription>
                    서비스 이용약관 및 개인정보처리방침에 동의합니다.
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">저장</Button>
        </form>
      </Form>
    );
  },
};
