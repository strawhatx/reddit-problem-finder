import { axios } from "../config/axios";
import _axios from "axios";

export const Reddit = {
  last: "",
  search: "",
  size: 25,
  sortBy: "relevance",
  error: false,
  posts: [],

  getPosts: function () {
    let cancel;

    axios({
      method: "POST",
      url: "reddit/search",
      data: {
        last: this.last,
        size: this.size,
        sortBy: this.sortBy,
        search: this.search,
      },
      cancelToken: new _axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        this.posts = res.data?.data?.children.map((i) => i.data);
        console.log(this.posts);
      })
      .catch((e) => {
        if (_axios.isCancel(e)) return;
        this.error = true;
        console.log(e);
      });

    return () => cancel();
  },
};
