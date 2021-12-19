import { useContext, useState } from "react";
import "./mycert.css";
import Rating from "../utilities/Rating";
import { StoreContext } from "../store";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function MyCert() {
  const images = importAll(
    require.context("../assets/Certificates", false, /\.(png|jpe?g|svg)$/)
  );
  // console.log(images);
  const { cert } = useContext(StoreContext);

  const certificateDetails = cert[0];
  const [sortByValue, setSortByValue] = useState(true);

  sortByValue
    ? certificateDetails
        .sort(function (a, b) {
          return a.issueDate.localeCompare(b.issueDate);
        })
        .reverse()
    : certificateDetails.sort(function (a, b) {
        return a.issueDate.localeCompare(b.issueDate);
      });

  const [pageNo, setPageNo] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);

  const pageHandle = () => {
    var x = document.getElementById("pages").value;
    setPageNo(parseInt(x));
  };

  const pageIndexHandler = (props) => {
    var x = props && props.target.innerText;
    setPageIndex(parseInt(x));
  };

  const paginaton = () => {
    var loop = Math.ceil(certificateDetails.length / pageNo);

    var pagelist = [];

    pageIndex > loop && setPageIndex(loop);

    for (var i = 0; i < loop; i++) {
      var classes =
        pageIndex === 1
          ? i === 0
            ? "page-item active"
            : "page-item"
          : pageIndex > loop
          ? i === loop - 1
            ? "page-item active"
            : "page-item"
          : pageIndex === i + 1
          ? "page-item active"
          : "page-item";

      pagelist.push(
        <li className={classes} key={i}>
          <a className="page-link" onClick={(e) => pageIndexHandler(e)}>
            {i + 1}
          </a>
        </li>
      );
    }
    return (
      <ul className="pagination">
        {pageIndex > 1 && (
          <li className="page-item">
            <a
              className="page-link"
              onClick={(e) => setPageIndex(pageIndex - 1)}
            >
              Previous
            </a>
          </li>
        )}

        {pagelist.map((page) => page)}
        {pageIndex < loop && (
          <li className="page-item">
            <a
              className="page-link"
              onClick={(e) => setPageIndex(pageIndex + 1)}
            >
              Next
            </a>
          </li>
        )}
      </ul>
    );
  };

  const certificateCard = (certifcate) => {
    return (
      <article className="card card-product-list" key={certifcate.alias}>
        <div className="row no-gutters">
          <aside className="col-md-3">
            <a href={certifcate.source} target="_blank" className="img-wrap">
              {/* <span className="badge badge-danger"> NEW </span> */}
              <img
                src={
                  images[certifcate.alias] && images[certifcate.alias].default
                }
                className="cert_pic"
              />
            </a>
          </aside>
          <div className="col-md-6">
            <div className="info-main">
              <a href={certifcate.source} target="_blank" className="link-text">
                {certifcate.title}
              </a>
              <div className="cert-company">
                <span className="cert-title">Issuing organization:</span>{" "}
                {certifcate.company}
              </div>
              {/* <p className='cert-description'>{certifcate.description}</p> */}
              <div>
                <Rating value={certifcate.rating} />
              </div>
              <div>
                <p>
                  <span className="cert-title">Technologies Learned: </span>
                </p>
              </div>
            </div>
          </div>
          <aside className="col-sm-3">
            <div className="info-aside">
              <div className="cert-date">
                Issue Date: {certifcate.issueDate}
              </div>
              <p>
                <a
                  className="cert-link"
                  href={certifcate.source}
                  target="_blank"
                >
                  Show Detail
                </a>
              </p>
            </div>
          </aside>
        </div>
      </article>
    );
  };

  return (
    <div>
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <main className="col-md-12">
              <header className="border-bottom mb-4 pb-3">
                <div className="form-inline">
                  <span className="mr-md-auto">
                    <h2 class="heading-text">
                      {certificateDetails.length} Certificates
                      {" (Edward Low Jin Zhang)"}
                    </h2>
                  </span>
                </div>
                <div className="cert-filter">
                  <span className="filter-title">Issue Date:  </span>
                  <i
                    className={
                      sortByValue
                        ? "fas fa-sort-numeric-down"
                        : "fas fa-sort-numeric-up"
                    }
                    onClick={(e) => setSortByValue(!sortByValue)}
                  ></i>
                </div>
              </header>
              {certificateDetails
                .slice((pageIndex - 1) * pageNo, pageIndex * pageNo)
                .map((item) => certificateCard(item))}
              <div className="row cert-flex">
                <div className="col-md-2 mt-4 cert-pages">
                  <select
                    className="mr-2 form-control"
                    id="pages"
                    onChange={pageHandle}
                  >
                    <option value="10" default>
                      10
                    </option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                  </select>
                </div>
                <div className="col-md-1 mt-4 cert-page-text">Pages</div>
                <nav
                  className="col-md-4 mt-4"
                  aria-label="Page navigation sample"
                >
                  {paginaton()}
                </nav>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
export default MyCert;
