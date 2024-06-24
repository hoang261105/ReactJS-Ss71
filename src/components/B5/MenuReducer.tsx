import {
  DashboardOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../stores/reducers/menuReducer";

export default function MenuReducer() {
  const menuState = useSelector((state: any) => state.menu);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        width: menuState === "open" ? 200 : 50,
        height: 230,
        padding: menuState === "open" ? 20 : 10,
        background: "#22559c",
        color: "white",
        fontSize: 18,
        display: "flex",
        flexDirection: "column",
        gap: menuState === "open" ? 20 : 10,
        alignItems: menuState === "open" ? "flex-start" : "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: menuState === "open" ? 20 : 0,
        }}
      >
        <div style={{ width: 30, textAlign: "center" }}>
          <DashboardOutlined />
        </div>
        {menuState === "open" && (
          <a style={{ textDecoration: "none", color: "white" }} href="">
            Bảng điều khiển
          </a>
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: menuState === "open" ? 20 : 0,
        }}
      >
        <div style={{ width: 30, textAlign: "center" }}>
          <i className="fa-solid fa-user"></i>
        </div>
        {menuState === "open" && (
          <a style={{ textDecoration: "none", color: "white" }} href="">
            Quản lý tài khoản
          </a>
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: menuState === "open" ? 20 : 0,
        }}
      >
        <div style={{ width: 30, textAlign: "center" }}>
          <i className="fa-solid fa-money-bill"></i>
        </div>
        {menuState === "open" && (
          <a style={{ textDecoration: "none", color: "white" }} href="">
            Thống kê
          </a>
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: menuState === "open" ? 20 : 0,
        }}
      >
        <div style={{ width: 30, textAlign: "center" }}>
          <i className="fa-solid fa-chart-simple"></i>
        </div>
        {menuState === "open" && (
          <a style={{ textDecoration: "none", color: "white" }} href="">
            Thống kê
          </a>
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: menuState === "open" ? 20 : 0,
        }}
      >
        <div style={{ width: 30, textAlign: "center" }}>
          <i className="fa-regular fa-file"></i>
        </div>
        {menuState === "open" && (
          <a style={{ textDecoration: "none", color: "white" }} href="">
            Tài liệu
          </a>
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: menuState === "open" ? 20 : 0,
        }}
      >
        {menuState === "open" ? (
          <>
            <a
              style={{ textDecoration: "none", color: "white" }}
              onClick={() => dispatch(toggleMenu())}
            >
              <LeftOutlined />
            </a>
            <a
              style={{ textDecoration: "none", color: "white" }}
              onClick={() => dispatch(toggleMenu())}
            >
              Thu gọn
            </a>
          </>
        ) : (
          <a
            style={{ textDecoration: "none", color: "white" }}
            onClick={() => dispatch(toggleMenu())}
          >
            <RightOutlined />
          </a>
        )}
      </div>
    </div>
  );
}
