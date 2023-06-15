import { Layout } from "antd";
import { Router } from "./router/Router";
import { Emblem } from "./components/Emblem";
import { Info } from "./components/Info";

const { Header, Content, Footer } = Layout;

const layoutStyle = {
    minHeight: "100vh",
};

const headerStyle = {
    height: "80px",
    background: "#fff",
    borderBottom: "1px solid #eee",
};

const contentStyle = {
    flexGrow: 1,
};

const footerStyle = {
    height: "80px",
    padding: 0,
    margin: 0,
    background: "#fff",
    borderTop: "1px solid #eee",
};

function App() {
    return (
        <div className="App">
            <Layout style={layoutStyle}>
                <Header style={headerStyle}>
                    <Emblem />
                </Header>
                <Content style={contentStyle}>
                    <Router />
                </Content>
                <Footer style={footerStyle}>
                    <Info />
                </Footer>
            </Layout>
        </div>
    );
}

export default App;
