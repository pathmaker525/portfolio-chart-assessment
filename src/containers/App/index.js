import HighchartContainer from "containers/Chart";

const AppContainer = () => {
  return (
    <div className="app">
      <h1>Eden Predict Assessment</h1>
      <div className="app-body">
        <HighchartContainer />
      </div>
    </div>
  );
};

export default AppContainer;
