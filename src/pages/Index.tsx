import Icon from '@/components/ui/icon';

const HERO = 'https://cdn.poehali.dev/projects/d25cc35d-38b6-4c08-939d-92ad57b6b889/files/241ab469-4d0e-468f-831f-32490a7a2318.jpg';
const AUTHOR = 'https://cdn.poehali.dev/projects/d25cc35d-38b6-4c08-939d-92ad57b6b889/files/949b6717-9f00-4942-ac3d-6f8091231f05.jpg';
const PRODUCT = 'https://cdn.poehali.dev/projects/d25cc35d-38b6-4c08-939d-92ad57b6b889/files/24238fc9-e10e-4875-a8f1-2f0bcc47dc4c.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="font-display text-xl">Анна Светлова</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#portfolio" className="hover:text-accent">Портфолио</a>
            <a href="#services" className="hover:text-accent">Услуги</a>
            <a href="#about" className="hover:text-accent">О фотографе</a>
            <a href="#price" className="hover:text-accent">Прайс</a>
            <a href="#contact" className="hover:text-accent">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container py-24 text-center">
        <h1 className="font-display text-5xl md:text-6xl mb-4">Останавливаю мгновения</h1>
        <p className="text-muted-foreground mb-6">Свадебная, портретная и предметная съёмка</p>
        <a href="#portfolio" className="inline-block bg-accent text-accent-foreground px-8 py-3">
          Смотреть работы
        </a>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="container py-16">
        <h2 className="font-display text-4xl mb-8 text-center">Портфолио</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { img: HERO, title: 'Свадьба у моря' },
            { img: AUTHOR, title: 'Портрет в студии' },
            { img: PRODUCT, title: 'Предметная съёмка' },
            { img: HERO, title: 'Утро невесты' },
            { img: PRODUCT, title: 'Интерьер кафе' },
            { img: AUTHOR, title: 'Lifestyle портрет' },
          ].map((p, i) => (
            <div key={i}>
              <img src={p.img} alt={p.title} className="w-full h-72 object-cover" />
              <p className="mt-2 text-sm">{p.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary py-16">
        <div className="container">
          <h2 className="font-display text-4xl mb-8 text-center">Услуги</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Портретная съёмка', duration: '1–2 часа', photos: '30 фото', includes: 'Базовая ретушь' },
              { title: 'Свадебная съёмка', duration: 'до 10 часов', photos: '300+ фото', includes: 'Выезд, ретушь, фотокнига' },
              { title: 'Предметная / Интерьерная', duration: '2–4 часа', photos: '40 фото', includes: 'Студия, выезд, ретушь' },
            ].map((s, i) => (
              <div key={i} className="bg-card p-6 border border-border">
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground">Длительность: {s.duration}</p>
                <p className="text-sm text-muted-foreground">Обработка: {s.photos}</p>
                <p className="text-sm text-muted-foreground">Входит: {s.includes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-16">
        <h2 className="font-display text-4xl mb-8 text-center">О фотографе</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={AUTHOR} alt="Анна Светлова" className="w-full h-96 object-cover" />
          <div>
            <p className="font-display italic text-2xl text-accent mb-4">
              «Свет — это язык, на котором говорят чувства»
            </p>
            <p className="text-muted-foreground mb-3">
              Уже более 12 лет я создаю снимки, которые хочется пересматривать. Снимала более 300
              свадеб, получила 15 наград.
            </p>
            <p className="text-muted-foreground">
              Моя философия: фотография должна быть живой и честной.
            </p>
          </div>
        </div>
      </section>

      {/* Price */}
      <section id="price" className="bg-secondary py-16">
        <div className="container">
          <h2 className="font-display text-4xl mb-8 text-center">Прайс</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Стандарт', price: '15 000 ₽', features: ['1 час', '20 фото', '1 локация'] },
              { name: 'Премиум', price: '30 000 ₽', features: ['3 часа', '60 фото', 'Выезд включён'] },
              { name: 'VIP', price: '60 000 ₽', features: ['Полный день', '150+ фото', 'Фотокнига'] },
            ].map((p, i) => (
              <div key={i} className="bg-card p-6 border border-border text-center">
                <h3 className="font-display text-2xl mb-2">{p.name}</h3>
                <p className="font-display text-4xl mb-4">{p.price}</p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  {p.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <a href="#contact" className="inline-block bg-accent text-accent-foreground px-6 py-2">
                  Выбрать
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-16 max-w-xl">
        <h2 className="font-display text-4xl mb-8 text-center">Связаться со мной</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Ваше имя" className="w-full border border-input px-4 py-3 bg-card" />
          <input type="email" placeholder="E-mail" className="w-full border border-input px-4 py-3 bg-card" />
          <select className="w-full border border-input px-4 py-3 bg-card">
            <option value="">Тип съёмки</option>
            <option value="portrait">Портретная</option>
            <option value="wedding">Свадебная</option>
            <option value="product">Предметная / Интерьерная</option>
          </select>
          <textarea placeholder="Комментарий" rows={4} className="w-full border border-input px-4 py-3 bg-card" />
          <button type="submit" className="w-full bg-accent text-accent-foreground py-3">
            Отправить заявку
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-10">
        <div className="container flex flex-col md:flex-row justify-between gap-4 text-sm">
          <p>© 2026 Анна Светлова</p>
          <p>+7 (999) 123-45-67 · hello@svetlova.photo</p>
          <div className="flex gap-3">
            <a href="#"><Icon name="Instagram" size={18} /></a>
            <a href="#"><Icon name="Send" size={18} /></a>
            <a href="#"><Icon name="Youtube" size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
