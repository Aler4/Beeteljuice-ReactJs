import {FC, useState} from 'react';
import './style.scss';
import avatar from '../../assets/images/avatar.jpg'
import avatarScary from '../../assets/images/avatar_scary.jpg'

export const Bio: FC = () => {
    let [photo, setPhoto] = useState(avatar);

    const changePhoto = () => {
        setPhoto(avatarScary);
        setTimeout(() => setPhoto(avatar), 3000)
    }


    return (
        <section className='bio-wrapper calson-font'>
            <div className="container">
                <div className="bio__inner">
                    <div className='bio-photo_wrapp'>
                        <img onClick={changePhoto} onTouchStart={changePhoto} onMouseOut={() => setPhoto(avatar)} src={photo} alt="avatar"/>
                    </div>
                    <div  className="bio-desc_wrapper ">
                        <h2 className='bio-desc-header'>Beetlejuice</h2>
                        <p className='bio-desc'>
                            Hey there, folks! Beetlejuice here, and let me tell you,
                            I'm one of a kind. You won't find anyone else like me walking around this mortal coil.
                            Now, I know some people think I'm a troublemaker, but I just like to have a little fun,
                            you know? Life's too short to take everything so seriously. Plus, when you've been dead as long as I have,
                            you tend to develop a bit of a mischievous streak.
                            But it's not all fun and games with me. I've got some serious skills when it comes to the supernatural.
                            I can talk to ghosts, I can summon the undead,
                            and I can even put a hex on you if you're not careful.
                            So if you ever find yourself in need of a paranormal consultant,
                            you know who to call. Just say my name three times and I'll be there in a flash.
                            And don't worry, I won't bite...unless you want me to, of course. Heh heh heh.
                        </p>
                        <a className='desc__link' href="https://beetlejuice.fandom.com/wiki/Betelgeuse" target='_blank'>Read more</a>
                    </div>
                </div>

            </div>

        </section>
    )
}
