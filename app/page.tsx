export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <img
        src="/images/vitta.jpeg"
        alt="Vitta Tratamento"
        width={900}
        height={500}
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "auto",
          borderRadius: "20px",
          marginBottom: "30px",
        }}
      />

      <h1
        style={{
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        Vitta Tratamento
      </h1>

      <h2
        style={{
          fontSize: "28px",
          marginBottom: "20px",
        }}
      >
        Transformando vidas através do tratamento especializado para dependência química e alcoólica
      </h2>

      <p
        style={{
          fontSize: "20px",
          maxWidth: "700px",
          margin: "0 auto 30px",
        }}
      >
        Uma equipe preparada para acolher, cuidar e ajudar você ou sua família a encontrar um novo caminho.
      </p>

      <a
        href="https://wa.me/5521995230950"
        style={{
          display: "inline-block",
          padding: "15px 30px",
          background: "#25D366",
          color: "#fff",
          borderRadius: "10px",
          textDecoration: "none",
          fontSize: "20px",
        }}
      >
        Falar no WhatsApp
      </a>

      <section
        style={{
          marginTop: "50px",
        }}
      >
        <h2>Tratamento com acolhimento e segurança</h2>
        <p>
          Atendimento humanizado para pessoas que buscam recuperação e uma nova oportunidade de vida.
        </p>
      </section>
    </main>
  );
}