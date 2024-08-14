const ContactInfo = () => {
  return (
    <div className="text-white text-sm flex flex-col gap-3">
      <p>Адрес: Наб. реки Фонтанки 10-15</p>
      <a href='tel:+88121234567'>Телефон: 8 (812) 123-45-67</a>
      <p>Отдел продаж: 10:00 - 20:00</p>
      <p className="mb-1">
        E-mail: <span className="text-golden">vip@lofthouse.ru</span>
      </p>
    </div>
  );
};

export default ContactInfo;
