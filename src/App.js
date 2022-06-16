import "./App.css";
import resumeData from "./data/resumeData";
import Header from "./components/Header/Header";
import Work from "./components/Work/Work";

const { headerData, workData } = resumeData;

function App() {
  return (
    <div className="app">
      <Header
        name={headerData.name}
        jobTitle={headerData.jobTitle}
        email={headerData.email}
        phoneNumber={headerData.phoneNumber}
        links={headerData.contactLinks}
      ></Header>
      <Work jobs={workData}></Work>
    </div>
  );
}

export default App;
