import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { useTranslation } from 'next-i18next'

import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'

export default function EnquiryForm() {
  const { t } = useTranslation('common')
  
  const FormSchema = z.object({
    name: z.string().min(2, {
      message: t('contact.form.validation.username_min'),
    }),
    email: z.string().email({message: t('contact.form.validation.email_invalid')}),
    phone: z
      .string()
      .min(10, {message: t('contact.form.validation.phone_min')}),
    SkyLoid: z.number().min(1, {message: t('contact.form.validation.skylo_id_positive')}),
    inquiry: z
      .string()
      .min(10, {message: t('contact.form.validation.inquiry_min')}),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      SkyLoid: undefined,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {

  }

  return (
    <div
      id='contact-us-form'
      className="bg-[url('/images/contact-us/image2.jpeg')] bg-cover bg-center bg-no-repeat overflow-hidden my-20"
    >
      <div className='flex flex-col md:flex-row justify-center items-start p-6 md:p-12 gap-10 md:gap-20 bg-black w-9/12 mx-auto my-16 md:my-32'>
        <div className='md:w-6/12 flex flex-row md:flex-col justify-center items-start p-0 gap-6'>
          <img
            src='/images/contact-us/customer-service.png'
            alt='copy-front'
            className='w-10 md:w-28 order-2 md:order-1'
          />
          <div className='order-1 md:order-2'>
            <h1 className='font-semibold text-xl leading-8 md:text-4xl md:leading-12 text-white mb-2'>
              {t('contact.form.contact_us_title')}
            </h1>
            <p className='font-normal text-base leading-6 md:text-lg md:leading-7 text-white'>
              {t('contact.form.contact_us_subtitle')}
            </p>
          </div>
        </div>

        <div className='w-full md:w-6/12'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=''>
              <div className='grid grid-cols-1 md:grid-cols-2 p-0 gap-6'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>{t('contact.form.name_label')}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t('contact.form.name_placeholder')}
                          {...field}
                          className='bg-[#18191A] border-[#18191A]'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='email'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>{t('contact.form.email_label')}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t('contact.form.email_placeholder')}
                          {...field}
                          className='bg-[#18191A] border-[#18191A]'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='phone'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>{t('contact.form.phone_label')}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t('contact.form.phone_placeholder')}
                          {...field}
                          className='bg-[#18191A] border-[#18191A]'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='SkyLoid'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>{t('contact.form.skylo_id_label')}</FormLabel>
                      <FormControl>
                        <Input
                          type='number'
                          placeholder={t('contact.form.skylo_id_placeholder')}
                          {...field}
                          className='bg-[#18191A] border-[#18191A]'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className='col-span-1 md:col-span-2'>
                  <FormField
                    control={form.control}
                    name='inquiry'
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.inquiry_label')}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t('contact.form.inquiry_placeholder')}
                            {...field}
                            className='bg-[#18191A] border-[#18191A]'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='col-span-1 md:col-span-2'>
                  <Button
                    type='submit'
                    className='flex justify-center items-center px-3 py-2 pr-8 gap-3 w-[140px] h-[55px] bg-gradient-to-b from-[#9413F1] to-[#560B8B] 
  shadow-[inset_-4px_0px_4px_rgba(213,200,221,0.25),inset_4px_0px_4px_rgba(214,200,221,0.25),inset_0px_4px_4px_rgba(214,200,221,0.25)] 
  rounded-full mx-auto pl-12'
                  >
                    {t('contact.form.submit')}
                    <img
                      src='/svgs/submit-round-top.svg'
                      alt='submit-round-top'
                      className='w-7 h-7'
                    />
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
