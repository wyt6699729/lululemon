import RemoveIcon from "@mui/icons-material/Remove";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import "./filterList.scss"

export const AccordionIcon = ({ accordionActive }) => {
    return (
        <>
            <div className="icon">
                {accordionActive ? <RemoveIcon/> : <AddOutlinedIcon/>}
            </div>
        </>
    )
}

export const ViewMoreIcon = ({ viewMore, changeViewMore }) => {
    return (
        <>
            {viewMore ?
                <div className="viewMoreMenu" onClick={()=>changeViewMore()}> <span>View Less</span> <RemoveIcon /></div>
                :
                <div className="viewMoreMenu" onClick={()=>changeViewMore()}><span>View More</span> <AddOutlinedIcon /></div>}
        </>
    )
}

export const CheckedIcon = ({ isChecked }) => {
    return(
        <>
            <div className="icon">
                {isChecked
                    ?
                <CheckBoxOutlinedIcon />
                :
                <CheckBoxOutlineBlankOutlinedIcon />}
            </div>
        </>
)
}
// export default AccordionIcon; CheckedIcon
// // {
// //     CheckedIcon,
// //     AccordionIcon,
// // }

export default AccordionIcon
// export default ViewMoreIcon