import ContentForm from "../contentForm/ContentForm";
import Results from "../results/Results";
import Footer from "../footer/Footer";
export default function Home() {
  return (
    <>
      <div style={{ margin: "0 10rem" }}>
        <ContentForm />
        <Results />
      </div>
      <Footer />
    </>
  );
}
