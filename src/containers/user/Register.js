import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { Input, Button, Form } from "antd";
import logo from "../../assets/images/logo.png";
import "./user.scss";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

function Register(props) {
  const [form] = Form.useForm();
  const { t } = props;
  useEffect(function () {
    document.title = t("user.register");
  }, []);

  const [registered, setRegistered] = useState(false);

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div id="login-container">
      <div id="login">
        <center>
          <img id="logo" src={logo} width="200px" alt="logo" />
        </center>
        {registered ? (
          <div>
            <div
              style={{ fontSize: "24px", color: "#69f0ae", marginBottom: "15px" }}
            >
              {t('user.registerSuccessfully')}
            </div>
            <Link style={{ textDecoration: "none" }} to="/">
              <Button variant="contained" color="primary">
                {t('user.backToHome')}
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="title">{t('user.createAccount')}</div>
            <Form
              {...layout}
              name="register-form"
              id="register-form"
              form={form}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                label={t("user.account")}
                rules={[
                  {
                    required: true,
                    message: t("form.required"),
                  },
                ]}
              >
                <Input
                  fullWidth
                />
              </Form.Item>
              <Form.Item
                name="password"
                label={t("user.password")}
                rules={[
                  {
                    required: true,
                    message: t("form.required"),
                  },
                ]}
              >
                <Input
                  fullWidth
                  type="password"
                />
              </Form.Item>
              <Form.Item
                name="surname"
                label={t("user.surname")}
                rules={[
                  {
                    required: true,
                    message: t("form.required"),
                  },
                ]}
              >
                <Input
                  fullWidth
                />
              </Form.Item>
              <Form.Item
                name="name"
                label={t("user.name")}
                rules={[
                  {
                    required: true,
                    message: t("form.required"),
                  },
                ]}
              >
                <Input
                  fullWidth
                />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                label={t("user.phoneNumber")}
                rules={[
                  {
                    required: true,
                    message: t("form.required"),
                  },
                ]}
              >
                <Input
                  fullWidth
                />
              </Form.Item>
              <Form.Item
                name="address"
                label={t("user.address")}
                rules={[
                  {
                    required: true,
                    message: t("form.required"),
                  },
                ]}
              >
                <Input
                  fullWidth
                />
              </Form.Item>
              <Button
                className="submit_button"
                type="primary"
                htmlType="submit"
              >
                {t('user.register')}
              </Button>
            </Form>
            <br />
            <div className="footer_tip">
              <Link to="/login">{t('user.haveAccount')}</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default withTranslation()(Register);
