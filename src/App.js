import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { latitude: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => this.setState({ latitude: pos.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    return (
      <div>
        {this.state.latitude === null ? (
          this.state.errorMessage === "" ? (
            <Spinner message="Pl. accept location request" />
          ) : (
            <h1>Error: {this.state.errorMessage}</h1>
          )
        ) : (
          <SeasonDisplay lat={this.state.latitude} />
        )}
      </div>
    );
  }
}

export default App;

//state can be initialised using either constructor or state obj inside class

/*


 */
