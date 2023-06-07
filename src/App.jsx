import { useEffect, useState } from "react";
import "./App.scss";
import Homepage from "./pages/home";
import LoadingBar from "react-top-loading-bar";
function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  useEffect(() => {
    const simulateLoading = () => {
      setLoadingProgress(0);
      const progressInterval = setInterval(() => {
        setLoadingProgress(prevProgress => prevProgress + 10); 
      }, 500);
      setTimeout(() => {
        clearInterval(progressInterval);
        setLoadingProgress(100);
      }, 3000); 
    };
  
    simulateLoading();
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
