import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import "./filterList.scss"
import { useState } from "react";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

/**
 * checkedCollectionList 由父组件通过 props 传递而来, 其结构为:
                                                            [
                                                                { 
                                                                    itemName: 'Align', 
                                                                    index: 0, 
                                                                    isChecked: false 
                                                                },
                                                                {
                                                                    itemName: 'Base Pace',
                                                                    index: 1, 
                                                                    isChecked: false 
                                                                },
                                                                {
                                                                    itemName: 'Cool Racerback',
                                                                    index: 2, 
                                                                    isChecked: false 
                                                                },
                                                                ...
                                                            ]
 */
const CollectionListItems = ({ checkedCollectionList, updateCheckedBox }) => {
    const [viewMore, setViewMore] = useState(false)

    return (
        <>
            <ul style={{listStyle:"none"}}>
                {
                    viewMore ?
                        checkedCollectionList.slice(0,5).map((item) =>
                        /**
                         * [假设] 现在是 map 的第一次循环
                         * [那么] item 是 checkedCollectionList 的第 1 项, 它是一个 {对象} :
                                                                                        { 
                                                                                            itemName: 'Align', 
                                                                                            index: 0, 
                                                                                            isChecked: false 
                                                                                        }
                            这个对象上 itemName, index, isChecked 属性的值, 用于产生第 1 个 li 标签:
                            item.index = 0, 于是 key={item.index} => key=0
                                                onClick={() => updateCheckedBox(0)}
                                                点击事件触发操作, 将值 0 传递给父组件, 并提醒父组件该更新数据了. 父组件从代码 127 行开始响应子组件的提醒
                                                父组件此时的数据(更新前): 
                                                                [
                                                                    { 
                                                                        itemName: 'Align', 
                                                                        index: 0, 
                                                                        isChecked: false 
                                                                    },
                                                                    {
                                                                        itemName: 'Base Pace',
                                                                        index: 1, 
                                                                        isChecked: false 
                                                                    },
                                                                    {
                                                                        itemName: 'Cool Racerback',
                                                                        index: 2, 
                                                                        isChecked: false 
                                                                    },
                                                                    ...
                                                                ]
                                                父组件拿到子组件传递的值 0, 找到这个数组的第 0 项, 发现了一个 {对象}: 
                                                                                                            { 
                                                                                                                itemName: 'Align', 
                                                                                                                index: 0, 
                                                                                                                isChecked: false 
                                                                                                            }
                                                父组件更新这个对象 'isChecked' 的值, 改变为 true, 那么现在这个 {对象}:
                                                                                                            { 
                                                                                                                itemName: 'Align', 
                                                                                                                index: 0, 
                                                                                                                isChecked: true 
                                                                                                            }
                                                总的来看, 整个数组仅更新了第 0 项的 {对象}, 那么父组件更新后的数据:
                                                                                                            [
                                                                                                                { 
                                                                                                                    itemName: 'Align', 
                                                                                                                    index: 0, 
                                                                                                                    isChecked: true 
                                                                                                                },
                                                                                                                {
                                                                                                                    itemName: 'Base Pace',
                                                                                                                    index: 1, 
                                                                                                                    isChecked: false 
                                                                                                                },
                                                                                                                {
                                                                                                                    itemName: 'Cool Racerback',
                                                                                                                    index: 2, 
                                                                                                                    isChecked: false 
                                                                                                                },
                                                                                                                ...
                                                                                                            ]
                                                父组件的 state 更新完成后, 子组件自动更新, 这个时候能看到第一个 li 标签被勾选了.
                         */
                        <li className="itemList"
                            key={item.index}
                            onClick={() => updateCheckedBox(item.index)}
                        >
                            {item.isChecked ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankOutlinedIcon />}
                            <span>{item.itemName}</span>
                        </li>
                    )
                        :
                        checkedCollectionList.map((item) =>
                            <li className="itemList"
                                key={item.index}
                                onClick={() => updateCheckedBox(item.index)}
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