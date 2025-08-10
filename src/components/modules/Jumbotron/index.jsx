import React from 'react'
import { JUMBOTRON_IMAGE } from "../../../constants/listAsset"
import EachUtils from '../../../utils/EachUtils'
import { useAtom } from 'jotai'
import { languageAtom } from '../../../jotai/atoms'
import {LIST_JUMBOTRON_EN, LIST_JUMBOTRON_ID} from "../../../constants/listJumbotron"
import InputMembership from '../InputMembership'

export default function Jumbotron() {
    const [Language] = useAtom(languageAtom)

    return (
        <div>
            <img
                className='absolute top-0 left-0 object-cover h-[700px] w-full opacity-60'
                src={JUMBOTRON_IMAGE} alt='Jumbotron' />
            <EachUtils
                of={Language === "en" ? LIST_JUMBOTRON_EN : LIST_JUMBOTRON_ID}
                render={(item, index) => (
                    <div key={index} className='relative flex flex-col justify-center items-center mt-44 gap-4 text-center' >
                        <h1 className='font-black text-white text-5xl ' >{item.title}</h1>
                        <p className='text-xl text-white' >{item.desc}</p>
                        <InputMembership/>
                    </div>
                )}
            />
        </div>
    )
}
