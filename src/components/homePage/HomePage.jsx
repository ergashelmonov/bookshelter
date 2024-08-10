import { useEffect, useState } from "react";
import Bookmarks from "./Bookmarks";
import Bookshelf from "./Bookshelf";
import Header from "./Header";
import MoreInfo from "./MoreInfo";
import NotFound from "../NotFound";
import Skleton from "../loader/Skleton";

// Object({ c: "D" }).d;

const HomePage = () => {
  const [searchItem, setSearchItem] = useState("python");
  const [bookmark, setBookmark] = useState([]);
  const [data, setData] = useState({ totalItems: 0 });
  const [state, setState] = useState(false);
  const [bookData, setBookData] = useState({});
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=$%7B${searchItem}%7D&startIndex=20&maxResults=20&orderBy=newest`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => setData(err));
  }, [searchItem]);

  return (
    <>
      <Header search={setSearchItem} />
      <div className="py-5 shadow-[0_0_2px_0_rgba(0, 0, 0, 0.15)] border-[1px] border-[#e3e6eb] border-solid text-center sticky top-[86px] bg-white z-10 max-[650px]:min-w-[540px]">
        {`Showing 20 Result(s)`}
      </div>
      <main className="flex max-[650px]:flex-col max-[650px]:min-w-[540px] m">
        <Bookmarks bookmarks={bookmark} setBookmark={setBookmark} />
        {data.totalItems !== 0 ? (
          <Bookshelf
            data={data}
            bookmark={setBookmark}
            state={setState}
            bookData={setBookData}
          />
        ) : (
          <Skleton />
        )}
      </main>
      {state &&
        (document.body.classList.add("overflow-hidden"),
        (<MoreInfo bookData={bookData} state={setState} />))}
    </>
  );
};

export default HomePage;
