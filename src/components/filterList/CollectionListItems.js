import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import "./filterList.scss"
import {useState} from "react";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const CollectionListItems = ({ collectionList }) => {
    const [isChecked, setIsChecked] = useState(false)
    const [viewMore, setViewMore] = useState(false)

    return (
        <>
            {/*<ul style={{listStyle:"none"}}>*/}
            {/*    {*/}
            {/*        collectionList.map((collection, index) =>*/}
            {/*            <li className="itemList"*/}
            {/*                key={index}*/}
            {/*                onClick={() => setIsChecked(!isChecked)}*/}
            {/*            >*/}
            {/*                {isChecked ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankOutlinedIcon />}*/}
            {/*                <span>{collection}</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    }*/}
            {/*</ul>*/}

            <ul style={{listStyle:"none"}}>
                {
                    viewMore ?
                        collectionList.slice(0,5).map((collection, index) =>
                        <li className="itemList"
                            key={index}
                            onClick={() => setIsChecked(!isChecked)}
                        >
                            {isChecked ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankOutlinedIcon />}
                            <span>{collection}</span>
                        </li>
                    )
                        :
                        collectionList.map((collection, index) =>
                            <li className="itemList"
                                key={index}
                                onClick={() => setIsChecked(!isChecked)}
                            >
                                {isChecked ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankOutlinedIcon />}
                                <span>{collection}</span>
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