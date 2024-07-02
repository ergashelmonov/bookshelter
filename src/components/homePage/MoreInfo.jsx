import PropTypes from "prop-types";
import Cross from "../../assets/svg/cross.svg";

const MoreInfo = ({ bookData, state }) => {
  return (
    <div
      className="fixed bottom-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] w-full h-full overflow-auto"
      onClick={(e) => {
        e.target.className.startsWith("fixed")
          ? (document.body.classList.remove("overflow-hidden"), state(false))
          : "";
      }}
    >
      <div className="max-w-[552px] w-full min-h-screen bg-white  absolute right-0">
        <div className="bg-[#F8FAFD] sticky top-0 px-[33px] py-[22px] flex items-center justify-between">
          <span className="font-medium text-2xl text-[#222531]">
            {bookData.volumeInfo.title}
          </span>
          <Cross
            className="cursor-pointer"
            onClick={() => {
              document.body.classList.remove("overflow-hidden"), state(false);
            }}
          />
        </div>
        <div>
          <div className="w-full p-[44px_0_51px] flex justify-center">
            <img
              className="w-[228px] h-[299px] rounded-[5px]"
              src={bookData.volumeInfo.imageLinks.thumbnail}
              alt="book img"
            />
          </div>
          <p className="font-normal text-[13px] leading-[170%] text-[#58667e] p-[0_34px_0_47px] mb-7">
            {bookData.volumeInfo.description}
          </p>
          <div className="flex flex-col gap-[17px] mb-12">
            <div className="flex flex-wrap gap-2 p-[0_34px_0_47px]">
              <p className="font-normal text-sm text-[#222531] mr-1">
                Author :{" "}
              </p>
              {bookData.volumeInfo.authors.map((v, i) => {
                return (
                  <p
                    key={i}
                    className="font-normal text-sm text-[#0d75ff] p-[5px_25px] bg-[rgba(13,117,255,0.09)] rounded-[30px]"
                  >
                    {v}
                  </p>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-2 p-[0_34px_0_47px]">
              <p className="font-normal text-sm text-[#222531] mr-1">
                Published :
              </p>

              <p className="font-normal text-sm text-[#0d75ff] p-[5px_25px] bg-[rgba(13,117,255,0.09)] rounded-[30px]">
                {bookData.volumeInfo.publishedDate.slice(0, 4)}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 p-[0_34px_0_47px]">
              <p className="font-normal text-sm text-[#222531] mr-1">
                Publishers:
              </p>

              {bookData.volumeInfo.categories.map((v, i) => {
                return (
                  <p
                    key={i}
                    className="font-normal text-sm text-[#0d75ff] p-[5px_25px] bg-[rgba(13,117,255,0.09)] rounded-[30px]"
                  >
                    {v}
                  </p>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-2 p-[0_34px_0_47px]">
              <p className="font-normal text-sm text-[#222531] mr-1">
                Categories:
              </p>

              <p className="font-normal text-sm text-[#0d75ff] p-[5px_25px] bg-[rgba(13,117,255,0.09)] rounded-[30px]">
                {bookData.volumeInfo.categories}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 p-[0_34px_0_47px]">
              <p className="font-normal text-sm text-[#222531] mr-1">
                Pages Count:
              </p>

              <p className="font-normal text-sm text-[#0d75ff] p-[5px_25px] bg-[rgba(13,117,255,0.09)] rounded-[30px]">
                {bookData.volumeInfo.pageCount}
              </p>
            </div>
          </div>
        </div>
        <button className="capitalize w-[112px] h-[35px] bg-[#75828a] rounded font-medium text-sm text-white absolute right-5 bottom-4">
          <a href={bookData.volumeInfo.canonicalVolumeLink}>read</a>{" "}
        </button>
      </div>
    </div>
  );
};
MoreInfo.propTypes = {
  bookData: PropTypes.object,
  state: PropTypes.func,
};
export default MoreInfo;
