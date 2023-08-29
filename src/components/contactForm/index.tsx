import {FC} from 'react';
import './style.scss';

export const ContactForm: FC = () => {
    return (

        <section className="contact__wrapper">
            <div className="container">
                <div className="contact__inner">
                    <div className="form-tomb calsonItalic-font">
                        <div className="decor left crack">
                            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 0 10 C 0 20, 10 20, 50 4" stroke="black" fill="black"/>
                                <path d="M 100 20 C 10 10, 10 20, 50 4" stroke="black" fill="black"/>
                                <path d="M 200 -20 C 10 10, 10 20, 50 4" stroke="black" fill="black"/>
                            </svg>
                        </div>
                        <div className="decor top crack">
                            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 50 10 C 0 20, 10 20, 38 4" stroke="black" fill="black"/>
                            </svg>
                        </div>
                        <form>

                            <label htmlFor="name">Name</label>

                            <div className="name">
                                <input type="text" id='name' placeholder='name'/>
                                <input type="text" placeholder='last name'/>
                            </div>

                            <label htmlFor="age">Age</label>

                            <div className='age'>
                                <input type="number" id='age' placeholder='year'/>
                                <input type="number" placeholder='months'/>
                                <input type="number" placeholder='day'/>
                            </div>


                            <label htmlFor="profit">How many wives do you offer?</label>
                            <input type="number" placeholder='count'/>

                            <input className='form_submit' type="submit" value='Send'/>


                        </form>
                    </div>

                    <div className="advantages calson-font">
                        <p className="advantages__text">
                            So what are the advantages of my services?
                        </p>
                        <ol className="advantages__list calsonItalic-font">
                            <li className="advantages__item">Speed</li>
                            <li className="advantages__item">Qualitative result</li>
                            <li className="advantages__item">It's really fun</li>
                        </ol>
                        <p className="advantages__text">
                            Let's leave your details and we'll have some fun!
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}
