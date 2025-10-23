import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import parse from 'html-react-parser'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export default function FAQ() {
  const { t } = useTranslation('common')
  
  return (
    <section
      id='faq'
      className='container flex flex-col pt-[120px] md:flex-row'
    >
      <div className='mb-12 flex w-full flex-col-reverse items-center text-center md:w-1/2 md:flex-col md:items-start md:text-start'>
        <Image
          src='/images/faq-icon.png'
          alt='faq image'
          width={100}
          height={100}
          className='mt-5'
        />
        <h2 className='cursor-pointer text-[20px] md:w-1/2 md:text-[32px]'>
          {t('faq.title')}
        </h2>
      </div>

      <div className='jodit-wysiwyg w-full  md:w-1/2'>
        <Accordion
          type='single'
          collapsible
          className='w-full'
          defaultValue='0'
        >
          {[1, 11, 1, 1].map((item: any, key: number) => (
            <AccordionItem key={key} value={key.toString()}>
              <AccordionTrigger className='my-4'>
                {t('faq.why_download')}
              </AccordionTrigger>
              <AccordionContent className='text-[#B0B3B5]'>
                {parse(t('faq.why_download_answer'))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
