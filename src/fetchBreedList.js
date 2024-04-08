import axios from "axios";
async function fetchBreedList({ queryKey }) {
  const animal = queryKey[1];

  if (!animal) return [];

  const res = await axios.get("https://pets-v2.dev-apis.com/breeds", {
    params: {
      animal: animal,
    },
  });

  if (res.status !== 200) {
    throw new Error(`breeds ${animal} fetch not ok`);
  }

  return res.data;
}

export default fetchBreedList;
