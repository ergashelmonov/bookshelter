import PropTypes from "prop-types";
import Clear from "../../assets/svg/clear.svg";
import Book from "../../assets/svg/book.svg";

const Bookmarks = ({ bookmarks, setBookmark }) => {
  return (
    <aside className="min-w-[268px] w-full bg-white shadow-[0_3px_2px_0_rgba(0,0,0,0.1)] min-h-[300px] max-h-[830px] sticky left-0 top-[154px] p-[25px] overflow-auto">
      <div>
        <h1 className="font-normal text-2xl text-black">Bookmarks</h1>
        <p className="font-normal text-sm leading-[156%] mb-6">
          If you don’t like to read, you haven’t found the right book
        </p>
      </div>
      {bookmarks.map((item, index) => {
        return (
          <div
            key={index}
            className="rounded w-full min-h-[72px] bg-[#f8fafd] px-[10px] py-[15px] flex items-center justify-between mb-[15px]"
          >
            <div>
              <h2 className="font-normal text-base text-[#000]">{item[1]}</h2>
              <p className="font-medium text-[13px] text-[#757881]">
                {item[0]}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <a href={item[2]}>
                <Book />
              </a>
              <button
                onClick={() => {
                  bookmarks.splice(index, 1);
                  setBookmark([...bookmarks]);
                }}
              >
                <Clear />
              </button>
            </div>
          </div>
        );
      })}
    </aside>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  setBookmark: PropTypes.func,
};
export default Bookmarks;
