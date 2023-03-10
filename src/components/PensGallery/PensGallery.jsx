import { readFromDatabase } from "../../services/readFromDatabase"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setPens } from "../../redux/pensSlice";
import {SavedPenMiniature, Spinner} from "../../components";

function PensGallery() {

    const dispatch = useDispatch()
    const pens = useSelector((state) => state.pens.savedPens)

    const getPens = async()=> {
        try{
            const snapshotValue = await readFromDatabase();
            dispatch(setPens(Object.values(snapshotValue)));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    } 

    useEffect(()=>{
        getPens()
    }, [])


  return (
    <>
        {Object.keys(pens).length > 0 ? 
            <div className="pens-gallery">
                {pens.map( (pen, idx) => {return(<SavedPenMiniature pen={pen} key={idx}/>)}) }
            </div>
            : 
            <div className="spinner-container">
                <Spinner/>
            </div>}
        </>
  )
}

export default PensGallery