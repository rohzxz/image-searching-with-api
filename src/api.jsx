import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID et0AR9YQk73eSATCBbMdnmQJghnqr9Wb_cmvCxAyAVs",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
