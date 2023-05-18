import {  useWindowSize, DeskHome, MobileHome } from '../components/index'

export const HomePage = () => {
   

    const size = useWindowSize();

    return (
        <>
            {size.width > 600 ?
                <DeskHome />
                :
                <MobileHome />
            }
        </>
    );
};
