const platform = require('../Utils/platform.js');

class i18n {
    constructor(c) {
        this.lang = platform.is_test() ? c.local : "ru_RU"; // TODO: catch user local from g
        this.init();
    }
    
    
    init() {
        this.l = {}
        this.l["ru_RU"] = {
            "mod_settings_title": "Настройки мода",
            "choose_theme": "Выбери фон",
            "enter_token_which_dialog_question_title": "Вход по токену",
            "enter_token_which_dialog_question_desc": "Использовать вход по SCID токену? (если отмена - по обычному токену)\n<cfffa73>Регистрация SupercellID по обычному токену доступна только в Debug Menu.</c>",
            "reset_token_dialog_title": "Вход по токену",
            "reset_token_dialog_desc": "Сбросить токен и зайти обратно на свой аккаунт?",
            
            "want_set_unlinked_music_theme_dialog_title": "Раздельная музыка",
            "want_set_unlinked_music_theme_dialog_desc": "Хотите установить музыку несвязанную с текущим фоном?",
            
            "enter_website_link_dialog_title": "Введи ссылку",
            "battle_time": "Время боя: ",
            "battle_time_short": "Бой: ",
            "battle_ping": "Пинг: ",
            "milliseconds": "мс",
            
            "settings_choose_title_title": "Выбери фон",
            "settings_choose_server_title": "Выбери сервер",
            "settings_choose_hero_for_skindrop_title": "Выбери БОЙЦА на СКИНЕ",
            
            "settings_open_parameters_btn": "Открыть параметры",
            "settings_change_age_btn": "Изменить возраст аккаунта",
            "settings_change_theme_btn": "Изменить фон",
            "settings_change_server_btn": "Изменить регион боя",
            "settings_open_heroes_btn": "Бойцы",
            "settings_open_skins_btn": "Скины",
            "settings_login_by_token_btn": "Зайти по токену",
            "settings_open_link_btn": "Открыть ссылку",
            
            
            "already_on_this_theme": "Уже установлен этот фон",
            "choose_skin_for": "Выбери скин для бойца",
            
            "show_bots": "Определитель ботов",
            "show_bots_desc": "Если противник является ботом - в начале его ника будет приписка <ccc1212>[BOT]</c>",
            "clown_thumbsdown": "Клоуны в пинах",
            "clown_thumbsdown_desc": "Вставлять [🤡] в ник противника, если у него есть дизлайк",
            "outline": "Обводка персонажей",
            "outline_desc": "Чёрная рамка вокруг бравлера\n<ccc1212>Игра будет перезагружена.</c>",
            "lasermask": "Рамки в боях",
            "lasermask_desc": "Черные рамки по бокам экрана.",
            "slowmode": "Режим Слоу-мо",
            "slowmode_desc": "Замедленный режим",
            "emoji_animation_disabled": "Убрать анимации эмодзи",
            "emoji_animation_disabled_desc": "В боях эмодзи не будут анимированы, а статичны. Полезно для слабых устройств",
            "break_hints": "Убрать подсказки на нулевых акках",
            "break_hints_desc": 'Указатели по типу "А теперь о том как можно улучшать бойцов"',
            "visual_chromatic": "Хроматический ник",
            "visual_chromatic_desc": "Визуальный хроматический переливающийся ник",
            "hide_ulti": "Скрыть наведения ультой",
            "hide_ulti_desc": "Противники в бою не будут видеть, что вы прицеливаетесь",
            "xray_heroes": "Отображение бравлеров в друж. руме",
            "xray_heroes_desc": "Вы будете видеть, каких бравлеров взял противник в друж. руме!",
            "china_bs": "Китайская версия BS",
            "china_bs_desc": "Незначительные GFX изменения: фиолетовый дым в ШД и белый экран при уроне",
            "use_proxy": "Прокси",
            "use_proxy_desc": "Игра будет подключаться к серверу bs.rldv1.dev с обходом проверки на местоположение.\n<ccc1212>Игра будет перезагружена.</c>",
            "show_debug_battle": "Показывать отладку в бою",
            "show_debug_battle_desc": "Количество использованного интернета, фреймрейт, общее количество боя, тег просматриваемого аккаунта (работает даже в BrawlTV)",
            "fast_load": "Быстрая загрузка",
            "fast_load_desc": "Убрать логотип Supercell и начальную анимацию загрузочного экрана при входе в бой.\n<ccc1212>Игра будет перезагружена.</c>",
            "hide_battle": "Скрыть свой бой",
            "hide_battle_desc": "Ваш бой будет скрыт от друзей, и за вами не смогут наблюдать",
            "anti_afk": "АнтиAFK",
            "anti_afk_desc": "Защита от автоматического выхода за бездействие",
            "fps_bypass": "Снять лимит FPS",
            "fps_bypass_desc": "Умножит ваш лимит FPS на 0",
            "show_ammo": "Показывать кол-во патронов противников",
            "show_ammo_desc": "<ccc1212>Работает нестабильно.</c>",
            "swear_filter": "Анти-цензура в чате",
            "swear_filter_desc": "Материтесь в чате сколько угодно!\n<ccc1212>Может привести к бану.</c>",
            "static_theme": "Статичный фон",
            "static_theme_desc": "Фон, который в лобби, будет везде и во всех меню!\n<ccc1212>Игра будет перезагружена.</c>",
            "show_upcoming_events": "Показывать следующие события",
            "show_upcoming_events_desc": "У вас будут показываться карты и режимы, которые будут следующими!",
            "disable_render_shake": "Отключить тряску в бою",
            "disable_render_shake_desc": "Для плавности игры - вы можете отключить тряску во время боя (например, когда Шелли стреляет ультой)"
        }

    }
    
    i(a) {
        return this.Localize(a)
    }
    
    Localize(text) {
        if (!this.lang) return console.log("[i18n::Localize] locale is undefined, incorrecty imported class?")
        if (text.toLowerCase() in this.l[this.lang]) return this.l[this.lang][text.toLowerCase()]
        else {
            console.log("[i18n::Localize] failed to determine", text.toLowerCase(), "for locale", this.lang)
            return text.toLowerCase()
        }
    }
}

module.exports = i18n;
