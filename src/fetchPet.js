import axios from "axios";
const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await axios.get("https://pets-v2.dev-apis.com/pets", {
    params: {
      id: id,
    },
  });

  if (apiRes.status !== 200) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.data;
};

export default fetchPet;
