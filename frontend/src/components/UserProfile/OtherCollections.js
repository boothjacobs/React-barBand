import {useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {countCollections} from "../../store/collection";

const OtherCollections = ({albumId}) => {
    const dispatch = useDispatch();
    const totalCollections = useSelector((state) => state.collections)

    console.log(totalCollections)

    useEffect(() => {
        dispatch(countCollections(albumId))
    }, [dispatch, albumId]);

    return (
        <p>appears in {totalCollections ? totalCollections : 0} total collections</p>
    )
}

export default OtherCollections;
