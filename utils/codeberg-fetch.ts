import { $fetch } from "ofetch";
export const $codeberg = $fetch.create({
  baseURL: "https://codeberg.org/api/v1/repos/Andre601/AdvancedServerList",
  headers: {
    "User-Agent": "AdvancedServerList API <https://github.com/Andre601>",
    Accept: "application/json",
  },
});
