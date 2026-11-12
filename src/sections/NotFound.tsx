import { Header, Footer, FloatingActions } from "../components/Chrome";

export function NotFound() {
  return <>
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[2000] focus:bg-white focus:p-3">Skip to content</a>
    <Header />
    <main id="main" className="bg-lightbg px-5 pt-[150px] pb-20 md:pt-[190px]">
      <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-[0_8px_32px_rgba(10,37,64,0.08)] sm:p-14">
        <p className="text-sm font-bold tracking-[.2em] text-brand-dark">ERROR 404</p>
        <h1 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-lg leading-7 text-muted">The page you are looking for may have moved or no longer exists. Explore our services or return to the homepage.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/" className="local-button">Go to homepage</a>
          <a href="/#services" className="local-button-outline">Browse services</a>
        </div>
      </section>
    </main>
    <Footer /><FloatingActions />
  </>;
}
