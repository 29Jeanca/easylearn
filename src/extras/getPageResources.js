import data from '../assets/json/pageData.json'; 

const getResources = async ({resource}) => {
  try {
    const info = data[resource];
    return info;
  } catch (error) {
    console.error("Error fetching resources", error);
  }
}


export { getResources};
