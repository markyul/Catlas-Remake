import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
// 학과소개
import Department from "./Pages/DepartmentIntro/Department";
import Member from "./Pages/DepartmentIntro/Member";
import Club from "./Pages/DepartmentIntro/Club";
import Location from "./Pages/DepartmentIntro/Location";
// 게시판
import Notice from "./Pages/Community/Notice";
import SWNotice from "./Pages/Community/SWNotice";
import FreeCommunity from "./Pages/Community/FreeCommunity";
import Gallery from "./Pages/Community/Gallery";
// 교육
import Curriculum from "./Pages/Education/Curriculum";
import SubjectIntro from "./Pages/Education/SubjectIntro";
import Track from "./Pages/Education/Track";
// 학사일정
import Schedule from "./Pages/Schedule/Schedule";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      {/* 학과소개 */}
      <Route path="/departmentIntro/main" component={Department} />
      <Route path="/departmentIntro/member" component={Member} />
      <Route path="/departmentIntro/club" component={Club} />
      <Route path="/departmentIntro/location" component={Location} />
      {/* 게시판 */}
      <Route path="/community/main" component={Notice} />
      <Route path="/community/swnotice" component={SWNotice} />
      <Route path="/community/freeCommunity" component={FreeCommunity} />
      <Route path="/community/gallery" component={Gallery} />
      {/* 교육 */}
      <Route path="/education/main" component={Curriculum} />
      <Route path="/education/subjectIntro" component={SubjectIntro} />
      <Route path="/education/track" component={Track} />
      {/* 학사일정 */}
      <Route path="/schedule" component={Schedule} />
      <Footer />
    </Router>
  );
}

export default App;
