import React from 'react'
import "../Home/Style/PoweredbyCommunity.scss"
import CommunityCard from './Cards/CommunityCard'


const data = [
    {
        headingText: "The Power of Names and Why They are Important",
        mainText:"Why is it so important to use people’s names? According to Dale Carnegie, a person’s name is to that person the sweetest and most important sound in any language. The sound of someone using your name typically cuts through all other noise that might be going on around you. Since birth, you have been conditioned to respond to the sound of your name. Think about it this way: how would you feel if your mother referred to you by another person’s name? That is why the power of names is so important!. A person is more interested in their name than in all the other names on earth. So remember a person’s name and call it easily, and you have paid a subtle and very effective compliment. But forget it or misspell it – and you have placed yourself at a sharp disadvantage…one of the simplest, most obvious and most important ways of gaining goodwill is by remembering names and making people feel important – yet how many of us do it? How to Win Friends and Influence People, Dale Carnegie",
        en:"en",
        id:"1"
    },
    {
        headingText: "ناموں کی طاقت اور ان کی اہمیت",
        mainText:"نام ہر شخص کی پہچان ہوتا ہے، اور یہ ایک شخص کی شناخت میں بہت اہم کردار ادا کرتا ہے۔ ایک شخص کے نام کی شناخت اس کی ذاتیت، خصوصیات اور ان کی خوبیوں کے بارے میں بتاتی ہے۔نام ایک شخص کی ذاتیت کے ساتھ جڑا ہوتا ہے اور اسے اس کے پورے زندگی کے دوران ہمیشہ یاد رکھا جاتا ہے۔ ایک چھوٹے سے بچے کا نام اس کے ذہن میں اس کے ما بعد بھی قائم رہتا ہے، اور یہ اس کے لئے بہت اہم ہوتا ہے کہ اسے ایک خوبصورت اور یادگار نام دیا جائے۔ناموں کی طاقت ان کے اثرات میں بھی ظاہر ہوتی ہے۔ کئی لوگوں کے نام ان کی زندگیوں پر اثر انداز ہوتے ہیں۔ کچھ نام بہت خوبصورت ہوتے ہیں اور ان کی طاقت بھی اسی طرح خوبصورت ہوتی ہے۔ اسی طرح کچھ نام اتنے برے ہوتے ہیں کہ وہ انسان کے ذہن میں منفی خصوصیات کو ظاہر کرتے ہیں۔نام ایک اہم طور پر ایک انسان کی شخصیت کی بنیاد ہوتا ہے۔ اگر کسی کے نام کی اہمیت اسے نہیں پتی تو وہ اپنی شناخت کے لحاظ سے ب",
        ur:"ur",
        id:"2"
    }

]

const PoweredbyCommunity = () => {
    return (
        <div className="pt-6" id="bars-stop">
        <div className='container' data-aos="fade-up">
            <div className='row d-flex '>
                <div>
                <div className='section-title-main'>
                    <h2 >IMPORTANCE OF MEANINGFUL NAME</h2>
                    <h3 > بامعنی ناموں کی اہمیت</h3>
                </div></div>
                <div className='row m-auto d-flex justify-content-between'>
                       {data.map(item=>{return (<CommunityCard prop={item}/>)})}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PoweredbyCommunity