import Link from "next/link";
import { ArrowRight, Layers3, Sparkles, WandSparkles } from "lucide-react";

const features = [
  { icon: Layers3, title: "A canvas that gets out of your way", text: "Compose with layers, text, media and shapes in a focused workspace." },
  { icon: Sparkles, title: "Built for ideas", text: "Start from a blank canvas now, then grow into templates, assets and AI." },
  { icon: WandSparkles, title: "Designed to scale", text: "Veyra is being built as a serious creative platform, not a demo that collapses under its own ambition." },
];

export default function Home() {
  return <main className="min-h-screen bg-[#fafaf8] text-[#151515]">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
      <Link href="/" className="text-2xl font-black tracking-[-0.05em]">veyra.</Link>
      <Link href="/editor" className="rounded-full bg-[#151515] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#303030]">Open editor</Link>
    </nav>
    <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:pt-28">
      <div className="max-w-3xl">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-2 text-xs font-semibold text-black/60 shadow-sm"><span className="h-2 w-2 rounded-full bg-[#6d5dfc]"/> Veyra is taking shape</div>
        <h1 className="text-6xl font-black leading-[.94] tracking-[-0.065em] sm:text-7xl lg:text-[6.5rem]">Make ideas<br/><span className="text-[#6d5dfc]">visible.</span></h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-black/55">Veyra is a new visual creation platform for graphics, presentations, social content and everything in between.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Link href="/editor" className="inline-flex items-center gap-2 rounded-full bg-[#6d5dfc] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#6d5dfc]/20 transition hover:-translate-y-0.5">Create a design <ArrowRight size={17}/></Link><a href="#features" className="rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-bold">Explore Veyra</a></div>
      </div>
      <div className="relative flex min-h-[430px] items-center justify-center">
        <div className="absolute h-72 w-72 rounded-[4rem] bg-[#6d5dfc]/15 blur-3xl"/>
        <div className="relative w-full max-w-md rotate-2 rounded-[2rem] border border-black/10 bg-white p-5 shadow-[0_30px_80px_rgba(0,0,0,.12)]">
          <div className="mb-5 flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#ff6b6b]"/><span className="h-3 w-3 rounded-full bg-[#ffd166]"/><span className="h-3 w-3 rounded-full bg-[#6d5dfc]"/></div>
          <div className="grid aspect-[4/3] place-items-center rounded-2xl bg-[#f0edff]"><div className="text-center"><div className="mx-auto mb-3 h-16 w-16 rounded-2xl bg-[#6d5dfc] shadow-xl shadow-[#6d5dfc]/30"/><p className="text-sm font-bold">Your canvas starts here.</p></div></div>
          <div className="mt-5 grid grid-cols-4 gap-2"><div className="h-2 rounded bg-black/10"/><div className="h-2 rounded bg-black/10"/><div className="h-2 rounded bg-[#6d5dfc]/30"/><div className="h-2 rounded bg-black/10"/></div>
        </div>
      </div>
    </section>
    <section id="features" className="border-t border-black/5 bg-white"><div className="mx-auto grid max-w-7xl gap-px px-6 lg:grid-cols-3 lg:px-8">{features.map(({icon:Icon,title,text})=><article key={title} className="border-b border-black/5 py-12 lg:border-b-0 lg:border-r lg:px-10 lg:first:pl-0 lg:last:border-r-0"><Icon size={22} className="text-[#6d5dfc]"/><h2 className="mt-5 text-xl font-bold tracking-tight">{title}</h2><p className="mt-3 leading-7 text-black/50">{text}</p></article>)}</div></section>
  </main>;
}
