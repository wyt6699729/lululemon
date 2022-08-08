import {collectionList} from "../../Helper";
import "./filterList.scss"
import FilterRow from "./FilterRow";
import AccordionIcon, {ViewMoreIcon} from "./Icons";
import {useState} from "react";
import {useDispatch} from "react-redux";

const CollectionPanel = () => {
    const {title, list} = collectionList
    const [accordionActive, setAccordionActive] = useState(true)
    const [viewMore, setViewMore] = useState(false)
    const changeViewMore = () => setViewMore(!viewMore)
    const shortList = list.slice(0, 5)

    return (
        <>
            <div className="filterPanel">

                {/* part 1 Header*/}
                <div
                    className="filterHeader"
                    onClick={()=>{setAccordionActive(!accordionActive)}}
                >
                    <h4>{title}</h4>
                    <AccordionIcon accordionActive={accordionActive} />
                </div>

                {/* part2 accordion menu*/}
                {(accordionActive
                    &&
                    !viewMore
                    &&
                    <div className="itemList">
                        {
                            shortList.map(l => <FilterRow key={l.id} list={l} viewMore={viewMore} />)
                        }
                        {/* part 3 view more button*/}
                    <ViewMoreIcon viewMore={viewMore} changeViewMore={changeViewMore} />
                    </div>)
                    ||
                    (accordionActive
                        &&
                        viewMore
                        &&
                        <div className="itemList">
                            {
                                list.map(l => <FilterRow key={l.id} list={l} viewMore={viewMore} />)
                            }
                            <ViewMoreIcon viewMore={viewMore} changeViewMore={changeViewMore} />
                        </div>)

                }
            </div>
        </>
    )
}

export default CollectionPanel