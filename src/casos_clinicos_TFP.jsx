import { useState } from "react";

const casos = [
  {
    id: 1,
    titulo: "El terapeuta omnipotente",
    diagnostico: "Trastorno Límite de Personalidad (TLP)",
    contexto: "Paciente mujer, 28 años, 3ª sesión de TFP. Historial de relaciones idealizadas que terminan en abandono.",
    dialogo: [
      { rol: "Paciente", texto: "Es que... no sé cómo explicarlo. Llevo años yendo a terapia y nunca había sentido esto. Como que por fin alguien me entiende de verdad. Mi madre jamás me escuchó así. Mis ex tampoco. Creo que si alguien puede ayudarme, eres tú." },
      { rol: "Terapeuta", texto: "Me llama la atención lo que me describes: alguien completamente distinto a todos los demás, el único que puede ayudarte. ¿Qué está pasando aquí entre nosotras en este momento?" },
      { rol: "Paciente", texto: "¿Cómo que qué hay detrás? Pues que es verdad. ¿No puedo simplemente confiar en alguien sin que se convierta en un problema? (pausa, tono más tenso) O sea... ¿me estás diciendo que tampoco puedo fiarme de ti?" },
      { rol: "Terapeuta", texto: "Fíjate lo que acaba de pasar: hice una pregunta y en segundos pasaste de idealizarme a verme como alguien que te va a traicionar. De salvadora a traidora. ¿Reconoces ese movimiento?" },
      { rol: "Paciente", texto: "(silencio largo, le cambia la cara) ...Sí. Lo hago siempre. Cuando empiezo a confiar en alguien, ya estoy buscando el momento en que me la va a liar. Y lo acabo de hacer contigo ahora mismo, ¿no?" },
    ],
    diadaTroncal: {
      yo: "Yo desamparada y vacía",
      otro: "Otro omnipotente y salvador",
      afecto: "Idealización teñida de terror al abandono",
      activacion: "La pregunta reflexiva del terapeuta activa la díada persecutoria subyacente (yo rechazada / otro traidor), revelando la fragilidad de la idealización.",
    },
    color: "#2D6A4F",
    acento: "#95D5B2",
  },
  {
    id: 2,
    titulo: "La acusación como defensa",
    diagnostico: "TLP con rasgos narcisistas",
    contexto: "Paciente varón, 35 años, 8ª sesión. Antecedente de rupturas laborales por conflictos con superiores.",
    dialogo: [
      { rol: "Paciente", texto: "(entra 12 minutos tarde, deja el abrigo de golpe en la silla) El tráfico estaba imposible. Ya me imagino que me vas a cobrar igual la sesión entera, ¿no? Al final esto es un negocio como otro cualquiera." },
      { rol: "Terapeuta", texto: "Sí, el tiempo corre desde la hora acordada. Entras con mucha tensión. ¿Qué ha pasado?" },
      { rol: "Paciente", texto: "Pues que Rodrigo, mi jefe, ha dicho delante de todo el equipo que mi informe era mediocre. Mediocre. Con lo que yo me he currado ese informe... ¿quién se cree que es?" },
      { rol: "Terapeuta", texto: "Noto algo: llegas aquí y lo primero que aparece es que yo también te cobro injustamente, que yo también te trato mal. ¿En qué me estás convirtiendo a mí en este momento?" },
      { rol: "Paciente", texto: "(resopla, cruza los brazos) Oye, no empieces a psicoanalizarme a mí ahora... (silencio) Bueno. Vale. Supongo que cuando me siento así, voy a por el primero que tengo delante. Que hoy has sido tú." },
      { rol: "Terapeuta", texto: "Exacto. Atacas antes de que te ataquen. Lo has hecho aquí conmigo nada más llegar, lo haces con Rodrigo. ¿Desde cuándo funciona así en ti?" },
    ],
    diadaTroncal: {
      yo: "Yo humillado e incomprendido",
      otro: "Otro poderoso y explotador",
      afecto: "Vergüenza rápidamente convertida en rabia",
      activacion: "El desplazamiento de la rabia hacia el terapeuta (cobro injusto) replica la relación con el jefe. El señalamiento in situ permite observar la díada en acción dentro de la transferencia.",
    },
    color: "#6B2D1A",
    acento: "#F4A261",
  },
  {
    id: 3,
    titulo: "El silencio que demanda",
    diagnostico: "Trastorno de Personalidad Dependiente con rasgos límite",
    contexto: "Paciente mujer, 41 años, 15ª sesión. Divorciada reciente. Llama al terapeuta fuera de sesión repetidamente.",
    dialogo: [
      { rol: "Paciente", texto: "(entra sin saludar, se sienta con los brazos cruzados, mira hacia la ventana)" },
      { rol: "Terapeuta", texto: "Hoy entras diferente. ¿Qué está pasando?" },
      { rol: "Paciente", texto: "Nada. (pausa larga) Te llamé el martes por la noche. No cogiste." },
      { rol: "Terapeuta", texto: "Sí, vi la llamada. Era tarde, fuera del horario que tenemos acordado, y no respondí por eso. ¿Qué estaba pasando cuando llamaste?" },
      { rol: "Paciente", texto: "Que no podía más. Que sentía que me ahogaba y que necesitaba hablar con alguien. Contigo. (voz más baja) A veces siento que eres lo único que tengo. Y no estabas." },
      { rol: "Terapeuta", texto: "Fíjate en lo que acabas de decir: que soy 'lo único que tienes'. Eso convierte este espacio en algo imposible —no puedo ocupar ese lugar, y el encuadre que tenemos lo delimita así. ¿Qué te pasa en este momento cuando te digo eso?" },
      { rol: "Paciente", texto: "Ya sé que es una barbaridad. Lo sé. Pero es que no sé estar sola sin sentir que me estoy cayendo por un agujero. No sé cómo se hace eso." },
    ],
    diadaTroncal: {
      yo: "Yo frágil y en peligro de aniquilación",
      otro: "Otro que debe rescatar y nunca fallar",
      afecto: "Angustia de separación + rabia pasiva ante la frustración",
      activacion: "La no-respuesta del terapeuta (encuadre terapéutico) activa la representación del otro abandonador. El silencio inicial de la sesión es una comunicación afectiva preverbal de esa díada.",
    },
    color: "#1B3A6B",
    acento: "#90CAF9",
  },
  {
    id: 4,
    titulo: "El paciente que no necesita nada",
    diagnostico: "Trastorno Narcisista de Personalidad",
    contexto: "Paciente varón, 47 años, ejecutivo. 6ª sesión. Acude por recomendación de su esposa, quien amenaza con divorciarse.",
    dialogo: [
      { rol: "Paciente", texto: "Otra semana sin novedades. El trabajo va bien, como siempre. El tema sigue siendo Elena, que se empeña en que yo no la escucho. Pero claro, si lo que yo exijo en casa es lo mismo que nos ha dado el nivel de vida que tenemos..." },
      { rol: "Terapeuta", texto: "Fíjate que llevamos ya varias sesiones y el centro siempre es lo que Elena no entiende. ¿Qué hay de ti en todo esto? ¿Qué sientes tú en esa relación?" },
      { rol: "Paciente", texto: "¿Yo? Yo estoy bien. Frustrado con ella, sí, pero bien. Siempre he sido muy estable emocionalmente. Es una de mis virtudes." },
      { rol: "Terapeuta", texto: "Estable emocionalmente, o muy entrenado en no registrar lo que sientes. No es lo mismo. ¿Cuándo fue la última vez que algo te movió por dentro?" },
      { rol: "Paciente", texto: "(cambia el tono, más seco) Oye, yo no vengo aquí a que me digas que tengo problemas emocionales. Vengo porque mi mujer tiene un problema con mi forma de ser. No hay que buscarle tres pies al gato." },
      { rol: "Terapeuta", texto: "Ahora mismo te has puesto a la defensiva. Eso es una emoción, está pasando aquí, conmigo, en este momento. No lo pases de largo." },
      { rol: "Paciente", texto: "(pausa, descoloca un poco) ...No me gusta que me pillen en algo que no controlo. Supongo que eso también dice algo de mí, ¿no?" },
    ],
    diadaTroncal: {
      yo: "Yo autosuficiente y superior",
      otro: "Otro que amenaza con revelar debilidad",
      afecto: "Vacío emocional + irritación defensiva ante cualquier intento de contacto con la vulnerabilidad",
      activacion: "El terapeuta, al señalar la emoción en tiempo real (irritación dentro de la sesión), rompe la defensa de grandiosidad y expone la díada subyacente: yo vulnerable / otro que puede humillarme.",
    },
    color: "#3D1C72",
    acento: "#CE93D8",
  },
  {
    id: 5,
    titulo: "El rol que se invierte",
    diagnostico: "TLP con historial de abuso en la infancia",
    contexto: "Paciente mujer, 32 años, 22ª sesión. Abuso físico por parte del padre. Relaciones con parejas controladoras.",
    dialogo: [
      { rol: "Paciente", texto: "Oye, te veo con mala cara hoy. ¿Estás bien? ¿Ha sido una semana dura? No te preocupes por mí hoy si no estás..." },
      { rol: "Terapeuta", texto: "Llevas diez segundos aquí y ya me estás cuidando a mí. ¿Qué te ha hecho pensar que tenía mala cara?" },
      { rol: "Paciente", texto: "No sé, algo en los ojos. Siempre lo noto. Desde pequeña, lo primero que hacía cuando llegaba mi padre a casa era mirarle la cara para saber cómo venía. Si venía bien, podía respirar. Si no... pues ya sabía lo que tocaba." },
      { rol: "Terapeuta", texto: "Aprendiste de niña a escanear la cara de los demás antes de pensar en lo que necesitabas tú. Y lo acabas de hacer conmigo, nada más entrar. ¿Qué imaginas que pasaría si llegaras aquí sin mirarme, pensando solo en lo que necesitas?" },
      { rol: "Paciente", texto: "(pausa, le tiembla un poco la voz) Que sería demasiado. Que te molestaría. Es que... si vengo con mis cosas, siento que de alguna manera... te estoy haciendo daño. O que me lo vas a hacer tú a mí. No sé muy bien." },
      { rol: "Terapeuta", texto: "Para. En treinta segundos pasaste de cuidarme a mí a decir que tus propias necesidades causan daño. Eso no es una conclusión de hoy —es la díada entera mostrándose aquí, ahora. Quédate con eso un momento sin explicarlo." },
    ],
    diadaTroncal: {
      yo: "Yo peligroso (mis necesidades dañan o provocan daño)",
      otro: "Otro frágil que debo proteger / o agresor que debo apaciguar",
      afecto: "Angustia vigilante + culpa anticipatoria",
      activacion: "La inversión de roles (paciente cuida al terapeuta) es una enactment de la relación con el padre abusador. Al nombrarlo el terapeuta, se hace consciente la díada disociada: yo con necesidades = peligro.",
    },
    color: "#1A4747",
    acento: "#80CBC4",
  },
];

