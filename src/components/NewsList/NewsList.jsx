const NewsList = ({ news }) => {
  return (
    <ul>
      {news.map((el, idx) => (
        <li key={el.url}>
          <span>{idx + 1}. </span>
          <a href={el.url}>{el.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
