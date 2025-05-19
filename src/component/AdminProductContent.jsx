import { useState, useEffect } from 'react';
import { Card, Form, Button, Image } from 'react-bootstrap';
import axios from 'axios';
import "../CSS/Home1.css";

function AdminProductContent() {
  const brands = ["Nike", "Adidas", "Puma", "Sketchers", "Vans", "Converse", "Lumberjack", "Us.Polo Assn."];
  const materials = ["Artificial Leather", "Genuine Leather", "Rubber", "Fabric", "Orthopedic"];
  const colors = ["Black", "White", "Red", "Blue", "Green", "Gray", "Brown", "Beige"];
  const sizes = Array.from({ length: 31 }, (_, i) => (i + 20).toString());
  const categories = ["Brands", "Women", "Men", "Kids", "Sneakers", "Campaigns"];

  const subcategories = {
    Brands: ["Nike", "Adidas", "Puma ", "Sketchers", "Vans", "Converse", "Lumberjack", "Us.Polo Assn."],
    Women: ["The Newest", "Bestsellers", "Heels", "Flats", "Sneakers", "Boots", "Evening Dress"],
    Men: ["The Newest", "Bestsellers", "Sneakers", "Boots", "Sandals", "Loafers"],  
    Kids: ["The Newest", "Bestsellers", "Sneakers", "Sandals", "Boots", "Slip-ons"],
    Sneakers: ["The Newest", "Bestsellers", "Running", "Basketball", "Casual", "Skateboarding"],
    Campaigns: ["50% Off", "Buy 1 Get 1 Free", "Clearance Sale"]
  };

  const [products, setProducts] = useState([]);


  const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/products/delete/${id}`);
    setProducts(products.filter(product => product.id !== id));
    alert("Product deleted successfully");
  } catch (error) {
    console.error("Failed to delete product:", error);
    alert("Failed to delete product");
  }
};



  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [material, setMaterial] = useState('');
  const [color, setColor] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [stock, setStock] = useState('');

  useEffect(() => {
  const fetchProducts = async () => {
    if (selectedCategory && selectedSubcategory) {
      try {
        const response = await axios.post('http://localhost:8080/products/filter', {
          category: selectedCategory,
          subCategory: selectedSubcategory
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  };

  fetchProducts();
}, [selectedCategory, selectedSubcategory]);


  const handleSizeChange = (e) => {
    const options = e.target.options;
    const selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setSelectedSizes(selected);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSelectedSubcategory('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price); 
    formData.append('stock', stock);
    formData.append('categoryName', selectedCategory);
    formData.append('subCategories', selectedSubcategory);
    formData.append('brand', brand);
    formData.append('material', material);

    color.forEach(c => formData.append('color', c));
    selectedSizes.forEach(s => formData.append('size', s));

    selectedFiles.forEach(file => {
      formData.append('images', file);
    });

    try {
      await axios.post('http://localhost:8080/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Product created successfully!');
      setName('');
      setDescription('');
      setPrice('');
      setStock('');
      setBrand('');
      setMaterial('');
      setColor([]);
      setSelectedSizes([]);
      setSelectedFiles([]);
      setSelectedCategory('');
      setSelectedSubcategory('');
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Failed to create product.');
    }
  };

  const [selectedProductId, setSelectedProductId] = useState(null);
  const [newPrice, setNewPrice] = useState('');
  const [newStock, setNewStock] = useState('');

  const handleUpdateSubmit = async (e) => {
    console.log("Selected Product ID:", selectedProductId);
  e.preventDefault();
  try {
    await axios.put(`http://localhost:8080/products/update/${selectedProductId}`, {
      price: parseFloat(newPrice),
      stock: parseInt(newStock, 10)
    });
    alert("Product updated successfully");

    
    setProducts(products.map(p => p.id === selectedProductId ? {...p, price: newPrice, stock: newStock} : p));

    setSelectedProductId(null);
    setNewPrice('');
    setNewStock('');
  } catch (error) {
    console.error("Update failed:", error);
    alert("Failed to update product");
  }
};


  return (
    <div>
      <div style={{ marginTop: '80px' }}>
        <Card className="mb-4 border-0 shadow-sm mt-4">
          <Card.Body>
            <Card.Title as="h5">Add To Product</Card.Title>
            <Form className="mt-3" onSubmit={handleSubmit}>
              <Form.Group controlId="productName" className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="productDescription" className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Enter product description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="productPrice" className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter product price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  min="0"
                  step="0.01"
                />
              </Form.Group>

              <Form.Group controlId="productStock" className="mb-3">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter stock amount"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  required
                  min="0"
                />
              </Form.Group>

              <Form.Group controlId="productBrand" className="mb-3">
                <Form.Label>Brand</Form.Label>
                <Form.Select
                  className="w-100"
                  style={{ maxWidth: '30%', marginLeft: '55px' }}
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
                >
                  <option value="">Select Brand</option>
                  {brands.map((b, idx) => (
                    <option key={idx} value={b}>{b}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="productCategory" className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  className="w-100"
                  style={{ maxWidth: '30%', marginLeft: '55px' }}
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat, idx) => (
                    <option key={idx} value={cat}>{cat}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="productSubcategory" className="mb-3">
                <Form.Label>SubCategory</Form.Label>
                <Form.Select
                  className="w-100"
                  style={{ maxWidth: '30%', marginLeft: '55px' }}
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  disabled={!selectedCategory}
                  required
                >
                  <option value="">Select Subcategory</option>
                  {selectedCategory &&
                    subcategories[selectedCategory]?.map((sub, idx) => (
                      <option key={idx} value={sub}>{sub}</option>
                    ))}
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="productMaterial" className="mb-3">
                <Form.Label>Material</Form.Label>
                <Form.Select
                  className="w-100"
                  style={{ maxWidth: '30%', marginLeft: '55px' }}
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  required
                >
                  <option value="">Select Material</option>
                  {materials.map((m, idx) => (
                    <option key={idx} value={m}>{m}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="productColor" className="mb-3">
                <Form.Label>Color</Form.Label>
                <Form.Select
                  multiple
                  className="w-100"
                  style={{ maxWidth: '30%', marginLeft: '55px' }}
                  value={color}
                  onChange={e => {
                    const selected = Array.from(e.target.selectedOptions, option => option.value);
                    setColor(selected);
                  }}
                  required
                >
                  {colors.map((c, idx) => (
                    <option key={idx} value={c}>{c}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="productSize" className="mb-3">
                <Form.Label>Size (Use Ctrl/Cmd to select multiple)</Form.Label>
                <Form.Select
                  multiple
                  className="w-100"
                  style={{ height: '120px', maxWidth: '30%', marginLeft: '55px' }}
                  value={selectedSizes}
                  onChange={handleSizeChange}
                  required
                >
                  {sizes.map((size, idx) => (
                    <option key={idx} value={size}>{size}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="productImages" className="mb-3">
                <Form.Label>Product Images (Use Ctrl/Cmd to select multiple)</Form.Label>
                <Form.Control
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
              </Form.Group>

              {selectedFiles.length > 0 && (
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {selectedFiles.map((file, idx) => (
                    <Image
                      key={idx}
                      src={URL.createObjectURL(file)}
                      alt={`preview-${idx}`}
                      thumbnail
                      style={{ width: '100px', height: '100px', objectFit: 'cover', marginLeft: '55px' }}
                    />
                  ))}
                </div>
              )}

              <br /><br />
              <div className="d-flex justify-content-end mb-3">
                <Button variant="primary" type="submit" style={{ width: '180px' }}>
                  Add Product
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>

        <Card className="mb-4 border-0 shadow-sm mt-4">
          <Card.Body>
            <Card.Title as="h5">Remove Product</Card.Title>
            <Form className="mt-3">
              <Form.Group controlId="productCategory" className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  className="w-100"
                  style={{ maxWidth: '30%', marginLeft: '55px' }}
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">Select Category</option>
                  {categories.map((cat, idx) => (
                    <option key={idx} value={cat}>{cat}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="productSubcategory" className="mb-3">
                <Form.Label>SubCategory</Form.Label>
                <Form.Select
                  className="w-100"
                  style={{ maxWidth: '30%', marginLeft: '55px' }}
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  disabled={!selectedCategory}
                >
                  <option value="">Select Subcategory</option>
                  {selectedCategory &&
                    subcategories[selectedCategory]?.map((sub, idx) => (
                      <option key={idx} value={sub}>{sub}</option>
                    ))}
                </Form.Select>
              </Form.Group>

              <br /><br />
              <div className="product-list-container">
                <div className="products-grid mb-5 d-flex flex-wrap">
                  {products.map((product) => (
                    <div key={product.id} className="product-card border p-3 rounded shadow-sm m-2">
                      <img
                        src={product.images && product.images.length > 0
                          ? `http://localhost:8080${product.images[0].url}`
                          : 'https://via.placeholder.com/150'} // placeholder örnek
                        alt={product.name}
                        className="product-image mb-2"
                        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                      />

                      <p className="product-brand">{product.brand}</p>
                      <p className="product-name">{product.name}</p>
                      <p className="product-price">{product.price}</p>
                      <Button variant="danger" size="sm" onClick={() => handleDelete(product.id)}>Sil</Button>
                    </div>
                  ))}
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>

        <Card className="mb-4 border-0 shadow-sm mt-4">
          <Card.Body>
            <Card.Title as="h5">Update Product</Card.Title>
            <Form className="mt-3">
              <Form.Group controlId="productCategory" className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  className="w-100"
                  style={{ maxWidth: '30%', marginLeft: '55px' }}
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">Select Category</option>
                  {categories.map((cat, idx) => (
                    <option key={idx} value={cat}>{cat}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="productSubcategory" className="mb-3">
                <Form.Label>SubCategory</Form.Label>
                <Form.Select
                  className="w-100"
                  style={{ maxWidth: '30%', marginLeft: '55px' }}
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  disabled={!selectedCategory}
                >
                  <option value="">Select Subcategory</option>
                  {selectedCategory &&
                    subcategories[selectedCategory]?.map((sub, idx) => (
                      <option key={idx} value={sub}>{sub}</option>
                    ))}
                </Form.Select>
              </Form.Group>

              <br /><br />
              <div className="product-list-container">
                <div className="products-grid mb-5 d-flex flex-wrap">
                  {products.map(product => (
                    <div
                      key={product.id}
                      className="product-card border p-3 rounded shadow-sm m-2"
                      style={{ cursor: 'pointer', borderColor: selectedProductId === product.id ? 'blue' : '#ddd' }}
                      onClick={() => {
                        setSelectedProductId(product.id);
                        setNewPrice(product.price);
                        setNewStock(product.stock);
                      }}
                    >
                      <img src={"http://localhost:8080" + product.images[0]?.url} alt={product.name} className="product-image mb-2" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                      <p className="product-brand">{product.brand}</p>
                      <p className="product-name">{product.name}</p>
                      <p className="product-price">{product.price}</p>
                    </div>
                  ))}

                </div>
              </div>
              
              {selectedProductId && (
                <Form onSubmit={handleUpdateSubmit}>
                  <Form.Group controlId="updatePrice" className="mb-3">
                    <Form.Label>New Price</Form.Label>
                    <Form.Control
                      type="number"
                      step="0.01"
                      value={newPrice}
                      onChange={e => setNewPrice(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="updateStock" className="mb-3">
                    <Form.Label>New Stock</Form.Label>
                    <Form.Control
                      type="number"
                      value={newStock}
                      onChange={e => setNewStock(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button variant="success" style={{ width: '180px' }} onClick={handleUpdateSubmit}>
                    Update Selected Product
                  </Button>
                </Form>
              )}
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default AdminProductContent;
