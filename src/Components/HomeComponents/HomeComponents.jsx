import React, { useState } from 'react';
import { MdNotifications } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { BiSolidLike } from "react-icons/bi";
import { PiEyeFill } from "react-icons/pi";
import { MdSave } from "react-icons/md"; 
import images from '../../Data/Data.js'
import '../HomeComponents/NavigationComponents.css';
import '../HomeComponents/FilterComponents.css';
import '../HomeComponents/HomeComponents.css';

const HomeComponents = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLikes, setImageLikes] = useState(images.map(image => image.likes));
  const [searchTerm, setSearchTerm] = useState('');
  const [searchRecommendations, setSearchRecommendations] = useState([]);
  const [sortOption, setSortOption] = useState('option');

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleLike = (index) => {
    const newLikes = [...imageLikes];
    newLikes[index] += 1;
    setImageLikes(newLikes);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      const recommendations = images
        .filter(image => image.author.toLowerCase().includes(value.toLowerCase()))
        .map(image => image.author);
      setSearchRecommendations(recommendations);
    } else {
      setSearchRecommendations([]);
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleRecommendationClick = (author) => {
    setSearchTerm(author);
    setSearchRecommendations([]);
  };

  const filteredImages = images.filter(image =>
    image.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedImages = [...filteredImages].sort((a, b) => {
    if (sortOption === 'likes') {
      return b.likes - a.likes;
    } else if (sortOption === 'views') {
      return b.views - a.views;
    } else {
      return 0;
    }
  });

  return (
    <div>
      <div>
        <div className='whole-container'>
          <div className="navigation-container">
            <div className="navigation-elements">
              <ul className="flex">
                <li className='img'>
                  <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsR-OsxScVFxpl0JRp8z2XraQ11-4saV78-tehs1ItbQ&s" alt="Behance Logo" />
                </li>
                <li className="logo_page">
                  <button className='element-btn'>Explore</button>
                </li>
                <li className="logo_page">
                  <button className='element-btn'>Assets</button>
                </li>
                <li className="logo_page">
                  <button className='element-btn'>Jobs</button>
                </li>
                <li className="logo_page">
                  <button className='behance-text'>Behance </button>
                </li>
                <li className="logo_page">
                  <button className='element-btn'>Hire Freelancers</button>
                </li>
              </ul>
            </div>
            <div className="navigation-elements">
              <span className='bell'><MdNotifications className='bell-icon' size={22} /></span>
              <button type="button" className="log-in-button">
                Log In
              </button>
              <button type="button" className="sign-up-button">
                Sign Up
              </button>
              <img className="adobe-image" src="https://pic.onlinewebfonts.com/thumbnails/icons_521761.svg" alt="Adobe" />
              <a href="#" className="adobe">Adobe</a>
            </div>
          </div>
        </div>
        <div className="user-search">
          <div className="left-place">
            <IoFilterSharp className="filter-icon" />
            <button type="button" className="filter-button">
              Filter
            </button>
          </div>
          <div className="center-place">
            <FaSearch className="search-icon" />
            <input
              className="search-bar"
              type="text"
              placeholder="Search the creative world at work"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button type="button" className="img-button"> <CiImageOn className="img-icon" size={20} /> Search by image</button>
            {searchRecommendations.length > 0 && (
              <ul className="recommendations">
                {searchRecommendations.map((rec, index) => (
                  <li key={index} onClick={() => handleRecommendationClick(rec)}>
                    {rec}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="right-place">
            <p className='upper'>Sort</p>
            <select name="sort" className="sorting" value={sortOption} onChange={handleSortChange}>
              <option value="option">Recommended</option>
              <option value="likes">Most liked</option>
              <option value="views">Most viewed</option>
            </select>
          </div>
        </div>
      </div>
      <div className='image-container'>
        {sortedImages.length > 0 ? (
          <div className='images'>
            {sortedImages.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.src} alt={`Image by ${image.author}`} onClick={() => openModal(image)} />
                <div className="save-icon">
                  <MdSave />
                  <span>Save</span>
                </div>
                <div className="image-details">
                  <p className='author'>{image.author}</p>
                  <div className="like-section">
                    <BiSolidLike className="like-icon" onClick={() => handleLike(index)} />
                    <span className='like-word'>{imageLikes[index]}</span>
                  </div>
                  <div className="view-section">
                    <PiEyeFill className="view-icon" />
                    <span className='view-word'>{image.views + 'k'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className='no-results'>No results found</p>
        )}
        {selectedImage && (
          <div className='modal' onClick={closeModal}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
              <span className='close' onClick={closeModal}>&times;</span>
              <img src={selectedImage.src} alt={`Image by ${selectedImage.author}`} />
              <p>{selectedImage.author}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeComponents;
