import axios from "axios";
import { IInfo } from "./signup.types";

export const onClickSubmit =
    ({ email, password, navigate }: IInfo) =>
    async () => {
        try {
            await axios({
                method: "post",
                url: "http://localhost:8000/auth/signup",
                headers: { "Content-Type": "application/json" },
                data: { email, password },
            });
            navigate("/signin");
        } catch (error) {
            alert(error);
        }
    };
