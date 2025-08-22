export default function Skills() {
  return (
    <>
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>

        {/* MERN Stack Section */}
        <div className="mern-stack">
          <h3>MERN Stack Development</h3>
          <div className="skills-list">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Learning Projects</p>
          </div>
        </div>

        {/* Database Section */}
        <div className="database-section">
          <h3>Database</h3>
          <div className="skills-list">
            <p>MongoDB</p>
            <p>MySQL</p>
          </div>
        </div>

        {/* Programming Logic Section */}
        <div className="programming-logic">
          <h3>Programming Logic</h3>
          <div className="skills-list">
            <p>C</p>
            <p>C++</p>
            <p>Python</p>
          </div>
        </div>
        <div className="Dsa">
            <h3>Data Structures & Algorithms</h3>
            <div className="skills-list">
                <p>Problem Solving</p>
            </div>
        </div>
        <div className="blockchain">
            <h3>Learning Blockchain</h3>
            <div className="skills-list">
                <p>Solidity</p>
                <p>Smart Contracts</p>
                <p>Web3.js</p>
            </div>
        </div>
        <div className="other">
            <h3>Other Skills</h3>
            <div className="skills-list">
                <p>GenAI</p>
                <p>Git</p>
                <p>GitHub</p>
                <p>VS Code</p>
            </div>
        </div>
      </div>
    </>
  );
}
