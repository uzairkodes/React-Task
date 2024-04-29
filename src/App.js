import "./App.css";
import React from "react";
import "./App.css";
import { Row, Col } from "antd";
import { useEffect, useState } from "react";
import { Card } from "antd";
import { Modal } from "antd";


function App() {
  const { Meta } = Card;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="App">
      <h1>Ant Design Grid System</h1>
      const [selectedProduct, setSelectedProduct] = useState(null);
      const [isModalVisible, setIsModalVisible] = useState(false);

      const handleCardClick = (product) => {
        setSelectedProduct(product);
        setIsModalVisible(true);
      };

      const handleModalClose = () => {
        setIsModalVisible(false);
      };

      return (
        <div className="App">
          <h1>Ant Design Grid System</h1>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={8} lg={6} key={product.id}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img src={product.image} alt={product.title} />}
                  onClick={() => handleCardClick(product)}
                >
                  <Meta title={product.title} description={product.description} price={product.price} />
                </Card>
              </Col>
            ))}
          </Row>

          {selectedProduct && (
            <Modal
              title={selectedProduct.title}
              visible={isModalVisible}
              onCancel={handleModalClose}
              footer={null}
            >
              <img src={selectedProduct.image} alt={selectedProduct.title} />
              <p>{selectedProduct.description}</p>
              <p>Price: {selectedProduct.price}</p>
            </Modal>
          )}
        </div>
      );
      <Row>
        {products.map((product) => (
          <Col sm={12} md={8} lg={6} key={product.id}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img src={product.image} alt={product.title} />}
            >
              <Meta title={product.title} description={product.description} price={product.price} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
