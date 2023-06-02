import { useEffect, useState } from "react";
import "./App.scss";
import Homepage from "./pages/home";
import LoadingBar from "react-top-loading-bar";
function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  useEffect(() => {
    const simulateLoading = () => {
      setLoadingProgress(0); // Reset progress
      const progressInterval = setInterval(() => {
        setLoadingProgress(prevProgress => prevProgress + 10); // Increment progress by 10 (adjust as needed)
      }, 500); // Adjust the interval based on your loading logic
  
      // Simulate loading completion after 3 seconds (replace this with your actual loading completion logic)
      setTimeout(() => {
        clearInterval(progressInterval);
        setLoadingProgress(100); // Set progress to 100 (loading complete)
      }, 3000); // Adjust the duration based on your loading logic
    };
  
    simulateLoading(); // Call the loading simulation function
  }, []);
  return (
    <div className="App">
       <LoadingBar
        color="white"
        progress={loadingProgress}
      />
      <Homepage />
    </div>
  );
}

export default App;
