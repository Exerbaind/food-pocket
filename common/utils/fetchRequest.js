export default async function fetchRequest(url, method = "GET", body = {}) {
  const dev = process.env.NODE_ENV !== "production";
  const { DEV_URL, PROD_URL } = process.env;
  const rootUrl = dev ? DEV_URL : PROD_URL;
  let data;
  let response;
  if (method === "GET") {
    try {
      data = await fetchGET(rootUrl, url, method);
      response = await data.json();
    } catch (error) {
      console.error(error);
      return { error: "Что-то пошло не так" };
    }
  }

  if (method === "POST") {
    data = await fetchPOST(rootUrl, url, method, body);
    response = await data.json();
  }

  return response;
}

const fetchGET = async (rootUrl, url, method) => {
  const response = await fetch(`${rootUrl}${url}`, {
    method,
  });

  return response;
};

const fetchPOST = async (rootUrl, url, method, body) => {
  const response = await fetch(`${rootUrl}${url}`, {
    method,
    body: JSON.stringify(body),
  });

  return response;
};
