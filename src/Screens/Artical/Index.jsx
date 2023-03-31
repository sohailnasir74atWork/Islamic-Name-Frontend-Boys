import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ExtractData from '../../Common/DataExtracter'
import "./Artical.scss"



const data = [
  {
      headingText: "The Power of Names and Why They are Important",
      mainText:"Why is it so important to use people’s names? According to Dale Carnegie, a person’s name is to that person the sweetest and most important sound in any language. The sound of someone using your name typically cuts through all other noise that might be going on around you. Since birth, you have been conditioned to respond to the sound of your name. Think about it this way: how would you feel if your mother referred to you by another person’s name? That is why the power of names is so important!. A person is more interested in their name than in all the other names on earth. So remember a person’s name and call it easily, and you have paid a subtle and very effective compliment. But forget it or misspell it – and you have placed yourself at a sharp disadvantage…one of the simplest, most obvious and most important ways of gaining goodwill is by remembering names and making people feel important – yet how many of us do it? How to Win Friends and Influence People, Dale Carnegie",
      en:"en",
      id:"1"
  },
  {
      headingText: "ناموں کی طاقت اور ان کی اہمیت",
      mainText:"نام ایک اہم اعزاز ہے جو ہر انسان کے لئے انوکھا ہوتا ہے۔ یہ انسان کی شناخت کے بنیادی جزو کا کردار ادا کرتا ہے جس کی بدولت اسے اس کی مقامیت، ذاتیت اور خوبیوں کے بارے میں بتایا جاتا ہے۔ نام ایک ایسا پہچان ہے جو کسی شخص کے لئے انتہائی اہمیت رکھتا ہے اور اس کی شخصیت کے بارے میں بہت کچھ کہتا ہے۔ ایک شخص کے نام کی شناخت اس کے پیشہ، مذہب، ذاتیت، خصوصیات اور ان کی خوبیوں کے بارے میں بتاتی ہے۔ یہ ایک اہم اصل ہے جو ہر کسی کے لئے اہم ہوتا ہے۔ ایک خوبصورت نام انسان کے ذہن میں ہمیشہ قائم رہتا ہے اور اس کی شخصیت پر اثراندازی کرتا ہے۔ اس کے برعکس، ایک برا نام شخص کی شناخت کے لحاظ سے ناقابل قبول ہوتا ہے اور ایسا نام انسان کی شخصیت پر منفی اثر ڈالتا ہے۔ یہ ایک اہم حقیقت ہے کہ ناموں کی طاقت ان کے اثرات میں بھی ظاہر ہوتی ہے۔ نام ایک انسان کی شخصیت کو شکل دیتا ہے۔ اس کے علاوہ، نام ایک اہم طور پر انسان کی زندگی کو بھی متاثر کرتا ہے",
      ur:"ur",
      id:"2"
  }

]

const Artical = () => {
  const {id} = useParams()
  const foundElement = data.find(element => element.id === id);
  return (
    <div className='container pt-6'>
      {<div>
        <div className={`section-title-main mb-3  ${foundElement.ur? "heading-ar-ur mr-m" : "heading-ar-en"}`}>
        <h2 className={`${foundElement.ur ? "heading-ar-ur" : ""}`}
>{foundElement.headingText}  </h2>
        </div>
        <div className={`d-flex ${foundElement.ur? "justify-content-end" : ""}`}><span className=''> 
        <Link to="/" class={`btn btn-primary mt-3 mr-m`}>BACK</Link></span></div>
        <div><p class={`${foundElement.ur? "text-ar-ur" : "text-ar-en"}`}>{foundElement.mainText}</p></div>
      </div>
      }
        </div>
  )
}

export default Artical