import RemoveIcon from '@mui/icons-material/Remove';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {useState} from "react";
import CollectionListItems from "./CollectionListItems";
import {collection} from "../../Helper";

const { collectionTitle, collectionList} = collection



const CollectionList = () => {
    const [accordionActive, setAccordionActive] = useState(false)
    const newCollectionList = []
    collectionList.map((c, i) => {
        let obj = {
            itemName: c,
            index: i,
            isChecked: false
        }
        newCollectionList.push(obj)
        return newCollectionList
    } )
    const [checkedCollectionList, setCheckedCollectionList] = useState(newCollectionList)
    const [checkedIndex, setCheckedIndex] = useState()
    let tempArray = [...checkedCollectionList]
    tempArray[2].isChecked = !checkedCollectionList[2].isChecked
    const updateCheckedBox = setCheckedCollectionLis()
    const getCheckedIndex = (index) => setCheckedIndex(index)

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
                {accordionActive && <CollectionListItems checkedCollectionList={checkedCollectionList} getCheckedIndex={getCheckedIndex}/>}
            </div>
        </>
    )
}
export default CollectionList;