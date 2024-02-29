import { useEffect, useState } from "react";

import SwiperCards from "./SwiperCards";
import FetchDataError from '../errors/FetchDataError';

type UseFetchDataProps = {
    url: string;
}

const UseFetchData: React.FC<UseFetchDataProps> = (props) => {
    const [data, setData] = useState<[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(props.url);
                if (!res.ok) throw new FetchDataError('The query failed');
                const json = await res.json();
                setData(json);
            } catch (error) {
                if (error instanceof FetchDataError) console.log(`${error}`);
            }
        }
        fetchData();
    }, [])

    return (
        <SwiperCards carouselImages={data}/>
    )
}

export default UseFetchData;