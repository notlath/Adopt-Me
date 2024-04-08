import axios from "axios";

async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];

  const res = await axios.get("https://pets-v2.dev-apis.com/pets", {
    params: { animal: animal, location: location, breed: breed },
  });

  if (res.status !== 200) {
    throw new Error(`Pet search not okay ${animal}, ${location}, ${breed}`);
  }
  return res.data;
}

export default fetchSearch;
