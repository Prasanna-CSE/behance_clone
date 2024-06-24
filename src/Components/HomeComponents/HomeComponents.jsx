import React, { useState } from 'react';
import { MdNotifications } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { BiSolidLike } from "react-icons/bi";
import { PiEyeFill } from "react-icons/pi";
import img0 from '../../assets/images/img0.png';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';
import img6 from '../../assets/images/img6.png';
import img7 from '../../assets/images/img7.png';
import img8 from '../../assets/images/img8.png';
import img9 from '../../assets/images/img9.png';
import img10 from '../../assets/images/img10.png';
import img11 from '../../assets/images/img11.png';
import '../HomeComponents/NavigationComponents.css';
import '../HomeComponents/FilterComponents.css';
import '../HomeComponents/HomeComponents.css';

const images = [
  { src: img10, author: 'Prasanna', likes: 980, views: 1.2 },
  { src: img1, author: 'GiSpirit', likes: 567, views: 2.4 },
  { src: img2, author: 'Thirunav', likes: 768, views: 2.47 },
  { src: img3, author: 'Balarami', likes: 90, views: 3.5 },
  { src: img4, author: 'Harinil', likes: 450, views: 7.1 },
  { src: img5, author: 'Jaiganeh', likes: 89, views: 5.2 },
  { src: img6, author: 'sethuram', likes: 899, views: 9.8 },
  { src: img7, author: 'Vijayk v', likes: 867, views: 7.7 },
  { src: img8, author: 'Thalaivan', likes: 102, views: 5.5 },
  { src: img9, author: 'senTamil', likes: 100, views: 7 },
  { src: img0, author: 'Murugann', likes: 888, views: 8.3 },
  { src: img11, author: 'Arunparak', likes: 1033, views: 2.4 }
];

const HomeComponents = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLikes, setImageLikes] = useState(images.map(image => image.likes));
  const [searchTerm, setSearchTerm] = useState('');
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
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
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
              <span className='bell'><MdNotifications className='bell-icon' size={23} /></span>
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
            <button type="button" className="img-button"> <CiImageOn className="img-icon" /> Search by image</button>
          </div>
          <div className="right-place">
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
                <div className="image-details">
                  <p className='author'>{image.author}</p>
                  <div className="like-section">
                    <BiSolidLike className="like-icon" onClick={() => handleLike(index)} />
                    <span>{imageLikes[index]}</span>
                  </div>
                  <div className="view-section">
                    <PiEyeFill className="view-icon" />
                    <span>{image.views + 'k'}</span>
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
