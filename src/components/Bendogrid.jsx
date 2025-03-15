import React from 'react';
import PropTypes from 'prop-types';
// import './Bendogrid.css'; // Optional

const Bendogrid = ({ images, columns = 3, gap = '4' }) => {
  const colWidth = `w-[calc(100%/${columns})]`;

  return (
    <div className={`grid grid-cols-${columns} gap-${gap}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-lg shadow-md ${colWidth}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
          />
          {image.caption && (
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2">
              <p className="text-sm">{image.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

Bendogrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      caption: PropTypes.string,
    })
  ).isRequired,
  columns: PropTypes.number,
  gap: PropTypes.string,
};

export default Bendogrid;