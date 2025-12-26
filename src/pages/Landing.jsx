import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Habit Mood Tracker</h1>
      <p>Build habits. Track emotions. Grow daily.</p>

      <button style={styles.button} onClick={() => navigate("/sign-in")}>
        Sign in
      </button>
      {/* Install hint */}
      <div className="mt-6 text-center text-slate-400 text-sm">
        <p>
          📱 You can install this app on your phone or desktop for a better
          experience.
        </p>
        <p className="mt-1">
          Open this link in Chrome and choose{" "}
          <span className="text-indigo-400">“Add to Home Screen”</span>.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#0f172a",
    color: "white",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
