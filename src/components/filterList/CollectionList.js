import RemoveIcon from '@mui/icons-material/Remove';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {useState} from "react";
import CollectionListItems from "./CollectionListItems";
import {collection} from "../../Helper";

const { collectionTitle, collectionList} = collection

const CollectionList = () => {
    const [accordionActive, setAccordionActive] = useState(false)
    return (
        <>
            <div className="filterPanel">
                <div className="filterHeader"
                     onClick={() => setAccordionActive(!accordionActive)}>
                    <h4>{collectionTitle}</h4>
                    <span className="icon">
                    {accordionActive ? <RemoveIcon /> : <AddOutlinedIcon /> }
                </span>
                </div>
                {accordionActive && <CollectionListItems collectionList={collectionList} />}
            </div>
        </>
    )
}
export default CollectionList;