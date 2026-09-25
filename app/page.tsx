import Link from "next/link";
import { ArrowRight, Layers3, Sparkles, WandSparkles } from "lucide-react";

const features = [
  { icon: Layers3, title: "A canvas that gets out of your way", text: "Compose with layers, text, media and shapes in a focused workspace." },
  { icon: Sparkles, title: "Built for ideas", text: "Start from a blank canvas now, then grow into templates, assets and AI." },
  { icon: WandSparkles, title: "Designed for every screen", text: "Veyra adapts its controls to phones, tablets, laptops and large displays instead of making everyone suffer through the desktop UI." },
];

export default function Home() {
  return <main className="min-h-screen overflow-x-hidden bg-[#fafaf8] text-[#151515]">
    <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <Link href="/" className="text-2xl font-black tracking-[-0.05em]">veyra.</Link>
      <Link href="/editor" className="min-h-11 rounded-full bg-[#151515] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#303030] sm:px-5">Open editor</Link>
    </nav>
    <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-24">
      <div className="max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-2 text-xs font-semibold text-black/60 shadow-sm"><span className="h-2 w-2 rounded-full bg-[#6d5dfc]"/> Veyra is taking shape</div>
        <h1 className="text-[clamp(3.4rem,13vw,6.5rem)] font-black leading-[.92] tracking-[-0.07em]">Make ideas<br/><span className="text-[#6d5dfc]">visible.</span></h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-black/55 sm:mt-8 sm:text-lg sm:leading-8">A visual creation platform for graphics, presentations, social content and everything in between.</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/editor" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#6d5dfc] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#6d5dfc]/20 transition hover:-translate-y-0.5">Create a design <ArrowRight size={17}/></Link><a href="#features" className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-bold">Explore Veyra</a></div>
      </div>
      <div className="relative flex min-h-[320px] items-center justify-center sm:min-h-[430px]">
        <div className="absolute h-56 w-56 rounded-[4rem] bg-[#6d5dfc]/15 blur-3xl sm:h-72 sm:w-72"/>
        <div className="relative w-full max-w-md rotate-1 rounded-[1.5rem] border border-black/10 bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,.12)] sm:rotate-2 sm:rounded-[2rem] sm:p-5">
          <div className="mb-3 flex items-center gap-2 sm:mb-5"><span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b] sm:h-3 sm:w-3"/><span className="h-2.5 w-2.5 rounded-full bg-[#ffd166] sm:h-3 sm:w-3"/><span className="h-2.5 w-2.5 rounded-full bg-[#6d5dfc] sm:h-3 sm:w-3"/></div>
          <div className="grid aspect-[4/3] place-items-center rounded-xl bg-[#f0edff] sm:rounded-2xl"><div className="text-center"><div className="mx-auto mb-3 h-12 w-12 rounded-xl bg-[#6d5dfc] shadow-xl shadow-[#6d5dfc]/30 sm:h-16 sm:w-16 sm:rounded-2xl"/><p className="text-xs font-bold sm:text-sm">Your canvas starts here.</p></div></div>
          <div className="mt-3 grid grid-cols-4 gap-2 sm:mt-5"><div className="h-1.5 rounded bg-black/10"/><div className="h-1.5 rounded bg-black/10"/><div className="h-1.5 rounded bg-[#6d5dfc]/30"/><div className="h-1.5 rounded bg-black/10"/></div>
        </div>
      </div>
    </section>
    <section id="features" className="border-t border-black/5 bg-white"><div className="mx-auto grid max-w-7xl px-4 sm:px-6 lg:grid-cols-3 lg:px-8">{features.map(({icon:Icon,title,text})=><article key={title} className="border-b border-black/5 py-10 sm:py-12 lg:border-b-0 lg:border-r lg:px-10 lg:first:pl-0 lg:last:border-r-0"><Icon size={22} className="text-[#6d5dfc]"/><h2 className="mt-5 text-lg font-bold tracking-tight sm:text-xl">{title}</h2><p className="mt-3 text-sm leading-6 text-black/50 sm:text-base sm:leading-7">{text}</p></article>)}</div></section>
  </main>;
}
