import React, { useState } from "react";
import Table from "../Table/Table";
import { useSelector } from "react-redux";
import "./DisplayData.css";
const DisplayData = () => {
  //using useSelector to fetch the data stored using redux store.
  const data = useSelector((state) => state.data);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);
  //For Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    filterData(searchTerm, selectedCategory);
  };

  const handleCategoryChange = (e) => {
    const category = parseInt(e.target.value);
    setSelectedCategory(category);
    filterData(searchTerm, category);
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filterData = (searchTerm, category) => {
    let filteredData = data;
    // This is a conditional to check if the filter is set to show none
    if (category === 0) {
      filteredData = [];
    }
    if (category !== 0) {
      filteredData = filteredData.filter(
        (item) => item.userId === parseInt(category)
      );
    }
    //This conditional checks if the filder is set to show all
    if (category === 11) {
      filteredData = data;
    }
    //takes user input and filters the data table.
    if (searchTerm) {
      filteredData = filteredData.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.body.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(filteredData);
    setCurrentPage(1);
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={currentPage === i ? "active" : "pages"}
          onClick={() => handlePagination(i)}
        >
          {i}
        </li>
      );
    }

    return <ul className="pagination">{pageNumbers}</ul>;
  };

  return (
    <div>
      <div className="search_filter_container">
        <div className="search">
          <input
            type="text"
            placeholder="Search by Title or Body"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="filter">
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value={0}>Show None</option>
            <option value={1}>User 1</option>
            <option value={2}>User 2</option>
            <option value={3}>User 3</option>
            <option value={4}>User 4</option>
            <option value={5}>User 5</option>
            <option value={6}>User 6</option>
            <option value={7}>User 7</option>
            <option value={8}>User 8</option>
            <option value={9}>User 9</option>
            <option value={10}>User 10</option>
            <option value={11}>Show All</option>
          </select>
        </div>
      </div>
      {filteredData.length > 0 ? (
        <>
          <Table details={currentItems} />
          {renderPagination()}
        </>
      ) : (
        <p>No data to Show.</p>
      )}
    </div>
  );
};

export default DisplayData;
