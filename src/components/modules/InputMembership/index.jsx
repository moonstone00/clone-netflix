import React from 'react'
import EachUtils from '../../../utils/EachUtils'
import { useAtom } from 'jotai'
import { languageAtom } from '../../../jotai/atoms'
import { LIST_CTA_EN, LIST_CTA_ID } from "../../../constants/listCta"
import DefaultButton from '../DefaultButton'

export default function InputMembership() {
    const [Language] = useAtom(languageAtom)

    return (
        <form>
            <EachUtils
                of={ Language == "en" ? LIST_CTA_EN : LIST_CTA_ID }
                render={(item, index) => (
                    <div key={index} >
                        <h3 className='text-white' >{item.title}</h3>
                        <div className='relative flex justify-center items-center gap-2 py-4' >
                            <input 
                                placeholder={item.labelInput} 
                                className='w-full p-4 text-slate-400 bg-black/50 rounded-md border border-white/50 peer placeholder-transparent'
                            />
                            <label className='absolute top-0 left-0 pl-4
                            text-slate-400 peer-placeholder-shown:top-8 peer-focus:top-[16px] transition-all' >
                                {item.labelInput}
                            </label>
                            <DefaultButton
                                text={item.buttonSubmit}
                                isIcon={true}
                                onClick={() => console.log('Register!')}
                                styles={"flex py-4 w-1/2 flex justify-center items-center text-xl"}
                                />
                        </div>
                    </div>
                )}
            />
        </form>
    )
}
