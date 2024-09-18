import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  { id: 1, src: 'https://via.placeholder.com/150', alt: 'Item 1' },
  { id: 2, src: 'https://via.placeholder.com/150', alt: 'Item 2' },
  { id: 3, src: 'https://via.placeholder.com/150', alt: 'Item 3' },
  { id: 4, src: 'https://via.placeholder.com/150', alt: 'Item 4' },
  { id: 5, src: 'https://via.placeholder.com/150', alt: 'Item 5' },
  { id: 6, src: 'https://via.placeholder.com/150', alt: 'Item 6' },
  { id: 7, src: 'https://via.placeholder.com/150', alt: 'Item 7' },
  { id: 8, src: 'https://via.placeholder.com/150', alt: 'Item 8' },
  { id: 9, src: 'https://via.placeholder.com/150', alt: 'Item 9' },
  { id: 10, src: 'https://via.placeholder.com/150', alt: 'Item 10' },
  { id: 11, src: 'https://via.placeholder.com/150', alt: 'Item 11' },
  { id: 12, src: 'https://via.placeholder.com/150', alt: 'Item 12' },
];

const Carousel = () => {
  return (
    <div id="multiItemCarousel" className="carousel slide" data-bs-interval="false">
      <div className="carousel-inner">
        {items.map((item, index) => {
          return (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="d-flex justify-content-center">
                {items.slice(index, index + 6).map((item) => (
                  <div className="col-4 col-md-2" key={item.id} style={{ minWidth: '150px' }}>
                    <img src={item.src} className="img-fluid" alt={item.alt} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Carousel controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#multiItemCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#multiItemCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
