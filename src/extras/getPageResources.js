import data from '../assets/json/pageData.json'; 
import grammarTopics from '../assets/json/grammarTopics.json'
const getResources = async ({resource}) => {
  try {
    const info = data[resource];
    return info;
  } catch (error) {
    console.error("Error fetching resources", error);
  }
}
const getGrammarTopics = async()=>{
  try {
      const info = grammarTopics.topics
      return info
  } catch (error) {
      console.error("Error fetching resources", error);
  }
}

export { getResources, getGrammarTopics };
