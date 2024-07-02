import { useEffect, useState } from "react";
import Bookmarks from "./Bookmarks";
import Bookshelf from "./Bookshelf";
import Header from "./Header";
import MoreInfo from "./MoreInfo";

const HomePage = () => {
  const [searchItem, setSearchItem] = useState("python");
  const [bookmark, setBookmark] = useState([]);
  const [data, setData] = useState();
  const [state, setState] = useState(false);
  const [bookData, setBookData] = useState({});
  console.log(bookmark);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=$%7B${searchItem}%7D&startIndex=20&maxResults=20&orderBy=newest`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [searchItem]);
  return (
    <>
      <Header search={setSearchItem} />
      <div className="py-5 shadow-[0_0_2px_0_rgba(0, 0, 0, 0.15)] border-[1px] border-[#e3e6eb] border-solid text-center sticky top-[86px] bg-white z-10">
        {`Showing ${!!data ? data.items.length : ""} Result(s)`}
      </div>
      <main className="bg-[#f8fafd] flex">
        <Bookmarks bookmarks={bookmark} setBookmark={setBookmark} />
        <Bookshelf
          data={data}
          bookmark={setBookmark}
          state={setState}
          bookData={setBookData}
        />
      </main>
      {state && (document.body.classList.add('overflow-hidden'),<MoreInfo bookData={bookData} state={setState} />)}
    </>
  );
};

export default HomePage;
