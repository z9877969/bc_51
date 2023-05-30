import { Component } from "react";
import Modal from "../Modal/Modal";
import { getSearchNewsApi } from "../../services/newsApi";
// import newslist from "../../data/news.json";
import s from "./NewsPage.module.scss";

class NewsPage extends Component {
  state = {
    news: [], // [1,2,3]
    page: 1, // 3
    searchCopy: null,
    totalResults: 0, //
    isLoading: false,
    error: null, // "message"
    isModalOpen: false,
    modalData: null, // data
  };

  static getDerivedStateFromProps(props, state) {
    if (props.search !== state.searchCopy) {
      return { page: 1, searchCopy: props.search };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.search !== this.props.search ||
      prevState.page !== this.state.page
    ) {
      this.getSeacrhNews();
    }
  }

  getSeacrhNews = () => {
    this.setState({ isLoading: true, error: null });
    getSearchNewsApi(this.props.search, this.state.page)
      .then((newsInfo) =>
        this.setState((prev) => ({
          news:
            this.state.page === 1
              ? newsInfo.articles
              : [...prev.news, ...newsInfo.articles],
          totalResults: newsInfo.totalResults,
        }))
      )
      .catch((err) => this.setState({ error: err.message }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  changePage = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  setModalData = (modalData) => {
    this.setState({ modalData });
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleOpenModal = (data) => {
    // this.openModal();
    this.setModalData(data);
  };

  closeModal = () => {
    this.setState({ modalData: null });
  };

  render() {
    // console.log("Render NewsPage");
    const { news, isLoading, error, totalResults, modalData } = this.state;
    return (
      <>
        {isLoading && <h1>Loading...</h1>}
        {error ? (
          <h1>{error}</h1>
        ) : (
          <ul className={s.news}>
            {news.map((item, idx) => (
              <li
                key={idx}
                className={s.item}
                onClick={() =>
                  this.handleOpenModal({ title: item.title, url: item.url })
                }
              >
                <img className={s.img} src={item.urlToImage} alt="" />
                <div className={s.textWrapper}>
                  <h3 className={s.title}>{item.title}</h3>
                  <p className={s.author}>{item.author}</p>
                  <p className={s.date}>{item.publishedAt}</p>
                  <p className={s.descr}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {totalResults > news.length && (
          <button className={s.btn} type="button" onClick={this.changePage}>
            More
          </button>
        )}
        {modalData && (
          <Modal closeModal={this.closeModal} modalData={modalData} />
        )}
      </>
    );
  }
}

export default NewsPage;
