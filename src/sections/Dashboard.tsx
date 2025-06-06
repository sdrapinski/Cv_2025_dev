import React, { useRef, useState } from "react";


import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { useWindowWidth } from "@react-hook/window-size";

const Dashboard = () => {
  const windowWidth = useWindowWidth();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section id="home" className="home">
       <Row style={{ marginTop: "10px" }}>
        <Col
          xxl={{ offset: 1, span: 3 }}
          md={{ span: 4 }}
          sm={{ span: 9, offset: 1 }}
          xs={{ span: 9, offset: 1 }}
          className="logo"
        >
          <span> Szymon Drapiński </span>
        </Col>
        {windowWidth > 768 ? (
          <Col>
            <Row className="nav-links">
              <Col>
                <a href="#projects">Projects</a>
              </Col>
              <Col>
                <a href="#about">About</a>
              </Col>

              <Col>
                <a href="#contact">Contact</a>
              </Col>
              <Col></Col>
              <Col>
                <a href="./Szymon_Drapiński_CV.pdf">CV</a>
              </Col>
              <Col>
                <a href="https://github.com/sdrapinski">GitHub</a>
              </Col>
            </Row>
          </Col>
        ) : (
          <Col xs={1} className={`burger ${menuOpen ? 'active' : ''}`}   onClick={() => setMenuOpen(!menuOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </Col>
        )}
      </Row>
      <div className={`fullscreen-menu ${menuOpen ? 'active' : ''}`}>

        <div className="close-menu" onClick={() => setMenuOpen(false)}>
        <div></div>
        <div></div>
        <div></div>
        </div>

        <nav className="mobile-links">
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="/Szymon_Drapiński_CV.pdf" onClick={() => setMenuOpen(false)}>CV</a>
          <a href="https://github.com/sdrapinski" onClick={() => setMenuOpen(false)}>GitHub</a>
        </nav>
      </div>
      <span className="title"> Full-Stack Developer</span>

      <div className="arrow">
        <a href="#skills">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <span className="thinker">
        <svg
          viewBox="0 0 323 365"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 15">
            <g id="legs">
              <path
                id="Vector"
                d="M30.0857 351.551L25.5059 335.761L88.932 311.849L95.6911 335.153L30.0857 351.551Z"
                fill="#FFB8B8"
              />
              <path
                id="Vector_2"
                d="M14.766 359.699L0 308.785L0.693672 308.611C6.35505 307.196 12.39 307.927 17.471 310.643C22.5521 313.359 26.2631 317.837 27.7879 323.092L27.7883 323.094L36.8067 354.19L14.766 359.699Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_3"
                d="M117.452 349.028L103.207 339.411L136.387 283.822L157.413 298.017L117.452 349.028Z"
                fill="#FFB8B8"
              />
              <path
                id="Vector_4"
                d="M111.044 364.301L65.1094 333.289L65.5319 332.75C68.9804 328.348 74.171 325.398 79.9622 324.549C85.7533 323.7 91.6706 325.021 96.4126 328.222L96.4137 328.222L124.469 347.163L111.044 364.301Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_5"
                d="M238.547 271.348L202.698 239.019C199.57 236.197 195.449 234.519 191.094 234.293C186.739 234.068 182.442 235.309 178.995 237.79L111.308 307.598L117.367 316.348L181.996 275.723L225.755 328.847L267.495 309.473L238.547 271.348Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_6"
                d="M286.345 345.723L271.534 354.472H254.03L172.571 326.348L53.4113 346.347L50.0453 322.597L159.107 278.224L254.704 307.598L286.345 345.723Z"
                fill="#2F2E41"
              />
            </g>
            <g id="body">
              <path
                id="Vector_7"
                d="M322.638 266.792C322.638 281.503 320.141 296.121 315.24 310.11L313.274 315.723L303.849 355.722L293.751 358.222L286.345 349.472L271.534 339.472L260.763 323.223L251.526 308.935L248.645 304.473L238.547 257.599L200.173 237.599L187.382 235.724L190.075 228.849L201.52 214.474L212.964 213.224L216.33 210.724L219.023 211.974L233.868 217.283L281.996 198.406L289.038 199.475L313.274 218.224C319.47 233.771 322.64 250.216 322.638 266.792V266.792Z"
                fill="#E1651F"
              />
              <path
                id="Vector_8"
                opacity="0.1"
                d="M315.293 261.349L289.711 276.973L251.526 308.935L248.645 304.473L240.566 266.974H242.586L263.456 231.35L315.293 261.349Z"
                fill="#E1651F"
              />
              <path
                id="Vector_9"
                d="M263.456 227.599L242.586 263.223L230.468 275.724L219.697 278.224L248.645 307.598L289.711 273.223L315.293 257.598L263.456 227.599Z"
                fill="#E1651F"
              />
              <path
                id="Vector_10"
                d="M223.063 278.223L196.807 276.348L177.793 272.069C176.719 270.513 175.159 269.3 173.321 268.59C171.483 267.88 169.456 267.709 167.511 268.098C165.565 268.488 163.794 269.42 162.435 270.77C161.076 272.119 160.193 273.822 159.906 275.651C159.618 277.479 159.938 279.345 160.824 280.999C161.711 282.654 163.12 284.017 164.864 284.907C166.608 285.798 168.603 286.172 170.583 285.98C172.562 285.789 174.431 285.04 175.94 283.835L175.937 283.848L187.382 288.223L236.527 303.848L242.586 299.473L223.063 278.223Z"
                fill="#FFB9B9"
              />
              <path
                id="Vector_11"
                d="M224.103 184.799C224.112 183.553 223.845 182.318 223.317 181.172C222.789 180.027 222.013 178.994 221.036 178.139C220.06 177.284 218.903 176.626 217.64 176.204C216.377 175.783 215.034 175.608 213.694 175.69C212.355 175.772 211.048 176.11 209.856 176.682C208.663 177.254 207.61 178.048 206.763 179.014C205.916 179.981 205.293 181.099 204.932 182.3C204.571 183.5 204.481 184.757 204.667 185.991L176.611 220.099C175.413 222.322 174.949 224.823 175.276 227.29C175.603 229.756 176.707 232.079 178.449 233.966L180.65 236.349L190.748 234.474L202.193 225.099L200.846 214.474L214.984 193.85L214.966 193.835C217.44 193.689 219.762 192.673 221.459 190.995C223.157 189.316 224.102 187.101 224.103 184.799V184.799Z"
                fill="#FFB9B9"
              />
            </g>
            <g id="head">
              <path
                id="Vector_12"
                d="M254.704 193.85C269.204 193.85 280.96 182.937 280.96 169.475C280.96 156.013 269.204 145.101 254.704 145.101C240.203 145.101 228.448 156.013 228.448 169.475C228.448 182.937 240.203 193.85 254.704 193.85Z"
                fill="#FFB9B9"
              />
              <path
                id="Vector_13"
                d="M234.282 151.352L231.438 152.368C231.006 152.096 230.636 151.748 230.349 151.344C230.062 150.94 229.863 150.487 229.765 150.012C229.666 149.536 229.669 149.048 229.774 148.573C229.879 148.099 230.083 147.649 230.376 147.248C230.391 147.227 230.407 147.206 230.422 147.185L225.166 146.957C228.54 142.784 232.831 139.325 237.753 136.807C242.676 134.289 248.118 132.77 253.721 132.351C259.323 131.932 264.957 132.622 270.25 134.375C275.544 136.129 280.376 138.906 284.427 142.522C284.666 141.757 287.275 143.246 288.341 144.756C288.698 143.51 291.145 149.53 292.01 153.785C292.411 152.368 293.951 154.656 292.601 156.85C293.456 156.734 293.843 158.765 293.181 159.896C294.116 159.489 293.958 161.913 292.944 163.533C294.279 163.423 292.83 188.944 272.801 187.084C271.406 181.136 271.799 181.506 270.157 173.857C269.393 173.104 268.556 172.418 267.72 171.734L263.201 168.03C257.946 163.724 253.166 158.409 246.165 156.799C241.354 155.693 238.312 155.443 240.934 150.411C238.565 151.328 236.353 152.693 233.963 153.545C233.995 152.842 234.329 152.055 234.282 151.352Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_14"
                d="M267.832 176.662C270.434 176.662 272.544 174.704 272.544 172.288C272.544 169.871 270.434 167.913 267.832 167.913C265.229 167.913 263.119 169.871 263.119 172.288C263.119 174.704 265.229 176.662 267.832 176.662Z"
                fill="#FFB9B9"
              />
            </g>
            <path
              id="Vector_15"
              d="M48.069 68.9609L46.6309 89.0083L68.2253 90.3434L69.6634 70.296L48.069 68.9609Z"
              fill="#5A5A5A"
            />
            <path
              id="Vector_16"
              d="M34.1363 79.606L60.3581 81.2272L58.6118 105.57L32.39 103.949L34.1363 79.606ZM59.142 82.2151L35.2004 80.7349L33.606 102.961L57.5476 104.441L59.142 82.2151Z"
              fill="black"
            />
            <path
              id="Vector_17"
              d="M170.102 9.51454L148.943 13.7353L153.49 33.3787L174.649 29.158L170.102 9.51454Z"
              fill="#656565"
            />
            <path
              id="Vector_18"
              d="M155.251 0L160.772 23.8527L135.078 28.9779L129.558 5.12523L155.251 0ZM159.415 23.0385L154.374 1.25992L130.915 5.93946L135.955 27.718L159.415 23.0385Z"
              fill="black"
            />
           
            <path
              id="Vector_19"
              d="M163.8 101.795L144.62 118.473L126.654 100.667L145.834 83.9886L163.8 101.795ZM144.673 116.974L162.185 101.745L145.782 85.4879L128.269 100.716L144.673 116.974Z"
              fill="black"
            />
          </g>
        </svg>
      </span>
      
    </section>
  );
};

export default Dashboard;
