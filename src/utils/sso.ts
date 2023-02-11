import Authorization from "./auth";
import { subBefore, getQueryMap } from "@pureadmin/utils";

(function () {
  const params = getQueryMap(location.href);
  const must = ["username", "roles", "accessToken"];
  const mustLength = must.length;
  if (Object.keys(params).length !== mustLength) return;

  let sso = [];
  let start = 0;

  while (start < mustLength) {
    if (Object.keys(params).includes(must[start]) && sso.length <= mustLength) {
      sso.push(must[start]);
    } else {
      sso = [];
    }
    start++;
  }

  if (sso.length === mustLength) {
    Authorization.removeAllTokens();
    // TODO Fix this
    Authorization.setToken(params, params, params);

    delete params["roles"];
    delete params["accessToken"];

    const newUrl = `${location.origin}${location.pathname}${subBefore(
      location.hash,
      "?"
    )}?${JSON.stringify(params)
      .replace(/["{}]/g, "")
      .replace(/:/g, "=")
      .replace(/,/g, "&")}`;

    window.location.replace(newUrl);
  } else {
    return;
  }
})();
