export default function CTAContact(){
  return (
    <section id="devis" className="py-20 bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="blur-card p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Demander un devis gratuit</h3>
          <p className="mt-2 text-slate-300">Dites-nous ce que vous souhaitez sécuriser. Nous revenons vers vous sous 24 h.</p>
          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400" placeholder="Nom & prénom" required />
            <input className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400" placeholder="Téléphone / WhatsApp" required />
            <input className="sm:col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400" placeholder="Email (optionnel)" />
            <textarea rows="4" className="sm:col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400" placeholder="Décrivez le site à sécuriser, horaires, besoins…"></textarea>
            <button className="sm:col-span-2 inline-flex justify-center rounded-xl bg-brand-500 hover:bg-brand-600 transition px-6 py-3 text-white font-semibold shadow-soft">
              Envoyer la demande
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}