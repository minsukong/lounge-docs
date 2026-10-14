export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-5 py-12">
      <section aria-labelledby="home-title" className="max-w-md space-y-4 text-center">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground">THE LOUNGE</p>
        <h1 id="home-title" className="text-3xl font-bold">더라운지</h1>
        <p className="text-sm leading-6 text-muted-foreground">서비스를 준비하고 있습니다.</p>
      </section>
    </main>
  );
}
