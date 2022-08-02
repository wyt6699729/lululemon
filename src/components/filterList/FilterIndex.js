import CollectionPanel from "./CollectionPanel";
import FeaturePanel from "./FeaturePanel";
import FabricPanel from "./FabricPanel";
import ClimatePanel from "./ClimatePanel";

const FilterIndex = () => {
    return (
        <>
            <div>
                <CollectionPanel />
                <hr/>
                <FeaturePanel />
                <hr/>
                <ClimatePanel />
                <hr />
                <FabricPanel />
            </div>
        </>
    )
}

export default FilterIndex