import Gutter from "../Gutter";
import Layout from "../Layout";
import MainContainer from "../MainContainer";
import Progress from "../Progress";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="home_container">
        <div className="bg_overlay" />
        <Gutter>
          <div className="main_heading">
            <h1>Cari Cari</h1>
            <p>
              Live from their sofa to yours. Get closer to your favorite <br />{" "}
              artists, and never miss out.
            </p>
          </div>
        </Gutter>
        <div style={{ position: "absolute", width: "100%", bottom: "30px" }}>
          <Gutter>
            <Progress />
          </Gutter>
        </div>
      </div>
      <MainContainer />
    </Layout>
  );
};

export default Home;
