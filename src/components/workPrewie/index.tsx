import {FC} from 'react';
import './style.scss'
export const WorkPreview: FC = () => {
    return (
        <section className='example__wrapper'>
            <div className="container">
                <div className="example__inner">
                    <div className="example__description">
                        <h2 className='section__title'>Example of my work</h2>
                        <p className="example__description-text calson-font">
                            So, what exactly do I do? Well, picture this: you're a regular ol' living person, stuck with some unwanted guests haunting your home.
                            That's where I come in! I'm the go-to guy for all your ghostly eviction needs.
                            You got pesky poltergeists, mischievous spirits, or just some plain old undead troublemakers?
                            No problemo! Betleejuice is on the case.
                        </p>
                    </div>

                    <div className="example-video_container">
                        <iframe className='example-video' width="100%" height="315" src="https://www.youtube.com/embed/AQXVHITd1N4"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                        </iframe>
                    </div>
                </div>

            </div>
        </section>
    )
}
