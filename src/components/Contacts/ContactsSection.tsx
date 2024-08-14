// import { useFormik } from 'formik';
// import * as Yup from 'yup';// Adjust imports based on your setup

// const validationSchema = Yup.object({
//   name: Yup.string().required('Имя обязательно'),
//   email: Yup.string().email('Неверный формат электронной почты').required('Электронная почта обязательна'),
//   phone: Yup.string().required('Телефон обязателен'),
//   message: Yup.string().required('Сообщение обязательно'),
// });

// const ContactsSection = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       phone: '',
//       message: '',
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });

//   return (
//     <section className="bg-[#242B33] py-12 md:py-20">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//           <div className="space-y-4">
//             <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: '#D4C17F' }}>Свяжитесь с Нами</h2>
//             <p className="text-white">
//               У вас есть вопросы или нужна помощь? Заполните форму ниже, и наша команда свяжется с вами.
//             </p>
//             <form onSubmit={formik.handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                 <div className="space-y-1.5">
//                   <Label htmlFor="name">Имя</Label>
//                   <Input
//                     id="name"
//                     name="name"
//                     placeholder="Иван Иванов"
//                     value={formik.values.name}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     className={`input ${formik.touched.name && formik.errors.name ? 'input-error' : ''}`}
//                   />
//                   {formik.touched.name && formik.errors.name ? (
//                     <div className="text-red-500 text-sm">{formik.errors.name}</div>
//                   ) : null}
//                 </div>
//                 <div className="space-y-1.5">
//                   <Label htmlFor="email">Электронная почта</Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="ivan@example.com"
//                     value={formik.values.email}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     className={`input ${formik.touched.email && formik.errors.email ? 'input-error' : ''}`}
//                   />
//                   {formik.touched.email && formik.errors.email ? (
//                     <div className="text-red-500 text-sm">{formik.errors.email}</div>
//                   ) : null}
//                 </div>
//               </div>
//               <div className="space-y-1.5">
//                 <Label htmlFor="phone">Телефон</Label>
//                 <Input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   placeholder="(123) 456-7890"
//                   value={formik.values.phone}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   className={`input ${formik.touched.phone && formik.errors.phone ? 'input-error' : ''}`}
//                 />
//                 {formik.touched.phone && formik.errors.phone ? (
//                   <div className="text-red-500 text-sm">{formik.errors.phone}</div>
//                 ) : null}
//               </div>
//               <div className="space-y-1.5">
//                 <Label htmlFor="message">Сообщение</Label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   placeholder="Чем мы можем вам помочь?"
//                   value={formik.values.message}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   className={`textarea ${formik.touched.message && formik.errors.message ? 'textarea-error' : ''}`}
//                 />
//                 {formik.touched.message && formik.errors.message ? (
//                   <div className="text-red-500 text-sm">{formik.errors.message}</div>
//                 ) : null}
//               </div>
//               <Button type="submit" className="w-full">
//                 Отправить
//               </Button>
//             </form>
//           </div>
//           <div className="space-y-4">
//             <div className="space-y-2">
//               <h3 className="text-2xl font-bold" style={{ color: '#D4C17F' }}>Жилой Комплекс</h3>
//               <p className="text-white">Наб. реки Фонтанки, 10-15</p>
//             </div>
//             <div className="space-y-2">
//               <h3 className="text-2xl font-bold" style={{ color: '#D4C17F' }}>Контактная Информация</h3>
//               <div className="space-y-1">
//                 <p>Телефон: +7 (123) 456-78-90</p>
//                 <p>Email: info@residentialcomplex.com</p>
//               </div>
//             </div>
//             <div className="space-y-2">
//               <h3 className="text-2xl font-bold" style={{ color: '#D4C17F' }}>Часы Работы</h3>
//               <div className="space-y-1">
//                 <p>Понедельник - Пятница: 9:00 - 17:00</p>
//                 <p>Суббота - Воскресенье: Закрыто</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactsSection;

const ContactsSection = () => {
  return (
    <div>ContactsSection</div>
  )
}

export default ContactsSection