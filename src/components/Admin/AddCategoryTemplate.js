import "../../containers/admin/index.scss";
import { Input, Button, Form, Modal } from "antd";
import { useState } from "react";
import { createCategory } from "../../stores/category/category.action";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

function AddCategoryTemplate(props) {
  const { t, success } = props;
  const [openDialog, setOpenDialog] = useState(false);

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };
  const [form] = Form.useForm();

  const AddCategory = (values) => {
    const { name, description } = values;
    const request = {
      name,
      description: description,
      token: window.localStorage.getItem("token"),
    };
    // props.createCategory(request, () => {
    //   setOpenDialog(true)
    // });
  };

  return (
    <div class="template-container">
      <Modal visible={openDialog} onCancel={() => setOpenDialog(false)} footer={null}>
        {success ? (
          <div
            style={{
              fontSize: "20px",
              color: "green",
              marginBottom: "10px",
            }}
          >
            Loại hàng hóa đã được thêm
          </div>
        ) : (
          <div>
            <div
              style={{ fontSize: "20px", color: "red", marginBottom: "10px" }}
            >
              Thêm loại thất bại, thông tin chưa đúng hoặc thiếu thông tin
            </div>
          </div>
        )}
      </Modal>
      <div id="title">Thêm loại hàng hóa</div>
      <Form
        {...layout}
        name="add-category-form"
        id="add-category-form"
        form={form}
        onFinish={AddCategory}
      >
        <Form.Item
          name="name"
          label="Tên loại sản phẩm"
          rules={[
            {
              required: true,
              message: t("form.required"),
            },
          ]}
        >
          <Input size="small" />
        </Form.Item>
        <Form.Item name="description" label="Mô tả">
          <Input size="small" />
        </Form.Item>
        <Button className="submit_button" type="primary" htmlType="submit">
          Thêm
        </Button>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  success: state.category.success,
});

const mapDispatchToProps = {
  createCategory,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(AddCategoryTemplate)
);
