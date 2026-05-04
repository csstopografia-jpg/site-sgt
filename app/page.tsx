export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section
        className="relative min-h-screen overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#06193d]/80 via-black/40 to-black/80"></div>

        <section className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-6 text-white">
          <img
            src="/logo.png"
            alt="SGT Solução Geo Topografia"
            className="w-[380px] max-w-[85vw] mb-10 opacity-90 drop-shadow-[0_0_30px_rgba(0,150,255,0.6)]"
          />

          <h1 className="text-5xl md:text-7xl font-black tracking-wide drop-shadow-[0_5px_20px_rgba(0,0,0,0.8)]">
            SGT - SOLUÇÃO GEO TOPOGRAFIA
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-blue-200 font-medium tracking-wide">
            Marcando território com precisão e visão
          </p>

          <p className="mt-6 max-w-2xl text-lg text-blue-100">
            Topografia em Anápolis GO e região. Expertise local com alcance
            nacional: estrutura técnica preparada para atuar em qualquer estado
            do Brasil.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap justify-center">
            <a
              href="https://wa.me/5562995451269"
              className="bg-green-500 px-8 py-4 rounded-full font-bold hover:bg-green-400 shadow-[0_0_20px_rgba(0,255,120,0.5)] transition"
            >
              Falar no WhatsApp
            </a>

            <a
              href="mailto:comercial@solucaogeo.com.br"
              className="bg-white text-[#06193d] px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition"
            >
              Enviar E-mail
            </a>
          </div>
        </section>
      </section>

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <p className="text-center font-bold text-blue-700 tracking-widest uppercase">
          Serviços
        </p>

        <h2 className="mt-3 text-3xl md:text-5xl font-black text-[#06193d] text-center">
          Soluções completas em topografia
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            "Levantamento Topográfico",
            "Georreferenciamento",
            "Locação de Obras",
            "Regularização de Imóveis",
            "Medição de Terrenos",
            "Cadastro Ambiental Rural",
          ].map((servico) => (
            <div
              key={servico}
              className="rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-xl font-black text-[#06193d]">{servico}</h3>
              <p className="mt-3 text-slate-600">
                Serviço técnico com precisão, responsabilidade e entrega
                profissional.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-bold text-blue-700 tracking-widest uppercase">
              Sobre
            </p>

            <h2 className="mt-3 text-3xl md:text-5xl font-black text-[#06193d]">
              Base em Anápolis, atuação nacional
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              A SGT Solução Geo Topografia atua com serviços técnicos para
              obras, terrenos, áreas rurais, imóveis, construtoras e projetos de
              engenharia em Goiás e em todo o território nacional.
            </p>
          </div>

          <div className="bg-[#06193d] text-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-black">Por que escolher a SGT?</h3>

            <ul className="mt-6 space-y-4">
              <li>✅ Atendimento rápido pelo WhatsApp</li>
              <li>✅ Precisão técnica em campo</li>
              <li>✅ Serviços para obras, terrenos e áreas rurais</li>
              <li>✅ Atuação em Anápolis, Goiás e todo Brasil</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-[#06193d]">
          Solicite seu orçamento
        </h2>

        <p className="mt-4 text-slate-600">
          Entre em contato e informe sua demanda de topografia.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="https://wa.me/5562995451269"
            className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-400"
          >
            Chamar no WhatsApp
          </a>

          <a
            href="mailto:comercial@solucaogeo.com.br"
            className="bg-[#06193d] text-white px-8 py-4 rounded-full font-bold"
          >
            comercial@solucaogeo.com.br
          </a>
        </div>
      </section>

      <footer className="bg-[#06193d] text-white px-6 py-8 text-center">
        <p className="font-black">SGT - SOLUÇÃO GEO TOPOGRAFIA</p>
        <p className="mt-2 text-blue-200">
          Marcando território com precisão e visão
        </p>
        <p className="mt-2 text-sm text-blue-100">
          Anápolis - GO | Atendimento em todo Brasil
        </p>
      </footer>
    </main>
  );
}