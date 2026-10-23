import Link from "next/link";

export default function NotFound() {
  return <section className="space-y-4 py-16 text-center"><p className="text-sm text-muted-foreground">404</p><h1 className="text-2xl font-bold">페이지를 찾을 수 없습니다.</h1><p className="text-sm text-muted-foreground">주소가 변경되었거나 존재하지 않는 페이지입니다.</p><Link href="/" className="inline-flex min-h-11 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground">처음으로</Link></section>;
}
