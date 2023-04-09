import axios from "axios";
import { IInfo } from "./signin.types";

export const onClickSubmit =
    ({ email, password, navigate }: IInfo) =>
    async () => {
        try {
            const result = await axios({
                method: "post",
                url: " http://localhost:8000/auth/signin",
                headers: { "Content-Type": "application/json" },
                data: { email, password },
            });
            localStorage.setItem("access_token", result.data.access_token);
            if (result.status === 200)
                navigate("/todo", {
                    state: {
                        access_token: result.data.access_token,
                    },
                });
        } catch (error) {
            alert(error);
        }
    };
