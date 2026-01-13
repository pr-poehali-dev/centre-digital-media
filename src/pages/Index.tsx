import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: 'Target',
      title: 'Go-to-Market',
      description: 'Стратегия, анализ рынка, медиапланирование по регионам',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Radio',
      title: 'Медиазакупки',
      description: 'ТВ, радио, digital и наружная реклама',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: 'MessageSquare',
      title: 'Контент / SMM',
      description: 'Локализация, видео, фото, ведение соцсетей',
      color: 'from-orange-500 to-pink-500'
    },
    {
      icon: 'Newspaper',
      title: 'PR и GR',
      description: 'Публикации в СМИ, работа с органами власти',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: 'Video',
      title: 'Видеопродакшн',
      description: 'Собственная команда, все форматы контента',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика',
      description: 'Отчётность по ключевым KPI в реальном времени',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const kpis = [
    { value: '5M+', label: 'Уникальных контактов', icon: 'Users' },
    { value: '1000+', label: 'Заявок в месяц', icon: 'TrendingUp' },
    { value: '50+', label: 'Публикаций в СМИ', icon: 'Newspaper' },
    { value: '19', label: 'Лет экспертизы', icon: 'Award' }
  ];

  const solutions = [
    {
      title: 'Выход на рынок',
      description: 'Без открытия офиса — мы ваша российская команда',
      icon: 'Rocket'
    },
    {
      title: 'Узнаваемость бренда',
      description: 'От первых продаж до прочной деловой репутации',
      icon: 'Sparkles'
    },
    {
      title: 'Региональный рост',
      description: '85% покупателей — вне Москвы и Петербурга',
      icon: 'MapPin'
    }
  ];

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
              {['Главная', 'Услуги', 'Решения', 'КПИ', 'Контакты'].map((item) => (
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
      <section id="главная" className="pt-40 pb-32 px-6 relative overflow-hidden">
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
              Ваш мост на
              <span className="text-gradient block mt-2">российский рынок</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Комплексные услуги продвижения иностранных брендов в России. 
              <strong className="text-gray-900">146 миллионов</strong> цифровых потребителей ждут ваши продукты
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

          {/* Stats - без карточек */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-32 max-w-5xl mx-auto">
            {kpis.map((kpi, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6 group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all">
                  <Icon name={kpi.icon} className="text-white" size={28} />
                </div>
                <div className="text-5xl font-bold text-gradient mb-3">{kpi.value}</div>
                <div className="text-sm text-gray-600 font-medium">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="решения" className="py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ваши задачи — <span className="text-gradient">наши решения</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Фокус на результате: от запуска первых продаж до долгосрочного роста
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="inline-flex w-20 h-20 rounded-3xl gradient-primary items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl shadow-purple-500/30">
                  <Icon name={solution.icon} className="text-white" size={36} />
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-gradient transition-all">{solution.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="услуги" className="py-32 px-6 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Услуги: <span className="text-gradient">единое окно</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Глубокая локализация и экспертиза российского рынка
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Как мы работаем
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Структурировано и быстро — от анализа до масштабирования
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {[
              { step: '01', title: 'Анализ', desc: 'Изучаем рынок, города, аудиторию и конкурентов', time: 'до 15 дней' },
              { step: '02', title: 'Запуск', desc: 'Адаптация коммуникаций, производство контента, старт кампаний', time: 'до 15 дней' },
              { step: '03', title: 'Рост', desc: 'Масштабирование охвата, наращивание лидов и продаж', time: 'постоянно' }
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

      {/* KPI Section */}
      <section id="кпи" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Измеримые <span className="text-gradient">KPI</span>
            </h2>
            <p className="text-xl text-gray-600">
              Прозрачное отслеживание — никаких «чёрных ящиков»
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              { num: '1', text: 'Заполните бриф — получите консультацию', icon: 'FileText' },
              { num: '2', text: '30-минутный Zoom с экспертом', icon: 'Video' },
              { num: '3', text: 'Получите медиаплан и стартуйте за 5 дней', icon: 'Rocket' }
            ].map((step, i) => (
              <div key={i} className="group">
                <div className="inline-flex w-16 h-16 rounded-2xl gradient-primary items-center justify-center mb-6 group-hover:scale-110 transition-all shadow-xl shadow-purple-500/40">
                  <Icon name={step.icon} className="text-white" size={28} />
                </div>
                <div className="text-5xl font-bold text-gradient mb-4">{step.num}</div>
                <div className="text-lg text-gray-700">{step.text}</div>
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
