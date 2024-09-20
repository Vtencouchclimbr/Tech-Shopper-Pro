

const ProductDetails = () => {

  return (
    <div className="container-fluid p-3">
      <div className="row">
        {/* Title */}
        <div style={{ border: 'solid' }} className="col-12 text-center mb-3 flex-grow-1">
          <h1 className="title">Title</h1>
        </div>

        {/* Single Item */}
        <div className="col-12 col-md-6">
          <div className="item-details">
            <p className="text-center">SINGLE ITEM</p>
          </div>
        </div>

        {/* Product Details */}
        <div className="col-12 col-md-6">
          <div className="product-details">
            <p className="text-center">Product Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
