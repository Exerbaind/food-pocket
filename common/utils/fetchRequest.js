export default async function fetchRequest(url, method = "GET") {
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

  return response;
}

const fetchGET = async (rootUrl, url, method) => {
  const data = await fetch(`${rootUrl}${url}`, {
    method,
  });

  return data;
};
