import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1f1a",
        color: "white",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
    <img
  src="/vitta.jpeg"
  alt="Vitta Tratamento"
  />
        width={900}
        height={500}
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "auto",
          borderRadius: "20px",
          marginBottom: "30px",
        }}
      

      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Vitta Tratamento
      </h1>

      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Recuperação, acolhimento e transformação de vidas
      </h2>

      <p
        style={{
          fontSize: "20px",
          maxWidth: "700px",
          margin: "0 auto 40px",
          lineHeight: "1.6",
        }}
      >
        Tratamento especializado para dependência química e alcoólica,
        com uma equipe preparada para acolher, cuidar e ajudar você ou sua
        família a encontrar um novo caminho.
      </p>

      <button
        style={{
          background: "#25D366",
          color: "white",
          border: "none",
          padding: "16px 35px",
          borderRadius: "30px",
          fontSize: "18px",
        }}
      >
        Falar no WhatsApp
      </button>
    </main>
  );
}