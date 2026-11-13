import { PageShell } from '../components/PageShell';
import { ContactActions } from '../components/Actions';
import { ArrowUpRight } from '../components/Icons';

export function NotFound() {
  return <PageShell><section className="bg-lightbg px-5 py-20 sm:py-28"><div className="mx-auto max-w-3xl rounded-3xl border border-borderline bg-white p-8 text-center sm:p-14"><p className="eyebrow">Error 404</p><h1 className="mt-4 text-4xl font-bold tracking-tight text-navy">This page isn’t here.</h1><p className="mx-auto mt-5 max-w-lg text-base leading-8 text-muted">The address may have changed. Browse our services, find your area or contact us for help.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><a href="/services/" className="btn btn-outline">All services <ArrowUpRight className="h-4 w-4" /></a><a href="/locations/" className="btn btn-outline">Service locations <ArrowUpRight className="h-4 w-4" /></a><a href="/" className="btn btn-outline">Homepage</a></div><ContactActions quote={false} className="mt-8 justify-center" /></div></section></PageShell>;
}
