import Image from 'next/image';
import Head from 'next/head'

import portrait from "../public/assets/portrait.jpg";


export default function Card() {
  return (
    <span className="cardWrap">
      <style jsx>{`
        input[type='range']::-moz-range-track {
            background: none;
          }
      
          input[type='range']::-moz-range-thumb {
            -moz-appearance: none;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 0.25rem;
            border: none;
            background: #a7c7f5;
            z-index: 3;
            cursor: pointer;
          }
      
          input[type='range']::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 0.25rem;
            border: none;
            background: #a7c7f5;
            z-index: 3;
            cursor: pointer;
          }

          html {
            background: #010101;
          }
      
          .closeColor {}
      
          .topAction {}
      
          .iconColor {
            color: #eee;
            filter: invert(1)
          }
      
          .cardColor {
            color: #222 !important
          }
      
          .textColor {
            color: #eee !important
          }
      
          .seekbarColor {
            background: #a7c7f580 !important
          }
      `}</style>
      <div
        id="modal"
        style={{
          backgroundColor: "rgb(1, 1, 1)",
          visibility: "hidden",
          top: "2rem",
          opacity: 0,
        }}
      >
        <a id="close" className="closeColor">
          <div className="icon">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 2
              }}
            >
              <path style={{ fill: "none" }} d="M0 0h24v24H0z" />
              <path
                d="M18 6 6 18M6 6l12 12"
                style={{
                  fill: "none",
                  fillRule: "nonzero",
                  stroke: "#fff",
                  strokeWidth: 2
                }}
              />
            </svg>
          </div>
        </a>
        <div id="copyView">
          <p className="textColor">
            Copy and send the URL to share my Business Card
          </p>{" test"}
          <button id="copyURL" style={{ backgroundColor: "rgb(167, 199, 245)" }}>
            <div className="icon iconColor">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2
                }}
              >
                <path style={{ fill: "none" }} d="M0 0h24v24H0z" />
                <path
                  d="M22 11a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9Z"
                  style={{ fill: "none", stroke: "#fff", strokeWidth: 2 }}
                />
                <path
                  d="M5 15H4c-1.097 0-2-.903-2-2V4c0-1.097.903-2 2-2h9c1.097 0 2 .903 2 2v1"
                  style={{
                    fill: "none",
                    fillRule: "nonzero",
                    stroke: "#fff",
                    strokeWidth: 2
                  }}
                />
              </svg>
            </div>{" "}
            <span className="iconColor">Copy URL</span>
          </button>
        </div>
        {/* <div id="qrView" className="textColor">
          <div id="qr" />
          <h3>Scan the QR Code</h3>
          <p>to view my Business Card on another device</p>
        </div> */}
      </div>
      <header>
        <div id="topActions" style={{ display: "none" }}>
          <div>
            <a id="share">
              <div className="icon topAction">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeMiterlimit: 2
                  }}
                >
                  <g>
                    <path style={{ fill: "none" }} d="M0 0h24v24H0z" />
                    <clipPath id="a">
                      <path d="M0 0h24v24H0z" />
                    </clipPath>
                    <g clipPath="url(#a)">
                      <circle
                        cx={17}
                        cy={5}
                        r={3}
                        style={{ fill: "none", stroke: "#fff", strokeWidth: 2 }}
                      />
                      <circle
                        cx={5}
                        cy={12}
                        r={3}
                        style={{ fill: "none", stroke: "#fff", strokeWidth: 2 }}
                      />
                      <circle
                        cx={17}
                        cy={19}
                        r={3}
                        style={{ fill: "none", stroke: "#fff", strokeWidth: 2 }}
                      />
                      <path
                        d="m7.59 13.51 6.83 3.98m-.01-10.98-6.82 3.98"
                        style={{ fill: "none", stroke: "#fff", strokeWidth: 2 }}
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </a>{" "}
            <a id="showQR">
              <div className="icon topAction">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2
                  }}
                >
                  <path style={{ fill: "none" }} d="M0 0h24v24H0z" />
                  <path
                    d="M4 4h4v4H4V4Zm0 12h4v4H4v-4ZM16 4h4v4h-4V4Z"
                    style={{ fill: "none", stroke: "#fff", strokeWidth: 2 }}
                  ></path>
                  <path
                    d="M12 4v14c0 1.097.903 2 2 2h4c1.097 0 2-.903 2-2v-4c0-1.097-.903-2-2-2H4"
                    style={{
                      fill: "none",
                      stroke: "#fff",
                      strokeWidth: 2,
                      strokeLinejoin: "miter"
                    }}
                  />
                  <path style={{ fill: "#fff" }} d="M15 15h2v2h-2z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="headerImgC"></div>
      </header>
      <main style={{ backgroundColor: "rgb(1, 1, 1)", marginTop: "5rem" }}>
        <span className="cardImg">
          {/* <Image
          alt="Professional portrait of Bray"
          src={portrait}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          placeholder="blur"
          priority="true"
        /> */}
        </span>
        <div id="info" className="textColor">
          <p className="name">Bray Polkinghorne</p>
          <p className="jobtitle"></p>
          <p className="bizname"></p>
        </div>
        <a
          id="cta"
          rel="noreferrer"
          download=""
          target="_blank"
          aria-label="Save Contact"
          style={{ backgroundColor: "rgb(167, 199, 245)" }}
          href="braypolkinghorne.vcf"
        >
          <div className="icon iconColor">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 2
              }}
            >
              <path style={{ fill: "none" }} d="M0 0h24v24H0z" />
              <circle
                cx="8.5"
                cy={7}
                r={4}
                style={{ fill: "none", stroke: "#fff", strokeWidth: "2.29px" }}
                transform="matrix(.875 0 0 .875 4.563 -.625)"
              />
              <path
                d="M86 181c0-3.863 3.137-7 7-7s7 3.137 7 7"
                style={{ fill: "none", stroke: "#fff", strokeWidth: 2 }}
                transform="translate(-81 -163)"
              />
              <path
                d="M104 168v6m3-3-3 3-3-3"
                style={{
                  fill: "none",
                  fillRule: "nonzero",
                  stroke: "#fff",
                  strokeWidth: 2
                }}
                transform="translate(-92 -152)"
              />
            </svg>
          </div>
          <p className="iconColor">Save Contact</p>
        </a>
        <div className="actions">
          <div className="actionsC">
            <div className="actionBtn">
              <a
                href="tel:0000000000" // change this to be real when some sort of security is in place
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mobile"
                style={{ backgroundColor: "rgb(167, 199, 245)" }}
              >
                <div className="icon iconColor">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 2
                    }}
                  >
                    <path style={{ fill: "none" }} d="M0 0h24v24H0z" />
                    <path
                      d="M11.5 22a.952.952 0 0 1-1.052.945c-4.358-.544-7.851-4.338-8.379-8.39a.938.938 0 0 1 .936-1.046c.399-.009.847-.009 1.202-.009.388 0 .738.237.882.597l.478 1.196a.95.95 0 0 1-.21 1.025l-.107.107a.951.951 0 0 0-.181 1.091c.495.825 1.59 1.92 2.425 2.396a.927.927 0 0 0 1.066-.177c.05-.02.086-.056.122-.092a.95.95 0 0 1 1.025-.21l1.196.478c.36.144.597.494.597.882V22Z"
                      style={{ fill: "none", stroke: "#fff", strokeWidth: ".95px" }}
                      transform="translate(-2.21 -26.421) scale(2.10526)"
                    ></path>
                  </svg>
                </div>
              </a>
              <p className="textColor">Mobile</p>
            </div>
          </div>
          <div className="actionsC">
            <div className="actionBtn">
              <a
                href="sms:3038100756"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SMS"
                style={{ backgroundColor: "rgb(167, 199, 245)" }}
              >
                <div className="icon iconColor">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 2
                    }}
                  >
                    <path style={{ fill: "none" }} d="M0 0h24v24H0z" />
                    <path
                      d="M75.3 61c.477 0 .935.171 1.273.476.337.305.527.718.527 1.149v8.125c0 .897-.806 1.625-1.8 1.625h-8.975a9.7 9.7 0 0 0-4.992 1.365L60.9 74V62.625c0-.431.19-.844.527-1.149A1.904 1.904 0 0 1 62.7 61h12.6Z"
                      style={{
                        fill: "none",
                        stroke: "#fff",
                        strokeWidth: "1.71px"
                      }}
                      transform="matrix(1.11111 0 0 1.23077 -64.667 -71.077)"
                    />
                    <path
                      d="M36 13h4"
                      style={{
                        fill: "none",
                        stroke: "#fff",
                        strokeWidth: 2,
                        strokeLinejoin: "miter"
                      }}
                      transform="translate(-28)"
                    />
                    <path
                      d="M36 9h8"
                      style={{ fill: "none", stroke: "#fff", strokeWidth: 2 }}
                      transform="translate(-28)"
                    />
                  </svg>
                </div>
              </a>
              <p className="textColor">SMS</p>
            </div>
          </div>
          <div className="actionsC">
            <div className="actionBtn">
              <a
                href="mailto:test@test.com" // change this to be real when some sort of security is in place
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                style={{ backgroundColor: "rgb(167, 199, 245)" }}
              >
                <div className="icon iconColor">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 2
                    }}
                  >
                    <path style={{ fill: "none" }} d="M0 0h24v24H0z" />
                    <path
                      d="M22 33.75c0-.966-.896-1.75-2-1.75H4c-1.104 0-2 .784-2 1.75v10.5c0 .966.896 1.75 2 1.75h16c1.104 0 2-.784 2-1.75v-10.5Z"
                      style={{
                        fill: "none",
                        stroke: "#fff",
                        strokeWidth: "1.86px"
                      }}
                      transform="matrix(1 0 0 1.14286 0 -32.571)"
                    />
                    <path
                      d="m18 7.042-6 2.625-6-2.625"
                      style={{
                        fill: "none",
                        fillRule: "nonzero",
                        stroke: "#fff",
                        strokeWidth: "1.86px"
                      }}
                      transform="matrix(1 0 0 1.14286 0 1.952)"
                    />
                  </svg>
                </div>
              </a>
              <p className="textColor">Email</p>
            </div>
          </div>
          <div className="actionsC">
            <div className="actionBtn">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                href="bray.dev"
                style={{ backgroundColor: "rgb(167, 199, 245)" }}
              >
                <div className="icon iconColor">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 2
                    }}
                  >
                    <g>
                      <path style={{ fill: "none" }} d="M0 0h24v24H0z" />
                      <clipPath id="a">
                        <path d="M0 0h24v24H0z" />
                      </clipPath>
                      <g clipPath="url(#a)">
                        <circle
                          cx={12}
                          cy={12}
                          r={10}
                          style={{ fill: "none", stroke: "#fff", strokeWidth: 2 }}
                        />
                        <ellipse
                          cx={40}
                          cy={40}
                          rx={4}
                          ry={10}
                          style={{
                            fill: "none",
                            stroke: "#fff",
                            strokeWidth: 2,
                            strokeLinejoin: "miter"
                          }}
                          transform="translate(-28 -28)"
                        />
                        <path
                          d="M40 50s-2-4-2-10 2-10 2-10"
                          style={{ fill: "none", stroke: "#fff", strokeWidth: 2 }}
                          transform="rotate(-90 11.5 39.5)"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </a>
              <p className="textColor">Website</p>
            </div>
          </div>
        </div>
        <div className="actions secondary">
          <div className="actionsC">
            <div className="actionBtn secBtn">
              <a
                href="https://linkedin.com/https://www.linkedin.com/in/braypolk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ background: "rgb(0, 119, 181)" }}
              >
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="actionsC">
            <div className="actionBtn secBtn">
              <a
                href="https://github.com/https://github.com/Braypolk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{ background: "rgb(51, 51, 51)" }}
              >
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="#fff"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.03 2a9.97 9.97 0 0 0-3.16 19.44c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.91-.61.06-.6.06-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.9.83.1-.65.35-1.09.64-1.34-2.22-.25-4.55-1.1-4.55-4.93 0-1.08.4-1.98 1.03-2.67-.1-.26-.45-1.27.1-2.64 0 0 .83-.27 2.74 1.02a9.58 9.58 0 0 1 5 0c1.9-1.3 2.73-1.02 2.73-1.02.55 1.37.2 2.38.1 2.64.64.7 1.03 1.58 1.03 2.67 0 3.84-2.33 4.68-4.56 4.92.36.31.68.92.68 1.85l-.01 2.74c0 .26.18.57.68.48A9.98 9.98 0 0 0 12.03 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="actionsC">
            <div className="actionBtn secBtn">
              <a
                href="https://instagram.com/https://www.instagram.com/braypolk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ background: "rgb(255, 255, 255)" }}
              >
                <div className="icon">
                  <svg
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 2
                    }}
                  >
                    <path
                      d="M4.796,1.577C4.072,1.859 3.459,2.234 2.847,2.847C2.234,3.455 1.859,4.073 1.577,4.793C1.304,5.49 1.121,6.291 1.067,7.463C1.013,8.634 1,9.01 1,11.998C1,14.985 1.013,15.361 1.067,16.533C1.121,17.705 1.309,18.505 1.577,19.203C1.859,19.927 2.234,20.54 2.847,21.153C3.459,21.766 4.072,22.141 4.796,22.423C5.494,22.696 6.294,22.879 7.466,22.933C8.637,22.987 9.013,23 12,23C14.987,23 15.363,22.987 16.534,22.933C17.706,22.879 18.506,22.691 19.204,22.423C19.928,22.141 20.541,21.766 21.153,21.153C21.766,20.54 22.141,19.927 22.423,19.203C22.696,18.505 22.879,17.705 22.933,16.533C22.987,15.361 23,14.985 23,11.998C23,9.01 22.987,8.634 22.933,7.463C22.879,6.291 22.691,5.49 22.423,4.793C22.141,4.073 21.766,3.455 21.158,2.847C20.545,2.234 19.933,1.859 19.208,1.577C18.511,1.304 17.71,1.121 16.539,1.067C15.367,1.013 14.991,1 12.004,1C9.017,1 8.642,1.013 7.47,1.067C6.294,1.116 5.494,1.304 4.796,1.577ZM16.445,3.044C17.518,3.093 18.099,3.272 18.488,3.424C19.002,3.625 19.369,3.862 19.754,4.247C20.138,4.632 20.375,4.998 20.576,5.513C20.728,5.902 20.907,6.483 20.957,7.557C21.01,8.715 21.019,9.064 21.019,12.002C21.019,14.941 21.006,15.289 20.957,16.448C20.907,17.521 20.728,18.103 20.576,18.492C20.375,19.006 20.138,19.373 19.754,19.757C19.369,20.142 19.002,20.379 18.488,20.58C18.099,20.732 17.518,20.911 16.445,20.961C15.287,21.014 14.938,21.023 12,21.023C9.062,21.023 8.713,21.01 7.555,20.961C6.482,20.911 5.901,20.732 5.512,20.58C4.998,20.379 4.631,20.142 4.246,19.757C3.862,19.373 3.625,19.006 3.424,18.492C3.272,18.103 3.093,17.521 3.043,16.448C2.99,15.289 2.981,14.941 2.981,12.002C2.981,9.064 2.994,8.715 3.043,7.557C3.093,6.483 3.272,5.902 3.424,5.513C3.625,4.998 3.862,4.632 4.246,4.247C4.631,3.862 4.998,3.625 5.512,3.424C5.901,3.272 6.482,3.093 7.555,3.044C8.713,2.99 9.062,2.981 12,2.981C14.938,2.981 15.287,2.99 16.445,3.044ZM6.352,12.002C6.352,15.124 8.883,17.651 12,17.651C15.117,17.651 17.648,15.12 17.648,12.002C17.648,8.885 15.121,6.354 12,6.354C8.879,6.354 6.352,8.88 6.352,12.002ZM15.667,12.002C15.667,14.028 14.026,15.67 12,15.67C9.974,15.67 8.333,14.028 8.333,12.002C8.333,9.976 9.974,8.335 12,8.335C14.026,8.335 15.667,9.976 15.667,12.002ZM17.876,4.811C18.604,4.811 19.195,5.402 19.195,6.13C19.195,6.858 18.604,7.449 17.876,7.449C17.148,7.449 16.557,6.858 16.557,6.13C16.557,5.402 17.148,4.811 17.876,4.811Z"
                      style={{ fill: "url(#YSppkUn)", fillRule: "nonzero" }}
                    />
                    <defs>
                      <radialGradient
                        id="YSppkUn"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(-22,22,-22,-22,23,1)"
                      >
                        <stop
                          offset={0}
                          style={{ stopColor: "#4c63d2", stopOpacity: 1 }}
                        />
                        <stop
                          offset="0.4"
                          style={{ stopColor: "#bc3081", stopOpacity: 1 }}
                        />
                        <stop
                          offset="0.75"
                          style={{ stopColor: "#f47133", stopOpacity: 1 }}
                        />
                        <stop
                          offset={1}
                          style={{ stopColor: "#fed576", stopOpacity: 1 }}
                        />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="featured">
          <h2 className="section textColor">Section title</h2>
        </div>
      </main>
      {/* <script>let m = document.getElementById("modal"), c = document.getElementById("close"), ki = document.getElementById("keyView"), cv = document.getElementById("copyView"), curl = document.getElementById("copyURL"), qrv = document.getElementById("qrView"), qr = document.getElementById("qr"), s = document.getElementById("share"), sqr = document.getElementById("showQR"), sk = document.getElementById("showKey"); function tC(e) {"2rem" == e.style.top ? (e.style.visibility = "visible", e.style.top = "0px", e.style.opacity = 1) : (e.style.top = "2rem", e.style.opacity = 0, setTimeout(() => { e.style.visibility = "hidden" }, 200))} function dN(e) {e.style.display = "none"} window.addEventListener("load", () => {document.querySelector("#topActions").style.display = "flex", qr.innerHTML = new QRCode({ content: window.location.href, container: "svg-viewbox", join: !0, ecl: "L", padding: 0 }).svg()}), navigator.canShare ? s.addEventListener("click", () => {navigator.share({ title: document.title, text: "You can view my Digital Business Card here:", url: window.location.href })}) : s.addEventListener("click", () => {tC(m), cv.style.display = "flex", dN(qrv), ki && dN(ki)}), sqr.addEventListener("click", () => {tC(m), qrv.style.display = "block", dN(cv), ki && dN(ki)}), sk && sk.addEventListener("click", () => {tC(m), ki && (ki.style.display = "flex"), dN(cv), dN(qrv)}), c.addEventListener("click", () => tC(m)), curl.addEventListener("click", async () => {let e = curl.querySelectorAll(".iconColor")[1]; await navigator.clipboard.writeText(window.location.href).then(t => {e.innerText = "Copied", setTimeout(() => { e.innerText = "Copy URL" }, 1e3)})});</script>
            <script>let pC = document.querySelectorAll(".pCtrl"), pP = document.querySelectorAll(".playPause"), srcs = document.querySelectorAll(".source"); srcs.forEach(e => {e.style.pointerEvents = "none", e.removeAttribute("controls")}), pC.forEach((e, l) => {e.style.display = "flex"; let r = e.querySelector(".currentTime"), s = e.querySelector(".seekBar"), t = e.querySelector(".playPause"), a = t.querySelector(".play"), c = t.querySelector(".pause"); srcs[l].addEventListener("timeupdate", () => {let e = srcs[l].currentTime, t = 100 / srcs[l].duration * e; s.value = t, 100 == t && (s.value = 0, a.style.display = "block", c.style.display = "none"); let o = Math.floor(e / 60), y = Math.floor(e % 60); o.toString().length < 2 && (o = "0" + o), y.toString().length < 2 && (y = "0" + y), r.value = o + ":" + y}), s.addEventListener("change", () => {srcs[l].currentTime = srcs[l].duration * (parseInt(s.value) / 100)}), t.addEventListener("click", () => {srcs[l].paused ? (srcs.forEach((e, r) => { l != r && (e.paused || e.pause()) }), pP.forEach((e, l) => { let r = e.querySelector(".play"), s = e.querySelector(".pause"); r.style.display = "block", s.style.display = "none" }), srcs[l].play(), a.style.display = "none", c.style.display = "block") : (srcs[l].pause(), c.style.display = "none", a.style.display = "block")})});</script> */}

    </span>

  )
}
