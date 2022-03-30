import { Link } from "react-router-dom";
import { useEffect } from "react";
import { withTranslation } from "react-i18next";
import { Input, Button, Form } from "antd";
import { login } from "../../stores/auth/auth.action";
import { connect } from "react-redux";
import { redirectRouter } from "../../utils/router";
import "./user.scss";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

function Login(props) {
  useEffect(function () {
    document.title = t('user.login');
  }, []);

  const [form] = Form.useForm();
  const { t } = props;

  const onFinish = (values) => {
    const { email, password } = values;
    props.login({
      email,
      password
    }, () => {
      redirectRouter('/')
    })
  };

  return (
    <div id="login-container">
      <div id="login">
        <div class="title">{t("user.loginTitle")}</div>
        <Form
          {...layout}
          name="user-form"
          id="user-form"
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            label={t("user.account")}
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
            name="password"
            label={t("user.password")}
            rules={[
              {
                required: true,
                message: t("form.required"),
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            {t("user.login")}
          </Button>
        </Form>
        <br />
        <div style={{ fontSize: "12px", marginTop: "20px" }}>
          <Link to="/register">{t("user.dontHaveAccount")}</Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = { login };

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Login));
