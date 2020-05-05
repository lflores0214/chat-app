import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);


    const modifiedData = {
        confirmed:confirmed,
        recoverd: recovered,
        deaths:deaths,
        lastUpdate:lastUpdate
    }
    return modifiedData;
  } catch (error) {}
};
