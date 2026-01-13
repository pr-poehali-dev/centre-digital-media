import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="text-gradient">Centre digital & media</span>
            </div>
            <div className="hidden md:flex gap-8 items-center">
              {['Возможности', 'Услуги', 'Процесс', 'Результаты', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                >
                  {item}
                </button>
              ))}
              <Button className="gradient-primary text-white shadow-lg shadow-purple-500/30">
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 opacity-60"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="container mx-auto relative z-10">
          <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-8">
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-semibold">
                🚀 19 лет экспертизы на российском рынке
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Ваш надёжный партнёр
              <span className="text-gradient block mt-2">для выхода в Россию</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              Полнофункциональное медиа-агентство с собственными медиаактивами
            </p>
            <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
              Превратим рыночный потенциал в ваш рост — от стратегии до продаж
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="gradient-primary text-white text-lg px-10 py-7 shadow-2xl shadow-purple-500/40 hover:scale-105 transition-transform">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all">
                Скачать презентацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section id="возможности" className="py-32 px-6 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Россия ждёт <span className="text-gradient">новые бренды</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Российский рынок сегодня — это <strong className="text-gray-900">146 миллионов</strong> активных потребителей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {[
              {
                icon: 'UserCheck',
                title: 'Открыты к новому',
                description: 'Готовы пробовать товары и услуги из дружественных стран — если оно понятно и актуально'
              },
              {
                icon: 'Heart',
                title: 'Доверяют соседям',
                description: 'Продукция из СНГ, Азии и Ближнего Востока воспринимается с особым доверием'
              },
              {
                icon: 'TrendingUp',
                title: 'Окно возможностей',
                description: 'После 2022 года освободились ниши — реальные возможности для новых игроков'
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex w-20 h-20 rounded-3xl gradient-primary items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 shadow-xl shadow-purple-500/30">
                  <Icon name={item.icon} className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Почему регионы — ваш главный актив</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-5xl font-bold mb-4">85%</div>
                  <p className="text-xl text-purple-100">населения живёт вне Москвы и Петербурга — именно там формируется устойчивый спрос</p>
                </div>
                <div>
                  <div className="space-y-3">
                    <p className="text-lg flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="flex-shrink-0 mt-1" />
                      Поведение в Екатеринбурге ≠ поведению в Краснодаре
                    </p>
                    <p className="text-lg flex items-start gap-3">
                      <Icon name="Target" size={20} className="flex-shrink-0 mt-1" />
                      Ценности в Новосибирске ≠ ценностям в Казани
                    </p>
                    <p className="text-lg flex items-start gap-3">
                      <Icon name="Tv" size={20} className="flex-shrink-0 mt-1" />
                      Медиапотребление в Ижевске ≠ потреблению во Владивостоке
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-lg font-semibold">Без учёта региональной специфики даже сильный бренд теряет до 70% эффективности</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="услуги" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Полный спектр услуг <span className="text-gradient">под ключ</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Вы фокусируетесь на продукте — мы на том, чтобы его услышали и захотели
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: 'Target',
                title: 'Стратегический вход',
                description: 'Анализ рынка, позиционирование, медиаплан с распределением по регионам',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: 'MessageSquare',
                title: 'Контент и коммуникации',
                description: 'Локализация, SMM, видео, фото — под российские платформы',
                color: 'from-blue-500 to-purple-500'
              },
              {
                icon: 'Newspaper',
                title: 'PR и СМИ',
                description: 'Публикации в федеральных и региональных СМИ, работа с экспертами',
                color: 'from-orange-500 to-pink-500'
              },
              {
                icon: 'Video',
                title: 'Видеопродакшн',
                description: 'От коротких Reels до имиджевых фильмов — собственная команда',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: 'Radio',
                title: 'Медиазакупки',
                description: 'ТВ, радио, digital и наружная реклама — прямые договоры без посредников',
                color: 'from-pink-500 to-purple-500'
              },
              {
                icon: 'BarChart3',
                title: 'Аналитика',
                description: 'Прозрачная отчётность по охватам, лидам, продажам в реальном времени',
                color: 'from-indigo-500 to-purple-500'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group text-center hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <Icon name={service.icon} className="text-white" size={30} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
              <Icon name="MapPin" className="text-purple-600" size={24} />
              <span className="text-lg font-semibold text-gray-800">Региональное покрытие: работа в 80+ городах России</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="процесс" className="py-32 px-6 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Чётко и быстро
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Структурированный процесс — от анализа до масштабирования
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                step: '01', 
                title: 'Анализ и стратегия', 
                desc: 'Исследование ниши, конкурентов, ЦА по регионам. Рекомендации по адаптации бренда. Медиаплан с распределением по городам.', 
                time: 'до 15 дней' 
              },
              { 
                step: '02', 
                title: 'Запуск и тест', 
                desc: 'Создание контента и креативов. Настройка digital-кампаний. Первые публикации в СМИ и соцсетях.', 
                time: 'до 15 дней' 
              },
              { 
                step: '03', 
                title: 'Масштабирование', 
                desc: 'Расширение географии. Увеличение конверсий. Постоянная оптимизация на основе данных.', 
                time: 'постоянно' 
              }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="text-8xl font-bold text-white/10 mb-6 group-hover:text-white/20 transition-all">{phase.step}</div>
                <h3 className="text-3xl font-bold mb-4">{phase.title}</h3>
                <p className="text-purple-100 text-lg mb-6 leading-relaxed">{phase.desc}</p>
                <div className="inline-block px-6 py-3 rounded-full bg-white/20 text-sm font-semibold backdrop-blur">
                  {phase.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="результаты" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Измеримые <span className="text-gradient">KPI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы согласовываем и фиксируем цели до старта. Все данные — в регулярных отчётах. Без «чёрных ящиков»
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {[
              { metric: 'Охват', range: '100K - 5M+', description: 'уникальных контактов', icon: 'Users' },
              { metric: 'Лиды', range: '50 - 1000+', description: 'заявок в месяц', icon: 'Target' },
              { metric: 'СМИ', range: '10 - 50+', description: 'публикаций', icon: 'Newspaper' },
              { metric: 'Видео', range: '450K+', description: 'просмотров', icon: 'Video' }
            ].map((kpi, index) => (
              <div key={index} className="text-center group hover:-translate-y-2 transition-all duration-300">
                <div className="inline-flex w-14 h-14 rounded-2xl gradient-primary items-center justify-center mb-6 group-hover:scale-110 transition-all shadow-lg shadow-purple-500/30">
                  <Icon name={kpi.icon} className="text-white" size={26} />
                </div>
                <div className="text-sm font-semibold text-purple-600 mb-2">{kpi.metric}</div>
                <div className="text-4xl font-bold text-gradient mb-2">{kpi.range}</div>
                <div className="text-gray-600">{kpi.description}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Почему именно мы</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: 'Award', text: '19 лет на рынке — знаем, как меняется поведение аудитории' },
                { icon: 'Radio', text: 'Собственные медиа: радиостанции, сайты, соцсети — без посредников' },
                { icon: 'MapPin', text: 'Региональная сеть: глубокое знание местного контекста' },
                { icon: 'Package', text: 'Комплекс «под ключ»: от анализа до видеопродакшена' },
                { icon: 'DollarSign', text: 'Гибкие пакеты: от аудита (1500€) до full-cycle (8000€/мес)' },
                { icon: 'Users', text: 'Директор по экспорту лично курирует каждый проект' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Icon name={item.icon} className="text-white" size={22} />
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="контакты" className="py-32 px-6 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Готовы начать?</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Три простых шага до запуска вашего бренда в России
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[
              { num: '1', text: 'Заполните короткий бриф (5 минут) — получите бесплатную консультацию', icon: 'FileText' },
              { num: '2', text: '30-минутный Zoom с директором по экспорту — обсудим вашу нишу', icon: 'Video' },
              { num: '3', text: 'Индивидуальное КП с медиапланом, KPI и бюджетом — старт за 5 дней', icon: 'Rocket' }
            ].map((step, i) => (
              <div key={i} className="group">
                <div className="inline-flex w-16 h-16 rounded-2xl gradient-primary items-center justify-center mb-6 group-hover:scale-110 transition-all shadow-xl shadow-purple-500/40">
                  <Icon name={step.icon} className="text-white" size={28} />
                </div>
                <div className="text-5xl font-bold text-gradient mb-4">{step.num}</div>
                <div className="text-lg text-gray-700 leading-relaxed">{step.text}</div>
              </div>
            ))}
          </div>

          <Button size="lg" className="gradient-primary text-white text-xl px-12 py-8 font-semibold shadow-2xl shadow-purple-500/40 hover:scale-105 transition-transform mb-16">
            Начать сейчас
          </Button>

          <div className="pt-16 border-t border-gray-200">
            <div className="text-lg text-gray-700 mb-6 font-medium">Софья Самойлова — Директор по экспорту</div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-600">
              <a href="mailto:export@centredigital.ru" className="flex items-center gap-3 hover:text-purple-600 transition-colors text-lg">
                <Icon name="Mail" size={22} />
                export@centredigital.ru
              </a>
              <a href="tel:+79220000000" className="flex items-center gap-3 hover:text-purple-600 transition-colors text-lg">
                <Icon name="Phone" size={22} />
                +7 922 000-0000
              </a>
              <a href="https://centredigital.ru" className="flex items-center gap-3 hover:text-purple-600 transition-colors text-lg">
                <Icon name="Globe" size={22} />
                centredigital.ru
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <div className="text-gray-400">
            © 2026 Centre digital & media. Ижевск, Россия
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
