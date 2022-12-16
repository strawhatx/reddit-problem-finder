import { axios } from "../config/axios";
import _axios from "axios";

export const Reddit = {
  last: "",
  search: "",
  size: 25,
  sortBy: "relevance",
  error: false,
  posts: [],

  getPosts: function (setPosts) {
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
        this.posts = res.data?.data?.children.map((i) => {
          return {
            author: i.data.author,
            title: i.data.title,
            text: i.data.selftext,
            html: i.data.selftext_html,
            comments: i.data.num_comments,
            date: i.data.created,
            dateutc: i.data.created_utc,
            upvotes: i.data.ups ?? 0,
            downvotes: i.data.down ?? 0,
          };
        });

        console.log(res.data?.data?.children);

        setPosts(this.posts);
      })
      .catch((e) => {
        if (_axios.isCancel(e)) return;
        this.error = true;
        console.log(e);
      });

    return () => cancel();
  },
};
