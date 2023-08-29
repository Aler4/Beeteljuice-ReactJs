import {FC} from "react";
import './style.scss';
import {Bio, ContactForm, RewardsSlider, WorkPreview} from "../../components";
export const Home: FC = () => {
    return (
        <main className='home-page'>
                    <Bio></Bio>
                    <RewardsSlider />
                    <WorkPreview/>
                    <ContactForm/>
        </main>

    )
}
{/*<div className="col_1 space">*/}
{/*
{/*    <ContactForm></ContactForm>*/}
{/*</div>*/}

{/*<div className="col_1 space-around">*/}
{/*    */}
{/*    <WorkPrewie />*/}
{/*</div>*/}