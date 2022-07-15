import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  createDate: Date;
  updateDate: Date;
}

const Home: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<{ hasError: boolean; message: string }>({
    hasError: false,
    message: "",
  });

  const getUser = async (token: string) => {
    setLoading(true);
    var config = {
      method: "get",
      url: "http://localhost:8080/api/alpine/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios(config);
    console.log(response.data);
    setLoading(false);
    if (response.data.status === "ok") {
      setUser(response.data.data);
    } else {
      setError({ hasError: true, message: response.data.error.message });
    }
    // return response.data;
  };

  useEffect(() => {
    setError({ hasError: false, message: "" });
    const token = window.localStorage.getItem("token");
    if (token) {
      // Fetch profle
      getUser(token)
        .then((response) => {})
        .catch((err) => {
          setLoading(false);
          console.log(err);
          if (err.response && err.response.status == 401) {
            router.push("/login");
          }
        });
    } else {
      router.push("/login");
    }
  }, []);

  const updateUser = async () => {
    if (!user) return;
    setLoading(true);
    setError({ hasError: false, message: "" });
    const token = window.localStorage.getItem("token");
    if (!token) return;
    var data = JSON.stringify({
      firstName: user.firstName,
      lastName: user.lastName,
    });

    var config = {
      method: "post",
      url: "http://localhost:8080/api/alpine/profile",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      const response = await axios(config);
      setLoading(false);
      if (response.data.status !== "ok") {
        setError({
          hasError: true,
          message: response.data.error.message,
        });
        getUser(token).then();
      }
    } catch (err: any) {
      setLoading(false);
      setError({
        hasError: true,
        message: err.message || "Error updating profile",
      });
    }
  };

  const onLogout = async () => {
    window.localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className={styles.container}>
      {error.hasError && <p>{error.message}</p>}

      {user && (
        <div className="form-box">
          <button onClick={onLogout} className="btn">
            Log out
          </button>
          <input
            placeholder="First name"
            value={user.firstName}
            onChange={(e) =>
              setUser({
                ...user,
                firstName: e.target.value,
              })
            }
          />

          <input
            placeholder="Last name"
            value={user.lastName}
            onChange={(e) =>
              setUser({
                ...user,
                lastName: e.target.value,
              })
            }
          />

          <input
            placeholder="Email"
            value={user.email}
            onChange={(e) => {}}
            disabled
          />

          <button onClick={updateUser} disabled={loading} className="nextBtn">
            {loading ? "Loading..." : "Update Profile"}
          </button>
          <button
            onClick={() => router.push("/users")}
            disabled={loading}
            className="prevBtn"
          >
            See all users
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
