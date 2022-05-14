import { Select } from "antd";
import React from "react";

function CategorySortOption(props) {
  const { setSortPrice, setSortName } = props;

  return (
    <div style={{ width: "100%" }}>
      <Select style={{ width: "100%" }} onChange={(value) => {
        switch (value) {
          case 'high_to_low_price':
            setSortPrice('high_to_low')
            setSortName('')
            break;
          case 'low_to_high_price':
            setSortPrice('low_to_high')
            setSortName('')
            break;
          case 'high_to_low_name':
            setSortName('high_to_low')
            setSortPrice('')
            break;
          case 'low_to_high_name':
            setSortName('low_to_high')
            setSortPrice('')
            break;
          default:
            break;
        }
      }}>
        <Select.Option value="high_to_low_price" key="high_to_low_price">
          Giá giảm dần
        </Select.Option>
        <Select.Option value="low_to_high_price" key="low_to_high_price">
          Giá tăng dần
        </Select.Option>
        <Select.Option value="high_to_low_name" key="high_to_low_name">
          Tên giảm dần
        </Select.Option>
        <Select.Option value="low_to_high_name" key="low_to_high_name">
          Tên tăng dần
        </Select.Option>
      </Select>
    </div>
  );
}

export default CategorySortOption;
