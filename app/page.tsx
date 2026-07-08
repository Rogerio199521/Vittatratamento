export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <img
          src="/images/banner.jpeg"
          alt="Vitta Tratamento"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            textAlign: "center",
            color: "white",
          }}
        ><img
  src="/logo/logo-vitta.jpeg"
  alt="Logo Vitta"
  style={{
    width: "130px",
    margin: "0 auto 20px auto",
    display: "block",
  }}
/>
          <h1 style={{ fontSize: "42px" }}>
            Vitta Tratamento
          </h1>

          <p style={{ fontSize: "20px" }}>
            Transformando vidas através do tratamento especializado para
            dependência química e alcoólica.
          </p>

          <a
            href="https://wa.me/5521995230950"
            style={{
              display: "inline-block",
              marginTop: "30px",
              padding: "15px 35px",
              background: "#25D366",
              color: "white",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <section
        style={{
          background: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2>Sobre a Vitta Tratamento</h2>

        <p>
          Tratamento especializado para dependência química e alcoólica,
          com acolhimento, segurança e acompanhamento profissional.
        </p>
      </section>

      <section
        style={{
          background: "#f5f5f5",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
       <h2>Nossos diferenciais</h2>

<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
  }}
>
  {[
    "🧠 Psicólogo e acompanhamento emocional",
    "🩺 Psiquiatra especializado",
    "👩‍⚕️ Enfermagem 24 horas",
    "🏠 Hospedagem e ambiente seguro",
    "🍽️ Alimentação inclusa",
    "🤝 Equipe preparada para acolher você e sua família",
  ].map((item) => (
    <div
      key={item}
      style={{
        background: "white",
        width: "260px",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <p>{item}</p>
    </div>
  ))}
</div>
      </section>

      <section
        style={{
          background: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >{/* 4 - COMO FUNCIONA O TRATAMENTO */}
<section
  style={{
    background: "white",
    padding: "60px 20px",
    textAlign: "center",
  }}
>
  <h2>Como funciona o tratamento</h2>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      marginTop: "30px",
    }}
  >
    <div
      style={{
        width: "260px",
        padding: "25px",
        borderRadius: "15px",
        background: "#f5f5f5",
      }}
    >
      <h3>1. Avaliação inicial</h3>
      <p>
        Entendemos a situação de cada pessoa para oferecer o melhor caminho
        de tratamento.
      </p>
    </div>

    <div
      style={{
        width: "260px",
        padding: "25px",
        borderRadius: "15px",
        background: "#f5f5f5",
      }}
    >
      <h3>2. Acompanhamento profissional</h3>
      <p>
        Uma equipe preparada acompanha cada etapa do processo de recuperação.
      </p>
    </div>

    <div
      style={{
        width: "260px",
        padding: "25px",
        borderRadius: "15px",
        background: "#f5f5f5",
      }}
    >
      <h3>3. Recuperação e transformação</h3>
      <p>
        Um ambiente seguro para construir uma nova oportunidade de vida.
      </p>
    </div>
  </div>
</section>
        <h2>Entre em contato</h2>

        <a
          href="https://wa.me/5521995230950"
          style={{
            display: "inline-block",
            padding: "15px 35px",
            background: "#25D366",
            color: "white",
            borderRadius: "30px",
            textDecoration: "none",
          }}
        >
          WhatsApp (21) 99523-0950
        </a>
      </section>
    {/* UNIDADE 1 - FOTOS */}
<section
  style={{
    background: "white",
    padding: "60px 20px",
    textAlign: "center",
  }}
>
  <h2>Nossa estrutura</h2>

  <p>
   Estrutura preparada para oferecer acolhimento, segurança e conforto durante todo o processo de tratamento.
  </p>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      marginTop: "30px",
    }}
  >
    {[
      "01.jpg",
      "02.jpg",
      "03.jpg",
      "04.jpg",
      "05.jpg",
      "06.jpg",
    ].map((foto) => (
      <img
        key={foto}
        src={"/fotos/" + foto}
        alt="Unidade 1 Vitta"
        style={{
          width: "300px",
          height: "220px",
          objectFit: "cover",
          borderRadius: "15px",
        }}
      />
    ))}
  </div>
</section>

{/* UNIDADE 2 - FOTOS */}
<section
  style={{
    background: "#f5f5f5",
    padding: "60px 20px",
    textAlign: "center",
  }}
>
  <h2>Unidade 2</h2>

  <p>
    Um espaço preparado para oferecer cuidado, segurança e acompanhamento
    durante o tratamento.
  </p>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      marginTop: "30px",
    }}
  >
    {[
      "07.jpg",
      "08.jpg",
      "09.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
    ].map((foto) => (
      <img
        key={foto}
        src={"/unidade2/" + foto}
        alt="Unidade 2 Vitta"
        style={{
          width: "300px",
          height: "220px",
          objectFit: "cover",
          borderRadius: "15px",
        }}
      />
    ))}
  </div>
</section>
{/* OUTRAS UNIDADES */}
<section
  style={{
    background: "white",
    padding: "40px 20px",
    textAlign: "center",
  }}
>
  <h2>Outras unidades</h2>

  <p>
    A Vitta Tratamento possui outras unidades e estruturas disponíveis.
    Entre em contato com nossa equipe pelo WhatsApp para conhecer mais opções.
  </p>

  <a
    href="https://wa.me/5521995230950"
    style={{
      display: "inline-block",
      marginTop: "20px",
      padding: "15px 35px",
      background: "#25D366",
      color: "white",
      borderRadius: "30px",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    Conhecer outras unidades
  </a>
</section>
{/* PERGUNTAS FREQUENTES */}
<section
  style={{
    background: "#f5f5f5",
    padding: "60px 20px",
    textAlign: "center",
  }}
>
  <h2>Perguntas frequentes</h2>

  <div
    style={{
      maxWidth: "800px",
      margin: "30px auto 0",
      textAlign: "left",
    }}
  >
    <h3>Como funciona o tratamento?</h3>
    <p>
      O tratamento é realizado com acompanhamento profissional,
      acolhimento e uma rotina preparada para auxiliar no processo de
      recuperação.
    </p>

    <h3>A família recebe acompanhamento?</h3>
    <p>
      Sim. A família recebe orientações para participar de forma positiva
      durante o processo.
    </p>

    <h3>Quais profissionais acompanham o paciente?</h3>
    <p>
      A equipe conta com profissionais preparados, incluindo psicólogo,
      psiquiatra e enfermagem 24 horas.
    </p>

    <h3>Como faço para saber mais informações?</h3>
    <p>
      Entre em contato pelo WhatsApp. Nossa equipe irá orientar sobre o
      tratamento e as opções disponíveis.
    </p>
  </div>
</section>
{/* DEPOIMENTOS */}
<section
  style={{
    background: "white",
    padding: "60px 20px",
    textAlign: "center",
  }}
>
  <h2>Histórias de transformação</h2>

  <p>
    Cada história representa uma nova oportunidade de recomeço.
  </p>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      marginTop: "30px",
    }}
  >
    <div
      style={{
        background: "#f5f5f5",
        padding: "25px",
        borderRadius: "15px",
        width: "280px",
      }}
    >
      <p>
        "Um ambiente de acolhimento e cuidado para quem busca uma nova
        oportunidade de vida."
      </p>
      <strong>Família Vitta</strong>
    </div>

    <div
      style={{
        background: "#f5f5f5",
        padding: "25px",
        borderRadius: "15px",
        width: "280px",
      }}
    >
      <p>
        "O acompanhamento profissional faz toda diferença durante o
        processo de recuperação."
      </p>
      <strong>Família Vitta</strong>
    </div>

    <div
      style={{
        background: "#f5f5f5",
        padding: "25px",
        borderRadius: "15px",
        width: "280px",
      }}
    >
      <p>
        "Um novo caminho começa com apoio, cuidado e orientação."
      </p>
      <strong>Família Vitta</strong>
    </div>
  </div>
</section>
{/* 5 - RODAPÉ */}
<footer
  style={{
    background: "#222",
    color: "white",
    padding: "40px 20px",
    textAlign: "center",
  }}
>
  <h2>Vitta Tratamento</h2>

  <p>
    Transformando vidas através do tratamento especializado para
    dependência química e alcoólica.
  </p>

  <p>
    WhatsApp: (21) 99523-0950
  </p>

  <a
    href="https://wa.me/5521995230950"
    style={{
      display: "inline-block",
      marginTop: "20px",
      padding: "12px 30px",
      background: "#25D366",
      color: "white",
      borderRadius: "30px",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    Falar com a Vitta
  </a>

  <p
    style={{
      marginTop: "30px",
      fontSize: "14px",
    }}
  >
    © 2026 Vitta Tratamento - Todos os direitos reservados.
  </p>
</footer>

{/* WHATSAPP FLUTUANTE */}
<a
  href="https://wa.me/5521995230950"
  style={{
    position: "fixed",
    right: "20px",
    bottom: "20px",
    background: "#25D366",
    color: "white",
    padding: "15px 22px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
    zIndex: 1000,
  }}
>
  WhatsApp
</a>

</main>
  );
}