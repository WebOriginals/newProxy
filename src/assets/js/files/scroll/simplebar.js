// Подключение плагина из node_modules
import SimpleBar from 'simplebar';


// Добавляем к блоку атрибут data-simplebar

// Также можно инициализировать следующим кодом, применяя настройки
if(window.outerWidth < 600 && document.querySelector('.tabs__navigation')){
	setTimeout(() => {
		document.querySelector('.tabs__navigation').setAttribute("data-simplebar", "");

		if (document.querySelectorAll('[data-simplebar]').length) {
            document.querySelectorAll('[data-simplebar]').forEach(scrollBlock => {
                new SimpleBar(scrollBlock, {
                    autoHide: false,
                    forceVisible: true
                });
            });
        }
	}, 2000);
}


