import { Component } from "react";
import NewsPage from "./NewsPage/NewsPage";
import SearchForm from "./SearchForm/SearchForm";
import news from "../data/news.json";
import s from "./App.module.scss";

class App extends Component {
  state = {
    search: "",
  };

  handleSearch = (search) => {
    this.setState({ search });
  };

  render() {
    // console.log("Render App");
    const { search } = this.state;
    return (
      <div>
        <SearchForm handleSearch={this.handleSearch} />
        <NewsPage search={search} />
        
      </div>
    );
  }
}

export default App;
