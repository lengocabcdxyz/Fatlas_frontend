export default function Footer() {
  return (
    <footer style={styles.footer}>
      {/* LEFT */}
      <div style={styles.left}>
        <h3 style={styles.title}>DiagramApp</h3>
        <p>Visualize your ideas</p>
        <p style={styles.email}>Email: support@fatlas.com</p>
      </div>

      {/* CENTER */}
      <div style={styles.center}>
        <div>
          <h4>Product</h4>
          <p>Features</p>
          <p>Pricing</p>
          <p>Getting Started</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>Contact</p>
          <p>Help</p>
          <p>Terms</p>
        </div>
      </div>
    </footer>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 30px",
    backgroundColor: "#334155", // giống header
    color: "white",
    borderRadius: "12px",
    margin: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },

  left: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  title: {
    margin: 0,
  },

  email: {
    marginTop: "10px",
    fontSize: "14px",
    opacity: 0.8,
  },

  center: {
    display: "flex",
    gap: "60px", // 2 cột Product + Support
  },
};