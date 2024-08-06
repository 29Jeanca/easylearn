import data from '../assets/json/pageData.json'; 
import grammarTopics from '../assets/json/grammarTopics.json'
import grammarExercises from '../assets/json/grammarPractice.json'
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
const getGrammarExercises = async()=>{
  try {
    const info = grammarExercises.grammarPractice
    return info
  } catch (error) {
    console.error("Error fetching resources", error);
  }
}
const getGrammarAnswers = async (id) => {
  try {
    const info = grammarExercises.grammarPractice;
    const exercise = info.find(exercise => exercise.id === id);
    return exercise ? exercise.options : [];
  } catch (error) {
    console.error("Error fetching resources", error);
  }
};
const getCorrectGrammarAnswer = async (id) => {
  try {
    const info = grammarExercises.grammarPractice;
    const exercise = info.find(exercise => exercise.id === id);
    return exercise ? exercise.answer : [];
  } catch (error) {
    console.error("Error fetching resources", error);
  }
}



export { getResources, getGrammarTopics, getGrammarExercises, getGrammarAnswers, getCorrectGrammarAnswer };
