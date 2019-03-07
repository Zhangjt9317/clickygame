import React, { Component } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Title from "./components/Title";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards.json array
  state = {
    cards
  };

  render() {
    return (
      <Header />
      <Title />
      {this.state.cards.map(card => (
        <Cards
          image={card.image}
        />
      ))
    }
    <Footer />
    )
  }
}

export default App;