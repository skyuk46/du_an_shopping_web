import "../../containers/admin/index.scss";
import { Input, Button, Form, Select, Upload } from "antd";
import { useState, useEffect } from "react";
import { createProduct } from "../../stores/product/product.action";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { searchCategory } from "../../stores/category/category.action";
import { PlusOutlined } from "@ant-design/icons";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};

function AddProductTemplate(props) {
  const [isAdded, setIsAdded] = useState(false);
  const [isAddFailed, setIsAddFailed] = useState(false);
  const [form] = Form.useForm();
  const { t, categoryList } = props;

  useEffect(function () {
    props.searchCategory();
  }, []);

  const onFinish = async (values) => {
    const {
      name,
      price,
      quantity,
      description,
      categoryId,
      mainImage,
      secondImage,
    } = values;
    const params = new FormData();
    params.append("name", name);
    params.append("price", price);
    params.append("category_id", categoryId);
    params.append("quantity", quantity);
    params.append("description", description);
    params.append("discount_price", 0);
    params.append("token", window.localStorage.getItem("token"));
    params.append("product_file_main", mainImage.fileList[0].thumbUrl);
    params.append(
      "product_file_secondary",
      secondImage.fileList.map((file) => file.thumbUrl)
    );

    try {
      props.createProduct(params);
      setIsAdded(true);
    } catch (e) {
      setIsAddFailed(true);
      form.current.resetFields();
    }
  };

  return (
    <div class="template-container">
      {isAddFailed ? (
        <div>
          <div style={{ fontSize: "20px", color: "red", marginBottom: "10px" }}>
            Thêm hàng thất bại, thông tin chưa đúng hoặc thiếu thông tin
          </div>
          <Button
            onClick={() => setIsAddFailed(false)}
            variant="contained"
            color="secondary"
          >
            Thêm lại
          </Button>
        </div>
      ) : (
        <>
          {isAdded ? (
            <div>
              <div
                style={{
                  fontSize: "20px",
                  color: "green",
                  marginBottom: "10px",
                }}
              >
                Mặt hàng đã được thêm
              </div>
              <Button
                onClick={() => setIsAdded(false)}
                variant="contained"
                color="secondary"
              >
                Tiếp tục thêm
              </Button>
            </div>
          ) : (
            <>
              <div id="title">Thêm mặt hàng</div>
              <Form
                {...layout}
                name="add-product-form"
                id="add-product-form"
                form={form}
                onFinish={onFinish}
              >
                <Form.Item
                  name="name"
                  label={t("product.name")}
                  rules={[
                    {
                      required: true,
                      message: t("form.required"),
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="categoryId"
                  label={t("product.category")}
                  rules={[
                    {
                      required: true,
                      message: t("form.required"),
                    },
                  ]}
                >
                  <Select>
                    {categoryList.map((category) => (
                      <Select.Option value={category.id} key={category.id}>
                        {category.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="description"
                  label={t("product.description")}
                  rules={[
                    {
                      required: true,
                      message: t("form.required"),
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="quantity"
                  label={t("product.quantity")}
                  rules={[
                    {
                      required: true,
                      message: t("form.required"),
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
                <Form.Item
                  name="price"
                  label={t("product.price")}
                  rules={[
                    {
                      required: true,
                      message: t("form.required"),
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
                <Form.Item
                  name="mainImage"
                  label={t("product.mainImage")}
                  rules={[
                    {
                      required: true,
                      message: t("form.required"),
                    },
                  ]}
                >
                  <Upload
                    listType="picture-card"
                    showUploadList={true}
                    action="/"
                    beforeUpload={() => {
                      return false;
                    }}
                    maxCount={1}
                  >
                    <PlusOutlined />
                  </Upload>
                </Form.Item>
                <Form.Item
                  name="secondImage"
                  label={t("product.secondImage")}
                  rules={[
                    {
                      required: true,
                      message: t("form.required"),
                    },
                  ]}
                >
                  <Upload
                    listType="picture-card"
                    showUploadList={true}
                    action="/"
                    beforeUpload={() => {
                      return false;
                    }}
                  >
                    <PlusOutlined />
                  </Upload>
                </Form.Item>
                <div>
                  <center>
                    <Button
                      className="submit_button"
                      type="primary"
                      htmlType="submit"
                    >
                      {t("product.add")}
                    </Button>
                  </center>
                </div>
              </Form>
            </>
          )}
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  success: state.product.success,
  categoryList: state.category.categoryList,
});

const mapDispatchToProps = {
  createProduct,
  searchCategory,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(AddProductTemplate)
);
