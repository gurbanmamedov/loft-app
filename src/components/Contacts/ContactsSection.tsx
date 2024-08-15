import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CheckIcon, LocateIcon, MailIcon, PhoneIcon } from "lucide-react";
import { AnimatedSubscribeButton } from "../magicui/animated-subscribe-button";

export default function ContactForm() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Введите ваше имя"),
    email: Yup.string().email("Неправильный email").required("Введите ваш email"),
    message: Yup.string().required("Введите ваше сообщение"),
  });

  return (
    <section className="bg-siteBackground py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-6">
            <h2 className="sectionTitle ">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-white">
              Есть вопрос или хотите записаться на экскурсию? Заполните форму
              ниже, и мы свяжемся с вами как можно скорее.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <LocateIcon className="h-6 w-6 text-golden" />
                <p className="text-white">Наб. реки Фонтанки 10-15</p>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-6 w-6 text-golden" />
                <p className="text-white">8 (812) 123-45-67</p>
              </div>
              <div className="flex items-center space-x-3">
                <MailIcon className="h-6 w-6 text-golden" />
                <p className="text-white">info@example.ru</p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-footer rounded-lg shadow-lg">
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-semibold text-golden mb-4">Связаться с нами</h3>
              <p className="text-white">
                Заполните форму ниже, и мы свяжемся с вами как можно скорее.
              </p>
            </div>
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm();
              }}
            >
              {({ isSubmitting, dirty }) => (
                <Form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-golden"
                      >
                        Имя
                      </label>
                      <Field
                        id="name"
                        name="name"
                        placeholder="Введите ваше имя"
                        className="mt-1 block p-2 w-full focus:outline-none rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-white bg-gray-800 border-gray-600"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="mt-2 text-sm text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-golden"
                      >
                        Email
                      </label>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Введите ваш email"
                        className="mt-1 block p-2 w-full rounded-md focus:outline-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-white bg-gray-800 border-gray-600"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="mt-2 text-sm text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-golden"
                    >
                      Сообщение
                    </label>
                    <Field
                      id="message"
                      name="message"
                      as="textarea"
                      rows={4}
                      placeholder="Введите ваше сообщение"
                      className="mt-1 block p-2 w-full rounded-md focus:outline-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-white bg-gray-800 border-gray-600 resize-none"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="mt-2 text-sm text-white"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <AnimatedSubscribeButton
                      buttonColor="#D4C17F"
                      buttonTextColor="#ffffff"
                      subscribeStatus={false}
                      initialText={
                        <span className="group inline-flex items-center">
                          Отправить
                        </span>
                      }
                      changeText={
                        <span className="group inline-flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 block" />
                          Отправлено
                        </span>
                      }
                      disabled={isSubmitting || !dirty}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
