import {useState} from "react"
import axios from 'axios';


/* will flip/draw a card */
function useFlip() {
  const [isFlipped, setIsFlipped] = useState(true);

  const toggleFlip = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return [isFlipped, toggleFlip];
}

function useAxios(baseUrl) {
  const [data, setData] = useState([]);

  const add = async (urlSuffix = "") => {
    try {
      const response = await axios.get(`${baseUrl}${urlSuffix}`);
      setData((data) => [...data, response.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return [data, add];
}

export {useFlip, useAxios};