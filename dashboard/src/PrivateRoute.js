import { useEffect, useState } from "react";

function PrivateRoute({ children }) {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        fetch("http://localhost:2020/check-auth", {
            credentials: "include"
        })
        .then(res => res.json())
        .then(data => setAuth(data.isAuthenticated))
        .catch(() => setAuth(false));
    }, []);

    if (auth === null) return null; // or a loading spinner

    if (!auth) {
        window.location.href = "http://localhost:3001/login";
        return null;
    }
    return children;
}

export default PrivateRoute;