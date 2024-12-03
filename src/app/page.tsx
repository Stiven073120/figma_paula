export default function HomePage() {
  return (
      <div style={{ padding: "20px" }}>
          <div
              style={{
                  border: "2px solid #ccc",
                  borderRadius: "40px",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
              }}
          >
              <button style={{ padding: "10px 20px", cursor: "pointer" }}>Tienda</button>
              <button style={{ padding: "10px 20px", cursor: "pointer" }}>Tipos de Plantas</button>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <input
                      type="text"
                      name="query"
                      placeholder="Buscar tu planta favorita..."
                      style={{
                          padding: "15px",
                          borderRadius: "40px",
                          border: "1px solid #ccc",
                          width: "500px",
                      }}
                  />
                  <button type="submit" style={{ padding: "10px 10px", cursor: "pointer" }}>
                      Buscar
                  </button>
              </div>
          </div>
      </div>
  );
}