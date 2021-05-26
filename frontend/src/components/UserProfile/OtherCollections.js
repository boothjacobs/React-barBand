import {useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {countCollections} from "../../store/collectionCount";

const OtherCollections = ({albumId}) => {
    const dispatch = useDispatch();
    const totalCollections = useSelector((state) => state.count)

    useEffect(() => {
        dispatch(countCollections(albumId))
    }, [dispatch, albumId]);

    return (
        <div>
            <p>appears in {totalCollections[albumId] ? totalCollections[albumId] : 0} total collections</p>
        </div>
    )
}

export default OtherCollections;
