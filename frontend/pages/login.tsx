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

  const login = async () => {
    setLoading(true);
    var data = JSON.stringify({
      email,
      password,
    });
    var config = {
      method: "post",
      url: "http://localhost:8080/api/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      const response = await axios(config);
      console.log(response.data);
      if (response.data.status === "ok") {
        window.localStorage.setItem("token", response.data.data.token);
        router.push("/");
      } else {
        setLoading(false);
        setError({
          hasError: true,
          message: response.data.error.message || "Error loggong in",
        });
      }
    } catch (error) {
      setLoading(false);
      setError({
        hasError: true,
        message: (error as any).message || "Error loggong in",
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

      <button onClick={login} disabled={loading} className="nextBtn">
        {loading ? "Loading ..." : "Log in"}
      </button>
      <button
        onClick={() => router.push("/signup")}
        disabled={loading}
        className="prevBtn"
      >
        Go to Signup
      </button>
      {error.hasError && <p>{error.message}</p>}
    </div>
  );
}
