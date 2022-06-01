import React from "react";
import Logo from "../../assets/Logo/Logo";
import "./Header.css";
import { Link } from "react-router-dom";
import UserProfile from "./User/User";
import { useState, useEffect } from "react";
export default function Header() {
  const [navSize, setnavSize] = useState("");
  const [navColorText, setColorText] = useState("#1b0a0a");
  const [searchValue, setsearchValue] = useState("");
  const [navcategory, setNavCategory] = useState([]);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavSize("4rem") : setnavSize("2rem");
    window.scrollY > 10 ? setColorText("white") : setColorText("black");
  };

  const handleClear = () => {
    setsearchValue("");
  };
  const handleSubmitChange = (e) => {
    e.preventdefault();
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch("api/nav/category");
      const data = await res.json();
      let result = [];
      data.forEach((cate) => {
        let index;

        const isExist = result.find((v, i) => {
          index = i;
          return v.CateName === cate.CateName;
        });

        if (!isExist) {
          result.push({
            CateName: cate.CateName,
            SubName: cate.SubName ? [cate.SubName] : null,
          });
        } else if (cate.SubName) {
          result[index].SubName = [...result[index].SubName, cate.SubName];
        }
      });
      setNavCategory(result);
    })();
  }, []);
  // console.log(navcategory)
  const rendernavCategory = () => {
    return navcategory.map((category, index) => {
      return (
        <li className={category.SubName ? "nav-item dropdown " :"nav-item" } key={index}>
          <Link
          href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
            to={"#"}
            className={category.SubName ? "nav-link dropdown-toggle": "nav-link"}
            style={{ color: navColorText }}
          >
            {category.CateName}
          </Link>

          {category.SubName !== null && (
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {category.SubName.map((v, i) => {
                return (
                  <Link
                    to={"#"}
                    className="dropdown-item"
                    key={i}
                  >
                    {v}
                  </Link>
                );
              })}
            </div>
          )}
        </li>
      );
    });
  };

  return (
    <div
      className="Navigation"
      style={{ height: navSize, transition: "all 1s"}}
    >
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#undefine">
          <Link to="/homepage">
            <Logo />
          </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse  "
          id="navbarSupportedContent"
          style={{ color: navColorText }}
        >
          <div className="menu">
            <ul className="navbar-nav mr-auto ">
              {rendernavCategory()}
            </ul>

            <div className="Search ">
              <form
                action=""
                className=""
                onSubmit={(e) => {
                  handleSubmitChange(e);
                }}
              >
                <input
                  type="search"
                  name="text"
                  onChange={(e) => setsearchValue(e.target.value)}
                  value={searchValue}
                  placeholder="Search for a title..."
                />
                {/* render co dieu kien */}
                {!!searchValue && (
                  <button
                    className="clear"
                    style={{ color: navColorText }}
                    onClick={handleClear}
                  >
                    <i className="bi bi-x-circle-fill"></i>
                  </button>
                )}
                {
                  // loading
                }

                <button className="search-btn " style={{ color: navColorText }}>
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>
            <div className="User">
              <UserProfile />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
