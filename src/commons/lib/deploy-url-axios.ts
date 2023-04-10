import axios from "axios";

const baseURL = "https://www.pre-onboarding-selection-task.shop";

export const DeployUrlAxios = axios.create({ baseURL });
