const fetchGET = async (rootUrl, url) => {
  const response = await fetch(`${rootUrl}${url}`, {
    method: "GET",
  });

  return response;
};

const fetchPOST = async (rootUrl, url, body) => {
  const response = await fetch(`${rootUrl}${url}`, {
    method: "POST",
    body: JSON.stringify(body),
  });

  return response;
};

const fetchDELETE = async (rootUrl, url, body) => {
  const response = await fetch(`${rootUrl}${url}`, {
    method: "DELETE",
    body,
  });

  return response;
};

export default async function fetchRequest(url, method, body = {}) {
  const dev = process.env.NODE_ENV !== "production";
  const rootUrl = dev
    ? "http://localhost:3000"
    : "https://food-pocket.vercel.app";

  try {
    let data;
    let response;
    if (method === "GET") {
      data = await fetchGET(rootUrl, url);
      response = await data.json();
    }

    if (method === "POST") {
      data = await fetchPOST(rootUrl, url, body);
      response = await data.json();
    }

    if (method === "DELETE") {
      data = await fetchDELETE(rootUrl, url, body);
      response = await data.json();
    }
    return response;
  } catch (error) {
    return { error: "Что-то пошло не так" };
  }
}
