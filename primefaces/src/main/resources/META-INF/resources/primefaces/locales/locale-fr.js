/** French */
PrimeFaces.locales['fr'] = {
    closeText: "Fermer",
    prevText: "Précédent",
    nextText: "Suivant",
    monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    monthNamesShort: ["Janv", "Févr", "Mars", "Avr", "Mai", "Juin", "Juill", "Août", "Sept", "Oct", "Nov", "Déc"],
    dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    dayNamesShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
    weekHeader: "Semaine",
    weekNumberTitle: "S",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: "",
    timeOnlyTitle: "Choisir l'heure",
    timeText: "Heure",
    hourText: "Heures",
    minuteText: "Minutes",
    secondText: "Secondes",
    millisecondText: "Millisecondes",
    currentText: "Maintenant",
    ampm: false,
    year: "Année",
    month: "Mois",
    week: "Semaine",
    day: "Jour",
    list: "Agenda",
    allDayText: "Toute la journée",
    moreLinkText: "Plus...",
    noEventsText: "Pas d'événements",
    today: "Aujourd'hui",
    clear: "Effacer",
    aria: {
        'paginator.PAGE': 'Page {0}',
        'calendar.BUTTON': 'Montrer le calendrier',
        'datatable.sort.ASC': 'activer pour trier la colonne dans l\'ordre croissant',
        'datatable.sort.DESC': 'activer pour trier la colonne dans l\'ordre décroissant',
        'datatable.sort.NONE': 'activer pour retirer le tri sur la colonne',
        'columntoggler.CLOSE': 'Fermer',
        'overlaypanel.CLOSE': 'Fermer'
    },
    messages: {
        // components
        "javax.faces.component.UIInput.CONVERSION": "{0} : une erreur de conversion s'est produite.",
        "javax.faces.component.UIInput.REQUIRED": "{0} : Erreur de validation : la valeur est requise.",
        "javax.faces.component.UIInput.UPDATE": "{0} : Une erreur s'est produite lors du traitement des informations que vous avez saisies.",
        "javax.faces.component.UISelectOne.INVALID": "{0} : Erreur de validation : la valeur n'est pas valide.",
        "javax.faces.component.UISelectMany.INVALID": "{0} : Erreur de validation : la valeur n'est pas valide."
            // converters
            ,
        "javax.faces.converter.BigDecimalConverter.DECIMAL": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal sign\u00e9.",
        "javax.faces.converter.BigDecimalConverter.DECIMAL_detail": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal sign\u00e9 compos\u00e9 de z\u00e9ro ou plusieurs chiffres, lesquels peuvent \u00eatre suivis d'une d\u00e9cimale et d'une fraction.  Exemple : {1}",
        "javax.faces.converter.BigIntegerConverter.BIGINTEGER": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal compos\u00e9 d'un ou plusieurs chiffres.",
        "javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal compos\u00e9 d'un ou plusieurs chiffres. Exemple : {1}",
        "javax.faces.converter.BooleanConverter.BOOLEAN": "{1} : '{0}' doit \u00eatre 'true' ou 'false'.",
        "javax.faces.converter.BooleanConverter.BOOLEAN_detail": "{1} : '{0}' doit \u00eatre 'true' ou 'false'.  Toute valeur autre que 'true' sera \u00e9valu\u00e9e comme 'false'.",
        "javax.faces.converter.ByteConverter.BYTE": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal compris entre 0 et 255.",
        "javax.faces.converter.ByteConverter.BYTE_detail": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal compris entre 0 et 255.  Exemple : {1}",
        "javax.faces.converter.CharacterConverter.CHARACTER": "{1} : '{0}' doit \u00eatre un caract\u00e8re valide.",
        "javax.faces.converter.CharacterConverter.CHARACTER_detail": "{1} : '{0}' doit \u00eatre un caract\u00e8re ASCII valide.",
        "javax.faces.converter.DateTimeConverter.DATE": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme une date.",
        "javax.faces.converter.DateTimeConverter.DATE_detail": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme une date. Exemple : {1}",
        "javax.faces.converter.DateTimeConverter.TIME": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme une heure.",
        "javax.faces.converter.DateTimeConverter.TIME_detail": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme une heure. Exemple : {1}",
        "javax.faces.converter.DateTimeConverter.DATETIME": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme une date et une heure.",
        "javax.faces.converter.DateTimeConverter.DATETIME_detail": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme une date et une heure. Exemple : {1}",
        "javax.faces.converter.DateTimeConverter.PATTERN_TYPE": "{1} : Un attribut 'pattern' ou 'type' doit \u00eatre sp\u00e9cifi\u00e9 pour la conversion de la valeur '{0}'.",
        "javax.faces.converter.DoubleConverter.DOUBLE": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal compos\u00e9 d'un ou plusieurs chiffres.",
        "javax.faces.converter.DoubleConverter.DOUBLE_detail": "{2} : '{0}' doit \u00eatre un nombre compris entre 4,9E-324 et 1,7976931348623157E308. Exemple : {1}",
        "javax.faces.converter.EnumConverter.ENUM": "{2} : '{0}' doit \u00eatre convertible en \u00e9num\u00e9ration.",
        "javax.faces.converter.EnumConverter.ENUM_detail": "{2} : '{0}' doit \u00eatre convertible en \u00e9num\u00e9ration \u00e0 partir de l'\u00e9num\u00e9ration qui contient la constante '{1}'.",
        "javax.faces.converter.EnumConverter.ENUM_NO_CLASS": "{1} : '{0}' doit \u00eatre convertible en \u00e9num\u00e9ration \u00e0 partir de l'\u00e9num\u00e9ration, mais aucune classe d'\u00e9num\u00e9ration n'a \u00e9t\u00e9 fournie.",
        "javax.faces.converter.EnumConverter.ENUM_NO_CLASS_detail": "{1} : '{0}' doit \u00eatre convertible en \u00e9num\u00e9ration \u00e0 partir de l'\u00e9num\u00e9ration, mais aucune classe d'\u00e9num\u00e9ration n'a \u00e9t\u00e9 fournie.",
        "javax.faces.converter.FloatConverter.FLOAT": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal compos\u00e9 d'un ou plusieurs chiffres.",
        "javax.faces.converter.FloatConverter.FLOAT_detail": "{2} : '{0}' doit \u00eatre un nombre compris entre 1,4E-45 et 3,4028235E38. Exemple : {1}",
        "javax.faces.converter.IntegerConverter.INTEGER": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal compos\u00e9 d'un ou plusieurs chiffres.",
        "javax.faces.converter.IntegerConverter.INTEGER_detail": "{2} : '{0}' doit \u00eatre un nombre compris entre -2147483648 et 2147483647. Exemple : {1}",
        "javax.faces.converter.LongConverter.LONG": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal compos\u00e9 d'un ou plusieurs chiffres.",
        "javax.faces.converter.LongConverter.LONG_detail": "{2} : '{0}' doit \u00eatre un nombre compris entre -9223372036854775808 et 9223372036854775807. Exemple : {1}",
        "javax.faces.converter.NumberConverter.CURRENCY": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme une devise.",
        "javax.faces.converter.NumberConverter.CURRENCY_detail": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme une devise. Exemple : {1}",
        "javax.faces.converter.NumberConverter.PERCENT": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme un pourcentage.",
        "javax.faces.converter.NumberConverter.PERCENT_detail": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme un pourcentage. Exemple : {1}",
        "javax.faces.converter.NumberConverter.NUMBER": "{2}: '{0}' n'est pas un nombre.",
        "javax.faces.converter.NumberConverter.NUMBER_detail": "{2}: '{0}' n'est pas un nombre. Exemple : {1}",
        "javax.faces.converter.NumberConverter.PATTERN": "{2}: '{0}' n'est pas un mod\u00e8le de nombre.",
        "javax.faces.converter.NumberConverter.PATTERN_detail": "{2}: '{0}' n'est pas un mod\u00e8le de nombre. Exemple : {1}",
        "javax.faces.converter.ShortConverter.SHORT": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal compos\u00e9 d'un ou plusieurs chiffres.",
        "javax.faces.converter.ShortConverter.SHORT_detail": "{2} : '{0}' doit \u00eatre un nombre compris entre -32768 et 32767. Exemple : {1}",
        "javax.faces.converter.STRING": "{1} : Impossible de convertir '{0}' en cha\u00eene."
            // validators
            ,
        "javax.faces.validator.NOT_IN_RANGE": "Erreur de validation : l'attribut sp\u00e9cifi\u00e9 n'est pas compris entre les valeurs attendues de {0} et de {1}.",
        "javax.faces.validator.DoubleRangeValidator.MAXIMUM": "{1} : Erreur de validation : la valeur est sup\u00e9rieure au maximum autoris\u00e9 de '{0}'",
        "javax.faces.validator.DoubleRangeValidator.MINIMUM": "{1} : Erreur de validation : la valeur est inf\u00e9rieure au minimum autoris\u00e9 de '{0}'",
        "javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE": "{2} : Erreur de validation : l'attribut sp\u00e9cifi\u00e9 n'est pas compris entre les valeurs attendues de {0} et de {1}.",
        "javax.faces.validator.DoubleRangeValidator.TYPE": "{0} : Erreur de validation : la valeur n'est pas du bon type.",
        "javax.faces.validator.LengthValidator.MAXIMUM": "{1} : Erreur de validation : la valeur est sup\u00e9rieure au maximum autoris\u00e9 de '{0}'",
        "javax.faces.validator.LengthValidator.MINIMUM": "{1} : Erreur de validation : la valeur est inf\u00e9rieure au minimum autoris\u00e9 de '{0}'",
        "javax.faces.validator.LongRangeValidator.MAXIMUM": "{1} : Erreur de validation : la valeur est sup\u00e9rieure au maximum autoris\u00e9 de '{0}'",
        "javax.faces.validator.LongRangeValidator.MINIMUM": "{1} : Erreur de validation : la valeur est inf\u00e9rieure au minimum autoris\u00e9 de '{0}'",
        "javax.faces.validator.LongRangeValidator.NOT_IN_RANGE": "{2} : Erreur de validation : l'attribut sp\u00e9cifi\u00e9 n'est pas compris entre les valeurs attendues de {0} et de {1}.",
        "javax.faces.validator.LongRangeValidator.TYPE": "{0} : Erreur de validation : la valeur n'est pas du bon type.",
        "javax.faces.validator.RegexValidator.NOT_MATCHED": "{1} : Erreur de validation : la valeur ne correspond pas au mod\u00e8le '{0}'",
        "javax.faces.validator.BeanValidator.MESSAGE": "{1} : {0}"
    }
};

