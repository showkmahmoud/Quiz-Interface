export const getQuizzes = async () =>{
    try {
        const response = await fetch('http://localhost:3000/data/quizData.json');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
  }