export default function TFPCasos() {
  const [activo, setActivo] = useState(0);
  const [tab, setTab] = useState("dialogo");
  const caso = casos[activo];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0D0D0D",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#E8E0D5",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        background: "#111",
        borderBottom: "1px solid #2A2A2A",
        padding: "28px 40px 20px",
      }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: "#666", textTransform: "uppercase", marginBottom: 8 }}>
          Psicología Clínica · Terapia Focalizada en la Transferencia
        </div>
        <h1 style={{ fontSize: 26, fontWeight: "normal", margin: 0, color: "#E8E0D5", letterSpacing: 0.5 }}>
          Casos Clínicos — Díadas Troncales en TFP
        </h1>
      </div>

      <div style={{ display: "flex", minHeight: "calc(100vh - 95px)" }}>
        {/* Sidebar */}
        <div style={{
          width: 240,
          background: "#111",
          borderRight: "1px solid #1E1E1E",
          flexShrink: 0,
          padding: "20px 0",
        }}>
          {casos.map((c, i) => (
            <button
              key={c.id}
              onClick={() => { setActivo(i); setTab("dialogo"); }}
              style={{
                width: "100%",
                textAlign: "left",
                background: activo === i ? "#1A1A1A" : "transparent",
                border: "none",
                borderLeft: activo === i ? `3px solid ${c.acento}` : "3px solid transparent",
                padding: "14px 20px",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              <div style={{ fontSize: 10, color: "#555", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>
                Caso {c.id}
              </div>
              <div style={{ fontSize: 13, color: activo === i ? "#E8E0D5" : "#888", lineHeight: 1.4 }}>
                {c.titulo}
              </div>
              <div style={{ fontSize: 11, color: "#555", marginTop: 4 }}>
                {c.diagnostico}
              </div>
            </button>
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: "32px 48px", overflowY: "auto" }}>
          {/* Case header */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: caso.acento, textTransform: "uppercase", marginBottom: 8 }}>
              Caso {caso.id}
            </div>
            <h2 style={{ fontSize: 22, fontWeight: "normal", margin: "0 0 8px", color: "#E8E0D5" }}>
              {caso.titulo}
            </h2>
            <div style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>
              <span style={{ color: "#AAA" }}>Diagnóstico:</span> {caso.diagnostico}
            </div>
            <p style={{ fontSize: 13, color: "#777", lineHeight: 1.7, margin: 0, fontStyle: "italic", borderLeft: `2px solid #2A2A2A`, paddingLeft: 16 }}>
              {caso.contexto}
            </p>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: "1px solid #1E1E1E" }}>
            {[["dialogo", "Diálogo clínico"], ["diada", "Díada troncal"]].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: tab === key ? `2px solid ${caso.acento}` : "2px solid transparent",
                  color: tab === key ? "#E8E0D5" : "#555",
                  padding: "8px 20px",
                  cursor: "pointer",
                  fontSize: 12,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  marginBottom: -1,
                  transition: "all 0.15s",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Dialogo tab */}
          {tab === "dialogo" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {caso.dialogo.map((linea, i) => (
                <div key={i} style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}>
                  <div style={{
                    width: 90,
                    flexShrink: 0,
                    fontSize: 10,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    color: linea.rol === "Terapeuta" ? caso.acento : "#888",
                    paddingTop: 3,
                    textAlign: "right",
                  }}>
                    {linea.rol}
                  </div>
                  <div style={{
                    flex: 1,
                    background: linea.rol === "Terapeuta" ? "#161616" : "#131313",
                    border: `1px solid ${linea.rol === "Terapeuta" ? "#222" : "#1A1A1A"}`,
                    borderRadius: 4,
                    padding: "12px 16px",
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: linea.rol === "Terapeuta" ? "#CCC" : "#AAA",
                  }}>
                    {linea.texto}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Díada tab */}
          {tab === "diada" && (
            <div>
              {/* Visual díada */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 0,
                marginBottom: 32,
                padding: "28px",
                background: "#111",
                border: "1px solid #1E1E1E",
                borderRadius: 6,
              }}>
                <div style={{ textAlign: "center", flex: 1 }}>
                  <div style={{ fontSize: 10, letterSpacing: 2, color: "#555", textTransform: "uppercase", marginBottom: 10 }}>Representación del Yo</div>
                  <div style={{
                    background: "#1A1A1A",
                    border: `1px solid ${caso.acento}44`,
                    borderRadius: 4,
                    padding: "14px 18px",
                    fontSize: 13,
                    color: "#DDD",
                    lineHeight: 1.5,
                  }}>
                    {caso.diadaTroncal.yo}
                  </div>
                </div>
                <div style={{ padding: "0 20px", textAlign: "center" }}>
                  <div style={{
                    width: 40,
                    height: 1,
                    background: `linear-gradient(90deg, transparent, ${caso.acento}, transparent)`,
                    margin: "0 auto 8px",
                  }}/>
                  <div style={{ fontSize: 9, letterSpacing: 1, color: "#444", textTransform: "uppercase" }}>↔</div>
                  <div style={{
                    width: 40,
                    height: 1,
                    background: `linear-gradient(90deg, transparent, ${caso.acento}, transparent)`,
                    margin: "8px auto 0",
                  }}/>
                </div>
                <div style={{ textAlign: "center", flex: 1 }}>
                  <div style={{ fontSize: 10, letterSpacing: 2, color: "#555", textTransform: "uppercase", marginBottom: 10 }}>Representación del Otro</div>
                  <div style={{
                    background: "#1A1A1A",
                    border: `1px solid ${caso.acento}44`,
                    borderRadius: 4,
                    padding: "14px 18px",
                    fontSize: 13,
                    color: "#DDD",
                    lineHeight: 1.5,
                  }}>
                    {caso.diadaTroncal.otro}
                  </div>
                </div>
              </div>

              {/* Afecto */}
              <div style={{
                background: "#111",
                border: "1px solid #1E1E1E",
                borderRadius: 6,
                padding: "20px 24px",
                marginBottom: 16,
              }}>
                <div style={{ fontSize: 10, letterSpacing: 2, color: caso.acento, textTransform: "uppercase", marginBottom: 8 }}>
                  Afecto dominante
                </div>
                <p style={{ margin: 0, fontSize: 14, color: "#CCC", lineHeight: 1.7 }}>
                  {caso.diadaTroncal.afecto}
                </p>
              </div>

              {/* Activación */}
              <div style={{
                background: "#111",
                border: "1px solid #1E1E1E",
                borderRadius: 6,
                padding: "20px 24px",
              }}>
                <div style={{ fontSize: 10, letterSpacing: 2, color: caso.acento, textTransform: "uppercase", marginBottom: 8 }}>
                  Activación en la transferencia
                </div>
                <p style={{ margin: 0, fontSize: 14, color: "#CCC", lineHeight: 1.75 }}>
                  {caso.diadaTroncal.activacion}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
