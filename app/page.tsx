export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "600px",
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
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h1
            style={{
              fontSize: "52px",
              marginBottom: "20px",
            }}
          >
            Vitta Tratamento
          </h1>

          <h2
            style={{
              fontSize: "28px",
              maxWidth: "900px",
              marginBottom: "20px",
            }}
          >
            Transformando vidas através do tratamento especializado para dependência química e alcoólica
          </h2>

          <p
            style={{
              fontSize: "20px",
              maxWidth: "700px",
              marginBottom: "30px",
            }}
          >
            Uma equipe preparada para acolher, cuidar e ajudar você ou sua família a encontrar um novo caminho.
          </p>

          <a
            href="https://wa.me/5521995230950"
            style={{
              background: "#25D366",
              color: "#fff",
              padding: "15px 35px",
              borderRadius: "10px",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <section
        style={{
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "20px",
          }}
        >
          Tratamento com acolhimento e segurança
        </h2>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "800px",
            margin: "auto",
          }}
        >
          Atendimento humanizado para pessoas que buscam recuperação e uma nova oportunidade de vida.
        </p>
      </section>
    </main>
  );
}