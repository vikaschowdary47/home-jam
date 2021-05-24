import Layout from "../Layout";
import MainContainer from "../MainContainer";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="home_container">
        <div className="bg_overlay" />
      </div>
      <MainContainer />
    </Layout>
  );
  //   return (
  //     <div>
  //       <Layout>
  //         <MainContainer />
  //       </Layout>
  //       {/* <div className="home_container">
  //         <div className="bg_overlay" />
  //       </div> */}
  //       {/* <div className="home_body">
  //         <Navigation />
  //         <MainContainer />
  //       </div> */}
  //     {/* </div> */}
  //   );
};

export default Home;
