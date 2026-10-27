import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { OverlayExamples } from "./overlay-examples";

describe("공통 팝업 조합", () => {
  it.each(["다이얼로그 열기", "하단 시트 열기"])("%s에서 Escape로 닫으면 열기 버튼에 포커스가 돌아온다", async (name) => {
    const user = userEvent.setup();
    render(<OverlayExamples />);
    const trigger = screen.getByRole("button", { name });
    await user.click(trigger);
    const dialog = await screen.findByRole("dialog");
    expect(within(dialog).getAllByRole("button").length).toBeGreaterThan(0);
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true));
    await user.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    await waitFor(() => expect(trigger).toHaveFocus());
  });
});
