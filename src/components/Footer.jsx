export default function Footer(){
  return (
    <footer id="contact" className="pt-10 pb-14 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3 text-slate-300">
          <div>
            <h4 className="text-white font-semibold">Sécurité Pro</h4>
            <p className="mt-2 text-sm">Abidjan, Côte d’Ivoire — Sécuriser vos sites, c’est notre métier.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Contact</h4>
            <p className="mt-2 text-sm">+225 xx xx xx xx — contact@securitepro.ci</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Horaires</h4>
            <p className="mt-2 text-sm">Opérationnel 24/7 — Bureaux: Lun–Ven 08h–18h</p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Sécurité Pro. Tous droits réservés.
        </div>

        <div className="mt-5 border-t border-white/1 pt-1 text-xs text-slate-300">
           Dévéloppé par Sosthen Dev.
        </div>
      </div>
    </footer>
  )
}