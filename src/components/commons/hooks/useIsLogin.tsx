import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useIsLogin = () => {
    const navigate = useNavigate();
    const isLogin = localStorage.getItem("access_token");

    useEffect(() => {
        if (isLogin) navigate("/todo");
    }, []);
};
