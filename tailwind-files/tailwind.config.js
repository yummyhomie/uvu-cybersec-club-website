/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../index.html",
            "../project-files/about.html",
            "../project-files/contact.html",
            "../project-files/meetings.html",
            "../project-files/members.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        arcade: ['Arcade'],
        tommy: ['Tommy']
      },
      colors: {
        'csc-gray': '#F5F5F5',
        'cysc-green': '#179563',
      },
    },
  },
  plugins: [],
}

