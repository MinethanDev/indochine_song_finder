// Dictionnaire des traductions pour les deux pages
const translations = {
    fr: {
        // Index
        'label-intro': 'Type d\'intro :',
        'option-intro-short': 'Courte',
        'option-intro-medium': 'Moyenne',
        'option-intro-long': 'Longue',
        'option-any': 'Peu importe',
        'label-mood': 'Chanson plutôt :',
        'option-happy': 'Joyeuse',
        'option-sad': 'Triste',
        'option-neutral': 'Neutre',
        'label-theme': 'Thème de la chanson :',
        'option-love': 'Amour',
        'option-war': 'Guerre',
        'option-sex': 'Sexe',
        'option-other': 'Autre',
        'label-duration': 'Durée de la chanson :',
        'option-standard': 'Standard',
        'option-medium': 'Moyenne',
        'option-long': 'Longue',
        'label-type': 'Chanson studio ou live ? :',
        'option-studio': 'Studio',
        'option-live': 'Live',
        'label-tempo': 'Chanson plutôt :',
        'option-calm': 'Calme',
        'option-fast': 'Rythmée',
        'label-year': 'Ancienneté :',
        'option-years-1': '1981-2001',
        'option-years-2': '2001-2024',
        'button-validate': 'Valider',
        'credits': 'Fait avec ❤ par Minethan - 2024',

        // Result
        'title-result': 'Résultat - Chanson recommandée',
        'recommendation-text': 'D\'après tes réponses, tu devrais écouter :',
        'spotify-button': 'Écouter sur Spotify'
    },
    en: {
        // Index
        'label-intro': 'Type of intro:',
        'option-intro-short': 'Short',
        'option-intro-medium': 'Medium',
        'option-intro-long': 'Long',
        'option-any': 'Any',
        'label-mood': 'Song is more:',
        'option-happy': 'Happy',
        'option-sad': 'Sad',
        'option-neutral': 'Neutral',
        'label-theme': 'Song theme:',
        'option-love': 'Love',
        'option-war': 'War',
        'option-sex': 'Sex',
        'option-other': 'Other',
        'label-duration': 'Song duration:',
        'option-standard': 'Standard',
        'option-medium': 'Medium',
        'option-long': 'Long',
        'label-type': 'Studio or live song?:',
        'option-studio': 'Studio',
        'option-live': 'Live',
        'label-tempo': 'Song is more:',
        'option-calm': 'Calm',
        'option-fast': 'Fast',
        'label-year': 'Year range:',
        'option-years-1': '1981-2001',
        'option-years-2': '2001-2024',
        'button-validate': 'Submit',
        'credits': 'Made with ❤ by Minethan - 2024',

        // Result
        'title-result': 'Result - Recommended Song',
        'recommendation-text': 'Based on your answers, you should listen to:',
        'spotify-button': 'Listen on Spotify'
    }
};

function setLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}