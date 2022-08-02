import {CheckedIcon} from "./Icons";
import {useState} from "react";

const FilterRow = ({ list }) => {
    const [checked, setChecked] = useState(list.isChecked)
    return (
        <>
            <div
                className="item"
                onClick={()=>setChecked(!checked)}
            >
                <CheckedIcon isChecked={checked} />
                <span>
                    {list.itemName}
                </span>
            </div>
        </>
    )
}
export default FilterRow