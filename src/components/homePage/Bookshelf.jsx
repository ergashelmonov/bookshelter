import PropTypes from "prop-types";
import { useState } from "react";
const Bookshelf = ({ data, bookmark, state, bookData }) => {
  return (
    <section className="p-10 flex flex-wrap gap-[33px]">
      {!!data
        ? data.items.map((item, index) => {
            return (
              <div
                key={item.id + index}
                className="bg-white py-[13px] px-[15px] rounded-md shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] max-w-[282px] flex flex-col justify-between"
              >
                <div className="p-5 bg-[#f8fafd] rounded-md mb-[19px]">
                  <img
                    src={item.volumeInfo.imageLinks.thumbnail}
                    alt=""
                    className="w-[202px] h-[201px] rounded-md"
                  />
                </div>
                <div>
                  <h2 className="font-medium text-lg text-black">
                    {item.volumeInfo.title}
                  </h2>
                  <p className="font-medium text-[13px] text-[#757881]">
                    {item.volumeInfo.publisher}
                  </p>
                  <span className="font-medium text-[13px] text-[#757881]">
                    {item.volumeInfo.publishedDate.slice(0, 4)}
                  </span>
                </div>
                <div className="grid grid-rows-2 grid-cols-2 gap-[6px] mt-[10px]">
                  <button
                    className="w-[120px] h-[37px] rounded bg-[#ffd80d]  text-black font-medium text-sm"
                    onClick={() =>
                      bookmark((items) => [
                        ...items,
                        [
                          item.volumeInfo.publisher,
                          item.volumeInfo.title,
                          item.volumeInfo.canonicalVolumeLink,
                        ],
                      ])
                    }
                  >
                    Bookmark
                  </button>
                  <button
                    onClick={() => {
                      state(true);
                      bookData(item);
                    }}
                    className="w-[120px] h-[37px] rounded bg-[rgba(13,117,255,0.05)] font-medium text-sm text-[#0d75ff]"
                  >
                    More Info
                  </button>
                  <button className="w-[246px] h-[37px] rounded col-span-2 bg-[#75828a] text-white font-medium text-sm">
                    <a href={item.volumeInfo.canonicalVolumeLink}>Read</a>
                  </button>
                </div>
              </div>
            );
          })
        : ""}
    </section>
  );
};
Bookshelf.propTypes = {
  data: PropTypes.object,
  bookmark: PropTypes.func,
  state: PropTypes.func,
  bookData: PropTypes.func,
};
export default Bookshelf;
