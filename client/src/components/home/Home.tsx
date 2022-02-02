import ContentForm from "../contentForm/ContentForm";
import Results from "../results/Results";
import Footer from "../footer/Footer";
import "./home.css";
import { useSelector } from "react-redux";
import { showSearch } from "../../store/showSearchSlice";
export default function Home() {
  const showHideSearch = useSelector(showSearch);
  console.log(showHideSearch);
  return (
    <>
      <div style={{ margin: "0 10rem" }}>
        {showHideSearch.show && <ContentForm />}
        <Results />
      </div>
      <Footer />
    </>
  );
}
