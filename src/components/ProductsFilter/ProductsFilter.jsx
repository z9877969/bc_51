import "./ProductsFilter.css";

const ProductsFilter = () => {
  return (
    <div className="filter">
      <ul className="filter-list">
        <li className="filter-item">
          <input
            className="filter-input"
            name="filter"
            value="apple"
            type="checkbox"
            id="apple"
          />
          <label className="filter-label" htmlFor="apple">
            Apple
          </label>
        </li>
        <li className="filter-item">
          <input
            className="filter-input"
            name="filter"
            value="xiaomi"
            type="checkbox"
            id="xiaomi"
          />
          <label className="filter-label" htmlFor="xiaomi">
            Xiaomi
          </label>
        </li>
        <li className="filter-item">
          <input
            className="filter-input"
            name="filter"
            value="samsung"
            type="checkbox"
            id="samsung"
          />
          <label className="filter-label" htmlFor="samsung">
            Samsung
          </label>
        </li>
        <li className="filter-item">
          <input
            className="filter-input"
            name="filter"
            value="zte"
            type="checkbox"
            id="zte"
          />
          <label className="filter-label" htmlFor="zte">
            Zte
          </label>
        </li>
        <li className="filter-item">
          <input
            className="filter-input"
            name="filter"
            value="huawei"
            type="checkbox"
            id="huawei"
          />
          <label className="filter-label" htmlFor="huawei">
            Huawei
          </label>
        </li>
      </ul>
    </div>
  );
};

export default ProductsFilter;
