import { useState } from "react";
import { ArrowLeft, Pencil, Plus, RotateCcw, Save, Trash2, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSites } from "../context/SitesContext";

const emptyForm = {
  name: "",
  url: "",
  msg: "",
  type: "Quanta sites",
};

const siteTypes = ["Quanta sites", "Projects", "Others"];

export default function ManageSitesPage() {
  const { sites, addSite, updateSite, removeSite, resetSites } = useSites();
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }

  function startEditing(site) {
    setEditingId(site.id);
    setForm({ name: site.name, url: site.url, msg: site.msg, type: site.type });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEditing() {
    setEditingId(null);
    setForm(emptyForm);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const site = {
      name: form.name.trim(),
      url: form.url.trim(),
      msg: form.msg.trim(),
      type: form.type,
    };

    if (!site.name || !site.url) return;

    if (editingId) {
      updateSite(editingId, site);
    } else {
      addSite(site);
    }
    cancelEditing();
  }

  function handleRemove(site) {
    if (window.confirm(`Remove "${site.name}"?`)) {
      removeSite(site.id);
    }
  }

  function handleReset() {
    if (window.confirm("Restore the original sites? Your current changes will be removed.")) {
      resetSites();
      cancelEditing();
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-100 px-4 pb-16 pt-28 text-slate-900 dark:bg-slate-950 dark:text-white sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Link to="/Hub" className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-500 dark:text-cyan-300">
                <ArrowLeft size={16} /> Back to hub
              </Link>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Manage sites</h1>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Add, update, or remove shortcuts from your hub.</p>
            </div>
            <button type="button" onClick={handleReset} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-red-300 hover:text-red-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-red-500 dark:hover:text-red-400">
              <RotateCcw size={16} /> Restore defaults
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mb-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-lg font-extrabold">{editingId ? "Edit site" : "Add a site"}</h2>
              {editingId && (
                <button type="button" onClick={cancelEditing} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white">
                  <X size={16} /> Cancel
                </button>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-semibold">Name
                <input required name="name" value={form.name} onChange={handleChange} placeholder="e.g. Quanta HR" className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 font-normal outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950" />
              </label>
              <label className="text-sm font-semibold">URL
                <input required type="url" name="url" value={form.url} onChange={handleChange} placeholder="https://example.com" className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 font-normal outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950" />
              </label>
              <label className="text-sm font-semibold">Category
                <select name="type" value={form.type} onChange={handleChange} className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 font-normal outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950">
                  {siteTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
              </label>
              <label className="text-sm font-semibold">Description
                <input name="msg" value={form.msg} onChange={handleChange} placeholder="What is this site for?" className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 font-normal outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950" />
              </label>
            </div>
            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-cyan-500">
              {editingId ? <Save size={16} /> : <Plus size={16} />}
              {editingId ? "Save changes" : "Add site"}
            </button>
          </form>

          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-extrabold">Current sites</h2>
              <span className="text-sm text-slate-500 dark:text-slate-400">{sites.length} total</span>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              {sites.map((site) => (
                <div key={site.id} className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 p-4 last:border-b-0 dark:border-slate-800 sm:px-5">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold">{site.name}</h3>
                      <span className="rounded-full bg-cyan-100 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300">{site.type}</span>
                    </div>
                    <p className="mt-1 max-w-2xl truncate text-sm text-slate-500 dark:text-slate-400">{site.url}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <button type="button" onClick={() => startEditing(site)} aria-label={`Edit ${site.name}`} className="rounded-lg border border-slate-300 p-2 text-slate-600 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-cyan-300"><Pencil size={16} /></button>
                    <button type="button" onClick={() => handleRemove(site)} aria-label={`Remove ${site.name}`} className="rounded-lg border border-slate-300 p-2 text-slate-600 transition hover:border-red-500 hover:text-red-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-red-400"><Trash2 size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
