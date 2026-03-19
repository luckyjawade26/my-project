import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in AI & Machine Learning</h4>
                <h5>TGPCET, Mohagaon</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Currently pursuing Bachelor of Technology specializing in
              Artificial Intelligence and Machine Learning. Focused on Python,
              neural networks, and data-driven problem solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary Education (Class XII)</h4>
                <h5>GBMM Jr. College</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed higher secondary education with a focus on Science
              stream, building a strong foundation in mathematics and logical
              reasoning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary School Certificate (Class X)</h4>
                <h5>Little Angel's School</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed secondary schooling with strong academic performance,
              developing early interest in technology and problem solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
