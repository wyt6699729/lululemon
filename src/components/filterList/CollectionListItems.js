import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import "./filterList.scss"
import {useRef, useState} from "react";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const CollectionListItems = ({ checkedCollectionList, getCheckedIndex }) => {
    const [viewMore, setViewMore] = useState(false)
    const myRefs = useRef([])

    return (
        <>
            <ul style={{listStyle:"none"}}>
                {
                    viewMore ?
                        checkedCollectionList.slice(0,5).map((item) =>
                        <li className="itemList"
                            key={item.index}
                            value={item.index}
                            ref={c=>myRefs.current[item.index]=c}
                            onClick={() => getCheckedIndex(myRefs.current[item.index].value)}
                        >
                            {item.isChecked ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankOutlinedIcon />}
                            <span>{item.itemName}</span>
                        </li>
                    )
                        :
                        checkedCollectionList.map((item) =>
                            <li className="itemList"
                                key={item.index}
                                value={item.index}
                                ref={c=>myRefs.current[item.index]=c}
                                onClick={() => getCheckedIndex(myRefs.current[item.index].value)}
                            >
                                {item.isChecked ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankOutlinedIcon />}
                                <span>{item.itemName}</span>
                            </li>
                        )
                }
            </ul>

            {viewMore ?
                <div className="viewMoreMenu" onClick={()=>setViewMore(!viewMore)}> <span>View More</span> <AddOutlinedIcon /></div>
                :
                <div className="viewMoreMenu" onClick={()=>setViewMore(!viewMore)}><span>View Less</span> <RemoveIcon /></div>}
        </>
    )
}
export default CollectionListItems