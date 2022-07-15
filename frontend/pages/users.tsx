import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function users() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState<{
    hasError: boolean;
    message: string;
  }>({ hasError: false, message: "" });

  const getUsers = async () => {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        // Fetch profle
        var config = {
          method: "get",
          url: "http://localhost:8080/api/alpine/list",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios(config);
        console.log(response.data.data);
        if (response.data.status === "ok") {
          //
          setUsers(response.data.data);
        } else {
          setError({ hasError: true, message: response.data.error.message });
        }
      } else {
        router.push("/login");
      }
    } catch (error: any) {
      console.log("Error : ", error);

      if (error.response && error.response.status == 401) {
        router.push("/login");
      }
      setError({ hasError: true, message: error.response.data.error.message });
    }
  };

  useEffect(() => {
    getUsers().then();
  }, []);

  return (
    <div className="form-box">
      {error.hasError && <p>{error.message}</p>}
      {users.map((user: any, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            flexDirection: "row",
            width: "90%",
            margin: "10px",
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        >
          <div>
            <p>First name</p>
            <p>{user.firstName}</p>
          </div>
          <div style={{ marginLeft: 10 }}>
            <p>Last name</p>
            <p>{user.lastName}</p>
          </div>
          <div style={{ marginLeft: 10 }}>
            <p>Email</p>
            <p>{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
