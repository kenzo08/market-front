// tailwind.config.js
module.exports = {
    // ...
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: ["light", "dark", "garden"], // Здесь перечисли все темы, которые ты хочешь использовать
        darkTheme: "dark", // Указывает, какая тема будет использоваться по умолчанию для prefers-color-scheme: dark
        // ... другие настройки
    },
}