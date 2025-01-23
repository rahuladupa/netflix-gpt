import { useSelector } from "react-redux";
import { language } from "../utils/languageConstants";

const GptSearchBar = () => {
    const selectLang = useSelector((store) => store.config.language)
    console.log(selectLang)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" bg-black  w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[selectLang].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3">
          {" "}
          {language[selectLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
