import React from 'react'
import SectionLayout from '../../Layouts/SectionLayout'
import { DOWNLOAD_COVER_IMAGE, DOWNLOAD_PHONE_IMAGE } from '../../../constants/listAsset'
import EachUtils from '../../../utils/EachUtils'
import { LIST_CONTENT_2_EN,  LIST_CONTENT_2_ID} from '../../../constants/listContent'
import { useAtom } from 'jotai'
import { languageAtom } from '../../../jotai/atoms'

export default function SectionDownload() {
    const [Language] = useAtom(languageAtom)

    return (
        <SectionLayout>
            <div className='relative max-w-xl mx-auto' >
                <img className='relative' src={DOWNLOAD_PHONE_IMAGE} alt='Download' />
                <div className='flex items-center absolute bottom-0 left-1/2 -translate-x-1/2 bg-black border border-white rounded-xl py-2 px-4 w-[60%] gap-4' >
                    <img src={DOWNLOAD_COVER_IMAGE} alt='cover-image' className='max-h-20' />
                    <div className='flex flex-col ' >
                        <p className='font-bold' >Stranger Things</p>
                        <p className='text-blue-400' >Downloading...</p>
                    </div>
                </div>
            </div>
            <EachUtils
                of={Language === 'en' ? LIST_CONTENT_2_EN : LIST_CONTENT_2_ID}
                render={(item, index) => (
                    <div key={index} >
                        <h2 className='text-5xl font-black' >{item.title}....</h2>
                        <p className='text-2xl mt-4' >{item.desc}</p>
                    </div>
                )}
            />
            <p>Testing</p>
            <p>Ghifani</p>
            <div>
                <h1>Judul</h1>
                <p>Keterangan</p>
            </div>
        </SectionLayout>
    )
}
