import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

function AdminCategoryContent() {
    const [customSubcategories, setCustomSubcategories] = useState('');
    const categories = ["Brands", "Women", "Men", "Kids", "Sneakers", "Campaigns"];

    const subcategories = {
        Brands: ["Nike Sportswear", "Adidas Originals", "Puma Running", "Sketchers Comfort", "Vans Classics", "Converse Chuck Taylor", "Lumberjack Outdoor", "Us.Polo Assn. Casual"],
        Women: ["The Newest", "Bestsellers", "Heels", "Flats", "Sneakers", "Boots", "Evening Dress"],
        mMn: ["The Newest", "Bestsellers", "Sneakers", "Boots", "Sandals", "Loafers"],
        Kids: ["The Newest", "Bestsellers", "Sneakers", "Sandals", "Boots", "Slip-ons"],
        Sneakers: ["The Newest", "Bestsellers", "Running", "Basketball", "Casual", "Skateboarding"],
        Campaigns: ["50% Off", "Buy 1 Get 1 Free", "Clearance Sale"]
    };

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [newCategoryName, setNewCategoryName] = useState('');
    const [newSubcategoryName, setNewSubcategoryName] = useState('');

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        setSelectedSubcategory('');
    };

    const handleCategoryChanges = (e) => {
        const selected = e.target.value;
        setSelectedCategory(selected);
        setSelectedSubcategory('');
        setNewCategoryName('');
        setNewSubcategoryName('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    // Validation
    if (!selectedCategory) {
        alert("Please select a category.");
        return;
    }

    if (!newCategoryName && (!selectedSubcategory || !newSubcategoryName)) {
        alert("Please provide at least one new name.");
        return;
    }

    const updates = {};

    if (newCategoryName.trim()) {
        updates.category = {
            oldName: selectedCategory,
            newName: newCategoryName.trim()
        };
    }

    if (selectedSubcategory && newSubcategoryName.trim()) {
        updates.subcategory = {
            category: selectedCategory,
            oldName: selectedSubcategory,
            newName: newSubcategoryName.trim()
        };
    }

    console.log("Updating:", updates);

    // Burada backend'e istek atabilirsin (axios/fetch ile)
    // örn: axios.post('/api/rename-category', updates)

    alert("Update request sent.");
    
    // Form reset
    setSelectedCategory('');
    setNewCategoryName('');
    setSelectedSubcategory('');
    setNewSubcategoryName('');
};

    

    return (
        <div>
            <div style={{ marginTop: '80px' }}>
                <Card className="mb-4 border-0 shadow-sm mt-4">
                  <Card.Body>
                      <Card.Title as="h5">Add Category</Card.Title>
                      <Form className="mt-3">
                          <Form.Group controlId="productName" className="mb-3">
                              <Form.Label>Category Name</Form.Label>
                              <Form.Control type="text" placeholder="Enter product name" />
                          </Form.Group>

                          <Form.Group controlId="productDescription" className="mb-3">
                              <Form.Label>Description</Form.Label>
                              <Form.Control as="textarea" rows={2} placeholder="Enter product description" />
                          </Form.Group>

                          <Form.Group controlId="customSubcategories" className="mb-3">
                              <Form.Label>Subcategories</Form.Label>
                              <Form.Control
                                  as="textarea"
                                  rows={2}
                                  placeholder="Enter subcategories separated by commas (e.g. Sneakers, Boots, Sandals)"
                                  value={customSubcategories}
                                  onChange={(e) => setCustomSubcategories(e.target.value)}
                              />
                          </Form.Group>

                          <br /><br />
                          <div className="d-flex justify-content-end mb-3">
                              <Button variant="primary" type="submit" style={{ width: '180px' }}>
                                  Add Category
                              </Button>
                          </div>
                      </Form>
                  </Card.Body>
              </Card>
              <Card className="mb-4 border-0 shadow-sm mt-4">
                    <Card.Body>
                        <Card.Title as="h5">Remove Category</Card.Title>
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
                            <div className="d-flex justify-content-end mb-3">
                                <Button variant="primary" type="submit" style={{ width: '180px' }}>
                                    Remove Category
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
                <Card className="mb-4 border-0 shadow-sm mt-4">
                    <Card.Body>
                        <Card.Title as="h5">Update Category</Card.Title>
                        <Form className="mt-3" onSubmit={handleSubmit}>
                            {/* Kategori seçimi */}
                            <Form.Group controlId="productCategory" className="mb-3">
                                <Form.Label>Current Category</Form.Label>
                                <Form.Select
                                    className="w-100"
                                    style={{ maxWidth: '30%', marginLeft: '55px' }}
                                    value={selectedCategory}
                                    onChange={handleCategoryChanges}
                                >
                                    <option value="">Select Category</option>
                                    {categories.map((cat, idx) => (
                                        <option key={idx} value={cat}>{cat}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            {/* Yeni kategori adı */}
                            {selectedCategory && (
                                <Form.Group controlId="newCategoryName" className="mb-3">
                                    <Form.Label>New Category Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter new category name"
                                        className="w-100"
                                        style={{ maxWidth: '30%', marginLeft: '55px' }}
                                        value={newCategoryName}
                                        onChange={(e) => setNewCategoryName(e.target.value)}
                                    />
                                </Form.Group>
                            )}

                            {/* Alt kategori seçimi */}
                            {selectedCategory && (
                                <Form.Group controlId="productSubcategory" className="mb-3">
                                    <Form.Label>Current Subcategory</Form.Label>
                                    <Form.Select
                                        className="w-100"
                                        style={{ maxWidth: '30%', marginLeft: '55px' }}
                                        value={selectedSubcategory}
                                        onChange={(e) => setSelectedSubcategory(e.target.value)}
                                    >
                                        <option value="">Select Subcategory</option>
                                        {subcategories[selectedCategory]?.map((sub, idx) => (
                                            <option key={idx} value={sub}>{sub}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            )}

                            {/* Yeni alt kategori adı */}
                            {selectedSubcategory && (
                                <Form.Group controlId="newSubcategoryName" className="mb-3">
                                    <Form.Label>New Subcategory Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter new subcategory name"
                                        className="w-100"
                                        style={{ maxWidth: '30%', marginLeft: '55px' }}
                                        value={newSubcategoryName}
                                        onChange={(e) => setNewSubcategoryName(e.target.value)}
                                    />
                                </Form.Group>
                            )}

                            <div className="d-flex justify-content-end mb-3">
                                <Button variant="primary" type="submit" style={{ width: '180px' }}>
                                    Update
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>

            </div>
      </div>
  )
}

export default AdminCategoryContent