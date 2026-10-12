import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SampleForm } from "./sample-form";

describe("공통 폼 검수", () => {
  it("잘못된 입력을 필드에 연결된 오류로 설명하고 첫 오류에 포커스한다", async () => {
    const user = userEvent.setup();
    render(<SampleForm />);
    await user.click(screen.getByRole("button", { name: "입력 확인" }));
    const name = screen.getByRole("textbox", { name: "이름 *" });
    expect(name).toHaveAccessibleDescription("이름을 2자 이상 입력해 주세요.");
    expect(name).toHaveAttribute("aria-invalid", "true");
    expect(name).toHaveFocus();
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("올바른 입력을 로컬에서 확인하며 네트워크 요청을 하지 않는다", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    const user = userEvent.setup();
    render(<SampleForm />);
    await user.type(screen.getByRole("textbox", { name: "이름 *" }), "검수자");
    await user.type(screen.getByRole("textbox", { name: "이메일 *" }), "review@example.com");
    await user.click(screen.getByRole("checkbox", { name: "입력 내용을 확인했습니다. *" }));
    await user.click(screen.getByRole("button", { name: "입력 확인" }));
    expect(await screen.findByRole("status")).toHaveTextContent("서버로 전송하지 않았습니다.");
    expect(fetchSpy).not.toHaveBeenCalled();
    await user.type(screen.getByRole("textbox", { name: "이름 *" }), "수정");
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    fetchSpy.mockRestore();
  });
});
