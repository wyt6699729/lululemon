import RemoveIcon from '@mui/icons-material/Remove';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {useState} from "react";
import CollectionListItems from "./CollectionListItems";
import {collection} from "../../Helper";

/** 以下数据由 Helper 提供:
 *      collectionList: 数组, 其每一项为一个字符串 ['Align', 'Base Pace', ...] 没有更多的信息了.
 *      collectionTitle: 字符串, 值为 'Collection'
 */
const { collectionTitle, collectionList} = collection

const CollectionList = () => {
    const [accordionActive, setAccordionActive] = useState(false)
    
    /**
     *  newCollectionList 由 collectionList "加工而来".
     *  目的是添加新的字段用于确定唯一的 li 标签, 并确定这个 li 标签是否被 "勾选":
     *      使用 index 作为下标确定 li.
     *      使用 isChecked 规定当前的 li 是否被 "勾选".
     *  使用一个 {对象} 存储这些信息
     */
    const newCollectionList = []
    
    // 使用 map 函数遍历数组 ['Align', 'Base Pace', ...]
    collectionList.map((c, i) => {
        /**
         * [假设]这是第 1 次循环, 操作 collectionList 下标为 0 的那一项数据
         * [那么] c = 'Align', i = 0, isChecked = false
         *       新创建的对象 obj = { itemName: 'Align', index: 0, isChecked: false }
         * 
         * 将这个 obj push 进 newCollectionList 数组.
         * 第一次循环结束时 newCollectionList 数组内储存了第一个对象, 其结构是 [{ itemName: 'Align', index: 0, isChecked: false }]
         */
        let obj = {
            itemName: c,
            index: i,
            isChecked: false
        }
        newCollectionList.push(obj)
        /** 
         * newCollectionList 原本是空数组 [], map 循环结束后, newCollectionList 数组有 10 项, 每一项都是一个 {对象}. 
         * {对象}的属性/值供子组件 li 标签使用. 换句话说, newCollectionList 数组第 i 项的那个对象上的 itemName, index, isChecked 属性的值, 供生成第 i 个 li 标签使用.
         * 此时 newCollectionList 的结构为: 
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
        return newCollectionList
    } )

    /**
     * 加工后的数组拥有所有必要的数据, 可作为"数据源", 交由 state 管理.
     */
    const [checkedCollectionList, setCheckedCollectionList] = useState(newCollectionList)

    /**
     * 获取 checkedCollectionList 数组中 属性 'isChecked' 值为 false 的 {对象} 的个数.
     */
    const checkedItemsAmount = checkedCollectionList.filter(item => { return item.isChecked===true }).length
    
    /**
     * li 标签使用 index 相互间作区分, 如果用户点击子组件中的任意一个 li 标签, 将 index 的值由函数 updateCheckedBox 传入父组件.
     * [假设] 点击了第 1 行的 li 标签.
     * [那么] index = 0
     * tempArray = [...checkedCollectionList] = 
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
        !checkedCollectionList[0].isChecked = true
        tempArray[0] = { 
                            itemName: 'Align', 
                            index: 0, 
                            isChecked: false 
                        }
        tempArray[0].isChecked = !checkedCollectionList[0].isChecked = true
        tempArray = [
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
        tempArray 是更新后的数组, 在 130 行由 useState 的 setCheckedCollectionList 方法更新"数据源"
     */
    const updateCheckedBox = (index) => {
        let tempArray = [...checkedCollectionList]
        tempArray[index].isChecked = !checkedCollectionList[index].isChecked
        setCheckedCollectionList(tempArray)
    }

    return (
        <>
            <div className="filterPanel">
                <div className="filterHeader"
                     onClick={() => setAccordionActive(!accordionActive)}>
                    {/* checkedCollectionList 数组中至少有一个对象, 其属性 'isChecked' 值为 true 的时候, 打印这样的对象的个数 */}
                    <h4>{collectionTitle}{checkedItemsAmount === 0? "":` (${checkedItemsAmount})`}</h4>
                    <span className="icon">
                    {accordionActive ? <RemoveIcon /> : <AddOutlinedIcon /> }
                </span>
                </div>
                {/* 子组件不管理自己的状态, 子组件的状态由父组件提供, 父组件更新了状态之后, 子组件随之更新.*/}
                {/* 父组件将 checkedCollectionList 和方法 updateCheckedBox 传递给子组件 */}
                {accordionActive && <CollectionListItems checkedCollectionList={checkedCollectionList} updateCheckedBox={updateCheckedBox}/>}
            </div>
        </>
    )
}
export default CollectionList;