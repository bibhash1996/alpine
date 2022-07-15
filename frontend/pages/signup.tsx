import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState<{
    hasError: boolean;
    message: string;
  }>({ hasError: false, message: "" });

  const signup = async () => {
    setLoading(true);
    var data = JSON.stringify({
      email,
      password,
    });
    var config = {
      method: "post",
      url: "http://localhost:8080/api/auth/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      const response = await axios(config);
      console.log(response.data);
      if (response.data.status === "ok") {
        router.push("/login");
      } else {
        setLoading(false);
        setError({
          hasError: true,
          message: response.data.error.message || "Error signing up",
        });
      }
    } catch (error) {
      setLoading(false);
      setError({
        hasError: true,
        message: (error as any).message || "Error signing up.",
      });
    }
  };

  return (
    <div className="form-box">
      <input
        placeholder="Email"
        type={"email"}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <input
        placeholder="Password"
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button onClick={signup} disabled={loading} className="nextBtn">
        {loading ? "Loading ..." : "Sign up"}
      </button>

      <button
        onClick={() => router.push("/login")}
        disabled={loading}
        className="prevBtn"
      >
        Go to Login
      </button>

      {error.hasError && <p>{error.message}</p>}
    </div>
  );
}
