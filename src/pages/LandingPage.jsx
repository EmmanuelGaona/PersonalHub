import { useState } from "react";
import Navbar from '../components/Navbar'
import {
  LayoutDashboard, Server, Wifi, Users, Database, Shield,
  ChevronDown, ArrowRight, Monitor, Star,
} from "lucide-react";
import Card from "../components/card";
import { useSites } from "../context/SitesContext";



/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function LandingPage() {
  const { sites } = useSites();
  const groupedSites = sites.reduce((acc, site) => {
    if (!acc[site.type]) {
      acc[site.type] = []
    }

    acc[site.type].push(site)
    return acc
  }, {})

  /* Barra lateral */
  function SideMenu() {
    return (
      <div className="relative group/a">
        <div className="
      flex flex-col gap-1 rounded-l-2xl bg-slate-950/90 p-4 backdrop-blur-xl border border-r-0 border-white/20 
       max-w-0 max-h-20 origin-right overflow-hidden shadow-2xl transition-all duration-500 ease-out
       group-hover/a:max-w-screen
       group-hover/a:max-h-screen
       group-hover/a:py-4
       group-hover/a:pl-4
       group-hover/a:pr-8
       ">
          {Object.keys(groupedSites).map((type) => (
            <a
              key={type}
              href={`#${type}`}
              className="
            border-l-2 border-transparent pl-2 py-2 text-xs font-semibold uppercase tracking-wider text-stone-300
            hover:border-cyan-400 hover:bg-white/5 hover:text-cyan-300 transition-all
          "
            >
              <span
                className="
            whitespace-nowrap
            opacity-0
            group-hover/a:opacity-100
            transition-opacity
            duration-300 delay-75
          "
              >
                {type}
              </span>

            </a>
          )
          )
          }
        </div>
        <span
          className="absolute inset-0 content-center pl-1 text-xl font-light text-cyan-300/80 transition-all duration-300 group-hover/a:left-0 group-hover/a:opacity-0 pointer-events-none">
          {"|"}
        </span>
      </div>
    )
  }

  const [search, setSearch] = useState("");
  const normalizedSearch = search.toLowerCase().trim();
  const filteredSites = sites.filter((site) => {
    if (!normalizedSearch) return true;
    return `${site.name}`.toLowerCase().includes(normalizedSearch);
  });
  const visibleGroups = filteredSites.reduce((acc, site) => {
    if (!acc[site.type]) acc[site.type] = [];
    acc[site.type].push(site);
    return acc;
  }, {});

  return (
    <>
      <Navbar search={search} onSearchChange={setSearch} />

      {/* ── Hero ── */}
      <section id="MainContainer" className="relative min-h-screen overflow-x-hidden bg-slate-100/90 scroll-smooth dark:bg-slate-950">
        
        {/* bg */}
        <div
        id="Background" 
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.14),transparent_35%)] dark:bg-transparent"
        />
        {/* menu latertal */}
        <div className="fixed right-0 top-1/3 z-50">
          <SideMenu/>
        </div>

        {/* Sections */}
        <div className="relative mx-auto max-w-7xl space-y-14 px-4 pb-16 pt-28 sm:px-8 lg:px-12">
          {Object.entries(visibleGroups).map(([type, items]) => {
            return (
              <div id={type} key={type} className="scroll-mt-24">
                <div className="mb-5 flex items-center gap-4">
                  <span className="h-px w-8 bg-cyan-500" />
                  <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700 dark:text-slate-200">
                  {type}
                  </h2>
                  <span className="h-px flex-1 bg-slate-300 dark:bg-slate-800" />
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                  {items.map((site, i) => (
                    <Card
                      key={i}
                      Name={site.name}
                      msg={site.msg}
                      Link={site.url}
                      Type={site.type}
                    />
                  ))}
                </div>
              </div>
            )
          })}
          {filteredSites.length === 0 && (
            <p className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-10 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-400">
              No resources match your search.
            </p>
          )}
        </div>

      </section>
    </>
  );
}