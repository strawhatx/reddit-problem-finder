import React, { useState } from "react";
import { Container } from "react-bootstrap";
import search_img from "../../../assets/svg/search.svg";
import { axios } from "../../../config/axios";
import _axios from "axios";

const SearchView = () => {
  const [last, setLast] = useState(1);
  const [search, setSearch] = useState("");
  const [size, setSize] = useState(25);
  const [sortBy, setSortBy] = useState("ASC");
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    let cancel;

    axios({
      method: "POST",
      url: "reddit/search",
      data: { last, size, sortBy, search },
      cancelToken: new _axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setTotal(res.data.data.stats.total);
        setPosts(res.data.data.data);
      })
      .catch((e) => {
        if (_axios.isCancel(e)) return;
        setError(true);
      });

    return () => cancel();
  };

  return (
    <>
      <div
        className="d-flex justify-content-center bg-light text-dark"
        style={{ height: "80vh" }}
      >
        <Container fluid="sm">
          <div className="row height d-flex justify-content-center align-items-center pt-4">
            <div className="col-md-6">
              <form action="">
                <div className="p-1 bg-white rounded rounded-pill shadow-sm mb-4">
                  <div className="input-group">
                    <input
                      type="search"
                      placeholder="What're you searching for?"
                      aria-describedby="button-addon1"
                      onChange={(e) => setSearch(e.target.value)}
                      className="form-control border-0 bg-white"
                    />
                    <div className="input-group-append">
                      <button
                        id="button-addon1"
                        type="submit"
                        className="btn btn-link text-primary"
                        onClick={() => fetchPosts()}
                      >
                        <img
                          src={search_img}
                          width={20}
                          height={20}
                          alt="search"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SearchView;
