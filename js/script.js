
var app = angular.module('multilang', ['pascalprecht.translate']);
var langs = ['ru', 'en', 'pl'];
var langCtrl = '';

app.config(function($translateProvider) {
	$translateProvider.translations('ru', {
		ru: 'Русский',
		en: 'English',
		pl: 'Polski',
		multititle: 'Влад Кевляк - личная страница',
		multinavbar: 'Переключение навигации',
		mnavind: 'Главная',
		mnavrez: 'Резюме',
		mnavcon: 'Контакны',
		mresume: 'Резюме',
		mact: 'Сфера деятельности',
		madmin: 'Сетевые технологии и системное администрирование.',
		meduc: 'Образование',
		mncoll: 'Гродненский государственный Политехнический колледж',
		macoll: '<em>2007 - 2011</em><br>Отделение: Автоматизации и информатизации<br>Специальность: Вычислительные машины, системы и сети<br>Специализация: Эксплуатация локальных компьютерных сетей<br>Квалификация: Техник',
		mnuni: 'Белорусский государственный университет информатики и радиоэлектроники',
		mauni: '<em>2011 - 2017</em><br>Факультет: Факультет заочного обучения<br>Специальность: Электронные вычислительные средства<br>Квалификация: Инженер-электроник',
		mexp: 'Опыт работы',
		moptiman: 'Торговая сеть "MiniMax" (ООО "Промтраст энд Ко")',
		mingel: 'Системный администратор (Инженер-электроник)',
		mowtime: 'Сентябрь 2013 - Настоящее время',
		moptadm0: 'Администрирование серверов на ОС Windows Server, Linux',
		moptadm1: 'Подключение магазинов к корпоративной сети по технологии VPN',
		moptadm2: 'Администрирование баз данных (Progress, MySQL, MS SQL)',
		moptadm3: 'Техническая поддержка пользователей, в том числе удаленных',
		moptadm4: 'Обслуживание кассового оборудования',
		moptadm5: 'Прокладка, настройка, локальной вычислительной сети',
		moptadm6: 'Установка и настройка систем видеонаблюдения',
		madmon: 'Администрация Октябрьского района г. Гродно Отдел образования, спорта и туризма',
		mingen: 'Инженер-электроник',
		mawtime: '2011-2013',
		maoradm0: 'Ремонт персональных компьютеров, ноутбуков',
		maoradm1: 'Установка операционных систем и прикладного программного обеспечения',
		maoradm2: 'Обслуживание принтеров и копировальных устройств',
		maoradm3: 'Прокладка, настройка, локальной вычислительной сети',
		maoradm4: 'Работа с мультимедиа оборудованием',
		mdinf: 'Дополнительная информация',
		mskills: 'Навыки',
		mskills0: 'Виртуализация серверов (Hyper-V, VMware ESX, Oracle VM VirtualBox)',
		mskills1: 'Настройка серверов (Asterisk, OpenVPN, Squid, Samba, Web (Apache+MySQL+PHP))',
		mskills2: 'Опыт в создании сайтов (HTML / HTML5, CSS / CSS3, JavaScript)',
		mskills3: 'Знание CMS (OpenCart, Joomla, WordPress)',
		mskills4: 'Небольшой опыт в программировании (C#, Assembler, JavaScript, Pascal)<br>Начальные знания Microsoft .NET Core',
		moth: 'Другое',
		moth0: 'Наличие личного автомобиля и удостоверения на право управления транспортным средством категории В',
		moth1: 'Отсутствие вредных привычек',
		moth2: 'Возможность официального трудоустройства в Республике Польша',
		mperq: 'Личные качества',
		mperq0: 'Практичность',
		mperq1: 'Ответственность',
		mperq2:'Дисциплинированность',
		mperq3:  'Обучаемость',
		mdowr:  '<a class="btn btn-lg btn-primary btn-danger" href="docs/resume_admin_vlad_kevl_ru.pdf" role="button" translate="mdowr">Скачать резюме</a>',
		mcontact: 'Контакты',
		mcont0: 'Имя:',
		mcont1: 'Влад Кевляк',
		mcont2:'Адрес:',
		mcont3:  '230026, <abbr title="Республика Беларусь">РБ</abbr>, г. Гродно, пр-т Клецкова, 32',
		mcont4:  'Телефон:',
		mcont5:'<abbr title="+37529">(029)</abbr> 282-3302',
		mcont6:  'Эл. почта:',
		mcont7:  'vlad'+'@'+'kevl.by',
		mbutt:  'Кнопки для быстрой связи',
		mcorp:  'Влад Кевляк',
		mmap: '<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=ILL-A-5HaPLqRXHT4XA9JQqgSQxfTEdt&amp;lang=ru_RU&amp;scroll=false"></script>'
	})
	.translations('en', {
		ru: 'Русский',
		en: 'English',
		pl: 'Polski',
		multititle: 'Vlad Kevlyak - personal page',
		multinavbar: 'Toggle navigation',
		mnavind: 'Home',
		mnavrez: 'Resume',
		mnavcon: 'Contacts',
		mresume: 'Resume',
		mact: 'Field of activity',
		madmin: 'Network technologies and system administration.',
		meduc: 'Education',
		mncoll: 'Grodno State Polytechnic College',
		macoll: '<em>2007 - 2011</em><br>Faculty: Faculty of Automation and Information<br>Speciality: Computers, systems and nets<br>Specialization: Exploitation of local computer networks<br>Qualification: Technician',
		mnuni: 'Belarusian State University of Informatics and Radio Electronics',
		mauni: '<em>2011 - 2017</em><br>Faculty: Faculty of distance learning<br>Speciality: Electronic computing means<br>Qualifications: Electronic engineer',
		mexp: 'Experience',
		moptiman: 'Trading network "MiniMax" (Promtrast & Co LLC)',
		mingel: 'The system administrator (Electronic engineer)',
		mowtime: 'September 2013 - until now',
		moptadm0: 'Administration of servers on the OS Windows Server, Linux',
		moptadm1: 'Connecting stores to the corporate network over a VPN technology',
		moptadm2: 'Database administration (Progress, MySQL, MS SQL)',
		moptadm3: 'Technical support, including remote users',
		moptadm4: 'Service of cash equipment',
		moptadm5: 'Installation, configuration LAN',
		moptadm6: 'Installing and configuring video surveillance systems',
		madmon: 'Administration of the Oktyabrsky district of Grodno Department of Education, Sport and Tourism',
		mingen: 'Electronics engineer',
		mawtime: '2011-2013',
		maoradm0: 'Repair of personal computers, laptops',
		maoradm1: 'Installing the operating system and application software',
		maoradm2: 'Service of printers and copiers',
		maoradm3: 'Installation, configuration LAN',
		maoradm4: 'Working with multimedia equipment',
		mdinf: 'Additional information',
		mskills: 'Skills',
		mskills0: 'Server virtualization (Hyper-V, VMware ESX, Oracle VM VirtualBox)',
		mskills1: 'Configure servers (Asterisk, OpenVPN, Squid, Samba, Web (Apache+MySQL+PHP))',
		mskills2: 'Experience in the creation of websites (HTML / HTML5, CSS / CSS3, JavaScript)',
		mskills3: 'Knowledge of CMS (OpenCart, Joomla, WordPress)',
		mskills4: 'Some experience in programming (C#, Assembler, JavaScript, Pascal)<br>Basic knowledge of Microsoft .NET Core',
		moth: 'Other',
		moth0: 'Availability of personal vehicle and permission for driving the vehicles of B category',
		moth1: 'No bad habits',
		moth2: 'The possibility of official employment in the Republic of Poland',
		mperq: 'Personal qualities',
		mperq0: 'Practicality',
		mperq1: 'Responsibility',
		mperq2:'Discipline',
		mperq3:  'Educability',
		mdowr:  '<a class="btn btn-lg btn-primary btn-danger" href="docs/resume_admin_vlad_kevl_en.pdf" role="button" translate="mdowr">Download resume</a>',
		mcontact: 'Contacts',
		mcont0: 'Name:',
		mcont1: 'Vlad Kevlyak',
		mcont2:'Address:',
		mcont3:  '230026, <abbr title="Republic of Belarus">RB</abbr>, Grodno, ave Kletskova, 32',
		mcont4:  'Phone:',
		mcont5:'<abbr title="+37529">(029)</abbr> 282-3302',
		mcont6:  'E-mail:',
		mcont7:  'vlad'+'@'+'kevl.by',
		mbutt:  'Buttons for quick communications',
		mcorp:  'Vlad Kevlyak',
		mmap: '<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=ILL-A-5HaPLqRXHT4XA9JQqgSQxfTEdt&amp;lang=en_US&amp;scroll=false"></script>'
	})
	.translations('pl', {
		ru: 'Русский',
		en: 'English',
		pl: 'Polski',
		multititle: 'Władysław Kiewlak - osobista strona',
		multinavbar: 'Przełącznik nawigacji',
		mnavind: 'Główny',
		mnavrez: 'Streszczenie',
		mnavcon: 'Kontakty',
		mresume: 'Streszczenie',
		mact: 'Zakres działalności',
		madmin: 'Technologie sieciowe i administracja systemu.',
		meduc: 'Edukacja',
		mncoll: 'Państwowe Technikum Politechniczne w Grodnie',
		macoll: '<em>2007 - 2011</em><br>Oddział: Automatyzacji i informatyzacji<br>Specjalność: Komputerowe maszyny, systemy i sieci<br>Specjalizacja: Obsługa lokalnych sieci komputerowych<br>Kwalifikacje: Technik',
		mnuni: 'Białoruski państwowy uniwersytet informatyki i radioelektroniki',
		mauni: '<em>2011 - 2017</em><br>Wydział: Wydział kształcenia na odległość<br>Specjalność: Elektroniczne narzędzia obliczeniowe<br>Kwalifikacje: Inżynier-elektronik',
		mexp: 'Doświadczenie w pracy',
		moptiman: 'Sieć handlowa "MiniMax" (SP. z o. o. "Promtrast & Co")',
		mingel: 'Administrator systemu (Inżynier-elektronik)',
		mowtime: 'Wrzesień 2013 - Do chwili obecnej',
		moptadm0: 'Administracja serwera w systemie Windows Server, Linux',
		moptadm1: 'Podłączanie sklepów do sieci korporacyjnej nad technologią VPN',
		moptadm2: 'Administracja bazy danych (Progress, MySQL, MS SQL)',
		moptadm3: 'Wsparcie techniczne użytkowników, w tym zdalne',
		moptadm4: 'Obsługa urządzeń pieniężnych',
		moptadm5: 'Instalacja, konfiguracja, sieć lokalna',
		moptadm6: 'Instalacja i konfiguracja systemów nadzoru wideo',
		madmon: 'Administracja Październikowego rejonu Grodno, Wydział edukacji, sportu i turystyki',
		mingen: 'Inżynier-elektronik',
		mawtime: '2011-2013',
		maoradm0: 'Naprawa komputerów, laptopów',
		maoradm1: 'Instalacja systemów operacyjnych i oprogramowania',
		maoradm2: 'Obsługa drukarki i kopiarki',
		maoradm3: 'Instalacja, konfiguracja, sieć lokalna',
		maoradm4: 'Praca ze sprzętem multimedialnym',
		mdinf: 'Dodatkowe informacje',
		mskills: 'Umiejętności',
		mskills0: 'Wirtualizacja serwerów (Hyper-V, VMware ESX, Oracle VM VirtualBox)',
		mskills1: 'Konfiguracja serwera (Asterisk, OpenVPN, Squid, Samba, Web (Apache+MySQL+PHP))',
		mskills2: 'Doświadczenie w tworzeniu stron internetowych (HTML / HTML5, CSS / CSS3, JavaScript)',
		mskills3: 'Znajomość CMS (OpenCart, Joomla, WordPress)',
		mskills4: 'Doświadczenie w programowaniu (C#, Assembler, JavaScript, Pascal)<br>Podstawowa znajomość Microsoft .NET Core',
		moth: 'Inne',
		moth0: 'Posiadanie osobistego samochodu oraz prawa jazdy kategorii B',
		moth1: 'Brak szkodliwych nawyków',
		moth2: 'Możliwość oficjalnego zatrudnienia w Rzeczypospolitej Polskiej',
		mperq: 'Cechy osobiste',
		mperq0: 'Praktyczność',
		mperq1: 'Odpowiedzialność',
		mperq2:'Dyscyplina',
		mperq3:  'Zdolność uczenia się',
		mdowr:  '<a class="btn btn-lg btn-primary btn-danger" href="docs/resume_admin_vlad_kevl_pl.pdf" role="button" translate="mdowr">Pobierz CV</a>',
		mcontact: 'Kontakty',
		mcont0: 'Imię i nazwisko:',
		mcont1: 'Władysław Kiewlak',
		mcont2:'Adres:',
		mcont3:  '230026, <abbr title="Republika Białoruś">RB</abbr>, Grodna, pr-t Kletskowa, 32',
		mcont4:  'Telefon:',
		mcont5:'<abbr title="+37529">(029)</abbr> 282-3302',
		mcont6:  'E-mail:',
		mcont7:  'vlad'+'@'+'kevl.by',
		mbutt:  'Przyciski do szybkiej komunikacji',
		mcorp:  'Władysław Kiewlak',
		mmap: '<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=ILL-A-5HaPLqRXHT4XA9JQqgSQxfTEdt&amp;lang=en_US&amp;scroll=false"></script>'
	});
	var langCode = '';
	langCode = navigator.language.substr (0, 2);
	if (langs.indexOf(langCode) != -1){
	$translateProvider.preferredLanguage(langCode);
	langctrl = langCode;
	}
	else
	{
	$translateProvider.preferredLanguage('ru');
	langctrl = 'ru';
	}
});

app.controller('Ctrl', function($translate) {
	var ctrl = this;
	ctrl.language = langctrl;
	ctrl.languages = langs;
	ctrl.updateLanguage = function() {
	$translate.use(ctrl.language);
	};
});