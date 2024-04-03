import ModuleList from "../modules/List";
import Sidebar from "./sidebar";

function Home() {
  return (
    <div className="d-flex flex-row">
      <ModuleList />
      <Sidebar />
    </div>
  );
}
export default Home;