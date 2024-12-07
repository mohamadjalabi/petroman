import React, { useState, useEffect } from "react";
import { FloatButton} from "antd";
import { ArrowUpOutlined} from "@ant-design/icons";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    setVisible(window.scrollY > 300); // Show button after 300px of scrolling
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {visible && (
        <FloatButton.BackTop
          type="primary"
          style={{ right: 40, bottom: 75 }} // Bottom-left corner
          icon={<ArrowUpOutlined />}
        />
      )}
    </>
  );
};

export default ScrollToTopButton;
