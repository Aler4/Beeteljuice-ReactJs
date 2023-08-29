import {FC} from 'react';
import './style.scss';
import {Performance} from "../performance";
import {Fans} from "../fans";

export const CultureSection: FC = () => {
    return (
        <section className="culture">
            <div className="container">
                    <h2 className='section__title'>I'm in world culture</h2>
                <Performance />
                <Fans />
            </div>
        </section>
    )
}