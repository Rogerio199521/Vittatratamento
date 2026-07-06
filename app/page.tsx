export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      <section
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/clinica.jpg') center/cover",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Vitta Tratamento
        </h1>

        <h2 style={{ fontSize: "28px", maxWidth: "700px" }}>
          Transformando vidas através do tratamento especializado para
          dependência química e alcoólica
        </h2>

        <p style={{ fontSize: "20px", maxWidth: "600px", marginTop: "20px" }}>
          Uma equipe preparada para acolher, cuidar e ajudar você ou sua
          família a encontrar um novo caminho.
        </p>

        <button
          style={{
            marginTop: "30px",
            width: "250px",
            padding: "15px",
            fontSize: "18px",
            borderRadius: "8px",
            border: "none",
            background: "#25D366",
            color: "white",
            cursor: "pointer",
          }}
        >
          Falar no WhatsApp
        </button>
      </section>

      <section style={{ padding: "50px", textAlign: "center" }}>
        <h2>Tratamento com acolhimento e segurança</h2>
        <p>
          Atendimento humanizado para pessoas que buscam recuperação e uma
          nova oportunidade de vida.
        </p>
      </section>
    </main>
  );
}