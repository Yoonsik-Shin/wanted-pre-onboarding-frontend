import { DeployUrlAxios } from "../../../../commons/lib/deploy-url-axios";
import { IInfo } from "./signin.types";

export const onClickSubmit =
    ({ email, password, navigate }: IInfo) =>
    async () => {
        try {
            const result = await DeployUrlAxios({
                method: "post",
                url: "/auth/signin",
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
