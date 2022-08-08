import Announcement from "./components/commons/Announcement";
import FilterIndex from "./components/filterList/FilterIndex";
import SelectedFilters from "./components/SelectedFilters";
import CollectionPanel from "./components/filterList/CollectionPanel";


const App = () => {
  return (
    <div>
        <Announcement />
        <div className="view">
            <FilterIndex />
        </div>

    </div>
  );
}

export default App;
