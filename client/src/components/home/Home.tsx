import ContentForm from "../contentForm/ContentForm";
import Results from "../results/Results";
import "./home.css";
import { useSelector } from "react-redux";
import { showSearch } from "../../store/showSearchSlice";
export default function Home() {
  const showHideSearch = useSelector(showSearch);
  console.log(showHideSearch);
  return (
    <div>
      <div style={{ margin: "1rem 10rem" }}>
        {showHideSearch.show && <ContentForm />}
        <Results />
      </div>
    </div>
  );
}
