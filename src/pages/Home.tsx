import homeImage from "../assets/home_background.jpg";


const Home = () => {
  return (
    <div style={styles.hero}>
      {/* LEFT CONTENT */}
      <div style={styles.left}>
        <h1 style={styles.title}>
          Scan text from images instantly
        </h1>

        <p style={styles.desc}>
          Fatlas helps you extract text from images and show meanings instantly.
          Just upload an image and get results in seconds.
        </p>

        <button style={styles.button}>
          Get Started
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div style={styles.right}>
        <img src={homeImage} style={styles.image} />
      </div>
      
    </div>
  );
};

export default Home;

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "60px 40px",
    gap: "40px",
  },

  left: {
    flex: 1,
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
  },

  title: {
    fontSize: "36px",
    marginBottom: "15px",
  },

  desc: {
    fontSize: "16px",
    opacity: 0.7,
    marginBottom: "20px",
    lineHeight: "1.5",
  },

  button: {
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#334155",
    color: "white",
  },
};