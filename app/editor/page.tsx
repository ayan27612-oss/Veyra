"use client";

import { useState } from "react";
import { ChevronDown, Download, Image, Layers3, Menu, Minus, Plus, Redo2, Save, Settings2, Square, Text, Undo2, Upload, X, ZoomIn } from "lucide-react";

const tools = [[Text,"Text"],[Image,"Media"],[Square,"Shapes"],[Layers3,"Layers"],[Upload,"Uploads"]] as const;

export default function Editor() {
  const [zoom, setZoom] = useState(70);
  const [selected, setSelected] = useState("Heading");
  const [panel, setPanel] = useState<"tools"|"inspector"|null>(null);

  return <div className="editor-shell">
    <header className="editor-header">
      <div className="flex min-w-0 items-center gap-2 sm:gap-4">
        <a href="/" className="shrink-0 text-xl font-black tracking-[-.05em]">veyra.</a>
        <div className="hidden h-5 w-px bg-black/10 sm:block"/>
        <button className="flex min-w-0 items-center gap-1 truncate rounded-lg px-1 py-2 text-sm font-semibold hover:bg-black/5">Untitled design <ChevronDown size={15}/></button>
      </div>
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className="hidden items-center gap-1 text-xs text-black/40 xl:inline-flex"><Save size={14}/> Saved locally</span>
        <button aria-label="Undo" className="icon-button"><Undo2 size={16}/></button>
        <button aria-label="Redo" className="icon-button"><Redo2 size={16}/></button>
        <button className="flex min-h-10 items-center gap-2 rounded-lg bg-[#6d5dfc] px-3 text-sm font-bold text-white sm:px-4"><Download size={15}/><span className="hidden xs:inline">Export</span></button>
      </div>
    </header>

    <div className="editor-body">
      <aside className="tool-rail desktop-tools">
        <div className="flex flex-col items-center gap-1.5">{tools.map(([Icon,label])=><button key={label} className="tool-button"><Icon size={20}/><span>{label}</span></button>)}</div>
      </aside>

      <section className="editor-main">
        <div className="editor-toolbar">
          <div className="flex items-center gap-1">
            <button aria-label="Undo" className="icon-button"><Undo2 size={15}/></button>
            <button aria-label="Redo" className="icon-button"><Redo2 size={15}/></button>
          </div>
          <div className="hidden h-5 w-px bg-black/10 sm:block"/>
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
            <button className="toolbar-button">Position</button><button className="toolbar-button">Animate</button><button className="toolbar-button">Effects</button>
          </div>
          <button aria-label="Open inspector" className="ml-auto icon-button lg:hidden" onClick={()=>setPanel(panel==="inspector"?null:"inspector")}><Settings2 size={16}/></button>
        </div>

        <div className="canvas-area">
          <div className="canvas-wrap">
            <div className="design-canvas">
              <button onClick={()=>setSelected("Heading")} className={`canvas-heading ${selected==="Heading"?"canvas-selected":""}`}>Create<br/><span className="text-[#6d5dfc]">something.</span></button>
              <button onClick={()=>setSelected("Subtitle")} className={`canvas-subtitle ${selected==="Subtitle"?"canvas-selected":""}`}>A canvas for your next idea.</button>
              <div className="canvas-card"/>
              <div className="canvas-accent"/>
            </div>
          </div>
        </div>

        <div className="zoom-bar">
          <button aria-label="Zoom out" onClick={()=>setZoom(Math.max(30,zoom-10))} className="icon-button"><Minus size={14}/></button>
          <span className="w-12 text-center text-xs font-semibold">{zoom}%</span>
          <button aria-label="Zoom in" onClick={()=>setZoom(Math.min(150,zoom+10))} className="icon-button"><Plus size={14}/></button>
          <ZoomIn size={15} className="ml-2 text-black/40"/>
        </div>
      </section>

      <aside className="inspector desktop-inspector">
        <Inspector selected={selected}/>
      </aside>

      <nav className="mobile-bottom-nav" aria-label="Editor tools">
        <button onClick={()=>setPanel(panel==="tools"?null:"tools")}><Menu size={19}/><span>Tools</span></button>
        <button onClick={()=>setSelected("Heading")}><Text size={19}/><span>Text</span></button>
        <button onClick={()=>setPanel(panel==="inspector"?null:"inspector")}><Settings2 size={19}/><span>Adjust</span></button>
        <button><Layers3 size={19}/><span>Layers</span></button>
      </nav>

      {panel && <div className="mobile-panel-backdrop" onClick={()=>setPanel(null)}>
        <div className="mobile-panel" onClick={e=>e.stopPropagation()}>
          <div className="flex items-center justify-between border-b border-black/10 px-4 py-3"><strong>{panel==="tools"?"Tools":"Inspector"}</strong><button aria-label="Close panel" className="icon-button" onClick={()=>setPanel(null)}><X size={17}/></button></div>
          {panel==="tools" ? <div className="grid grid-cols-4 gap-2 p-4">{tools.map(([Icon,label])=><button key={label} className="mobile-tool-card"><Icon size={20}/><span>{label}</span></button>)}</div> : <Inspector selected={selected}/>}
        </div>
      </div>}
    </div>
  </div>;
}

function Inspector({selected}:{selected:string}) {
  return <div className="space-y-5 p-4 sm:p-5"><div><label className="inspector-label">Selected</label><p className="mt-1 font-bold">{selected}</p></div><div><label className="inspector-label">Position</label><div className="mt-2 grid grid-cols-2 gap-2"><input className="field" value="120" readOnly/><input className="field" value="96" readOnly/></div></div><div><label className="inspector-label">Size</label><div className="mt-2 grid grid-cols-2 gap-2"><input className="field" value="640" readOnly/><input className="field" value="180" readOnly/></div></div><div><label className="inspector-label">Opacity</label><input type="range" className="mt-3 w-full accent-[#6d5dfc]" defaultValue="100"/></div></div>;
}
