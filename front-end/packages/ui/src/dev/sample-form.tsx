"use client";

import { useId, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@lounge/ui/button";
import { Checkbox } from "@lounge/ui/checkbox";
import { Input } from "@lounge/ui/input";
import { Label } from "@lounge/ui/label";

const schema = z.object({
  name: z.string().trim().min(2, "이름을 2자 이상 입력해 주세요.").max(20, "이름은 20자까지 입력할 수 있습니다."),
  email: z.email("올바른 이메일 주소를 입력해 주세요."),
  confirmed: z.boolean().refine(Boolean, "입력 내용 확인에 체크해 주세요."),
});

type FormValues = z.infer<typeof schema>;

export function SampleForm() {
  const id = useId();
  const [submitted, setSubmitted] = useState(false);
  const { register, control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", confirmed: false },
    shouldFocusError: true,
  });

  return (
    <form noValidate onChange={() => setSubmitted(false)} onSubmit={handleSubmit(() => setSubmitted(true))} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor={`${id}-name`}>이름 *</Label>
        <Input id={`${id}-name`} autoComplete="name" required aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? `${id}-name-error` : undefined} placeholder="이름을 입력해 주세요" {...register("name")} />
        {errors.name && <p id={`${id}-name-error`} role="alert" className="text-sm text-destructive">{errors.name.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${id}-email`}>이메일 *</Label>
        <Input id={`${id}-email`} type="email" inputMode="email" autoComplete="email" autoCapitalize="none" required aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? `${id}-email-error` : undefined} placeholder="name@example.com" {...register("email")} />
        {errors.email && <p id={`${id}-email-error`} role="alert" className="text-sm text-destructive">{errors.email.message}</p>}
      </div>
      <div className="space-y-1">
        <Controller name="confirmed" control={control} render={({ field }) => (
          <div className="flex min-h-11 items-center gap-3">
            <Checkbox id={`${id}-confirmed`} name={field.name} ref={field.ref} onBlur={field.onBlur} checked={field.value} onCheckedChange={(checked) => { field.onChange(checked); setSubmitted(false); }} required aria-required="true" aria-invalid={!!errors.confirmed} aria-describedby={errors.confirmed ? `${id}-confirmed-error` : undefined} />
            <Label htmlFor={`${id}-confirmed`} className="min-h-11 flex-1 leading-6">입력 내용을 확인했습니다. *</Label>
          </div>
        )} />
        {errors.confirmed && <p id={`${id}-confirmed-error`} role="alert" className="text-sm text-destructive">{errors.confirmed.message}</p>}
      </div>
      <div className="flex flex-wrap gap-3">
        <Button type="submit" disabled={isSubmitting}>입력 확인</Button>
        <Button type="button" variant="outline" onClick={() => { reset(); setSubmitted(false); }}>초기화</Button>
      </div>
      {submitted && <p role="status" className="rounded-lg border bg-secondary p-4 text-sm leading-6">입력 형식이 올바릅니다. 서버로 전송하지 않았습니다.</p>}
    </form>
  );
}
