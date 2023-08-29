import {FC} from 'react';
import {ContactForm, CultureSection, Mission} from "../../components";

export const About: FC = () => {
    return (
        <main className='about'>
            <Mission/>
            <CultureSection/>
            <ContactForm/>
        </main>
    )
}
