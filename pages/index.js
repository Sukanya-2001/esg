import Link from "next/link";
import Head from "next/head";
// import { ipoLogo, footerLogo, ipoBanner } from "../constants/images.js";
import { FaBarsStaggered, FaXmark, FaRegClock } from "react-icons/fa6";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { useRef, useState, useEffect } from "react";


function Testing() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [primaryColor] = useState("#1b2e67");
  const [secondaryColor] = useState("#171725");
  const menuRef = useRef();
  const domain = "example.com";
  const tickerSymbol = "ATHR";

  useEffect(() => {
    setTimeout(() => setPageLoading(false), 1200);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const formatSmartDecimal = (num) => {
    if (typeof num !== "number" || isNaN(num)) return "N/A";
    return parseFloat(num.toFixed(2)).toString();
  };

  const formatDate = () => {
    return new Date().toLocaleString("en-US", { timeZone: "America/New_York", year: "numeric", month: "long", day: "2-digit" }) + " EST";
  };

  const menuData = [
    { id: "overview", slug: "overview", label: "Overview", color: primaryColor },
    { id: "press-releases", slug: "press-releases", label: "Press Releases", color: primaryColor },
  ];

  return (
    <>
      <Head>
        <title>Aether Corporation | Investor Relations</title>
        <meta name="description" content="Investor Relations for Aether Corporation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Aether Corporation Investor Relations" />
        {/* <meta property="og:image"  /> */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      {pageLoading ? (
       <p>loading...</p>
      ) : (
        <main className="ipo-container" style={{ overflowX: "hidden" }}>
          <section id="main" >
            <header className="pb-sm-5 pb-4 pt-sm-4 pt-3 bg-transparent">
            <div className="container-fluid">
              <div className="row">
                <div className="d-flex justify-content-lg-between align-items-center px-sm-5 p-3">
                 

                  <div className="menu-btn d-lg-none d-table text-end ms-lg-0 ms-auto me-lg-0 me-4">
                    <button
                      className="menu-toggle border-0 bg-transparent text-light"
                      onClick={toggleMenu}
                    >
                      {isMenuOpen ? (
                        <FaXmark size={28} />
                      ) : (
                        <FaBarsStaggered size={28} />
                      )}
                    </button>
                  </div>

                  <ul
                    className={`mb-0 navMenu ${isMenuOpen ? "open" : ""}`}
                    ref={menuRef}
                  >
                    {menuData?.map((item, index) => {
                      const uniqueClass = `nav-link-${item.slug}`;
                      const underlineColor = item.color || "#6c5ce7";

                      return (
                        <li
                          className="nave-item d-lg-inline-block d-block px-xl-4 px-3 py-3"
                          key={item.id}
                        >
                          <a
                            href={`#${item.slug}`}
                            className={`nave-link d-block fw-normal me-xl-3 me-0 position-relative ${uniqueClass}`}
                            style={{ textDecoration: "none" }}
                          >
                            {console.log("color" + underlineColor)}
                            {item.label}
                            <span style={{ background: underlineColor }}></span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </header>
            <section className="banner">
              <div className="container-md px-3">
                <div className="row">
                  <div className="col-lg-7 py-5">
                    <h1 className="fw-medium text-uppercase text-lg-start text-center" style={{ color: "#ffffff" }}>
                      Investor Relations
                    </h1>
                  </div>
                  <div className="col-lg-5 py-5">
                    <table className="table bg-transparent">
                      <thead>
                        <tr>
                          <th></th>
                          <th><h3 className="text-light">{tickerSymbol}</h3></th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        <tr>
                          <td colSpan={2}><p className="text-light">{formatDate()}</p></td>
                        </tr>
                        <tr>
                          <td colSpan={2} className="d-flex">
                            <FaRegClock size={18} color="#fff" />
                            <p className="text-light ms-3">Open Monday to Friday, 9:30 AM to 4:00 PM EST</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <footer className="py-5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-4">
                  {/* <img src={footerLogo} alt="footer logo" /> */}
                </div>
                <div className="col-lg-4">
                  <h3><Link href={`https://${domain}`}>Aether Corporation</Link></h3>
                  <p>1234 Market Street, New York, NY 10001</p>
                </div>
                <div className="col-lg-4">
                  <p><IoIosMail /> <Link href="mailto:investor@aethercorp.com">investor@aethercorp.com</Link></p>
                  <p><IoIosCall /> <Link href="tel:+1-800-555-1234">+1-800-555-1234</Link></p>
                </div>
              </div>
              <p className="text-center mt-4">{new Date().getFullYear()} GetIRNow. All Rights Reserved</p>
            </div>
          </footer>
        </main>
      )}
    </>
  );
}

export default Testing;
