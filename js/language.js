const brElem = document.querySelector(".br")
const usElem = document.querySelector(".en")
const esElem = document.querySelector(".es")

brElem.addEventListener('click', () => {
    const buttonsContainer = document.querySelector(".buttons-container")
    buttonsContainer.children[0].children[0].innerText = "Início"

    const laguageSelected = document.querySelector(".language-selected")
    laguageSelected.innerHTML = '<span class="fi fi-br"></span>pt-BR'

    document.querySelector(".br").innerText = "Português"
    document.querySelector(".en").innerText = "Inglês"
    document.querySelector(".es").innerText = "Espanhol"

    //About
    document.querySelector(".about-text div h1").innerText = "Olá, seja bem vindo!"
    document.querySelector(".about-box p").innerHTML = `
        Aqui você vai conhecer um pouco mais a meu respeito. <br>
        Meu nome é João Pedro, mas para o nome do site a inspiração foram três paixões: <br>
        Physics, Computadores e Lisa. <br>
        Lisa é minha cadela vira-lata! <br>
        Minhas redes: <br> <br> <br>`

    document.querySelector(".social-media :nth-child(3)").href = "docs/curriculo-2023-JPVercosa.pdf"

    //Phy

    document.querySelector(".phy-text div h1").innerText = "PHY - Física"
    document.querySelector(".phy-box div :nth-child(1)").innerText = "Ao final do meu ensino médio, realizei as provas de vestibular acreditando que me tornaria professor de física."
    document.querySelector(".phy-box div :nth-child(2)").innerText = "Meu interesse pela matéria era enorme e me entristecia ver meus amigos compreenderem apenas o básico devido a falta de didática dos professores."
    document.querySelector(".phy-box div :nth-child(3)").innerText = "No ensino superior, ingressei no curso de Engenharia de Computação, o que me afastou das salas de aula."
    document.querySelector(".phy-box div :nth-child(4)").innerText = "De qualquer forma, nos três primeiros anos de faculdade, tive a oportunidade de lecionar física em um pré-vestibular comunitário oferecido pela Pastoral da PUC."
    document.querySelector(".phy-box div :nth-child(5)").innerText = "Essa experiência voluntária me mostrou que realmente gosto de ensinar e o quanto a didática de um professor pode influenciar o desejo de aprender dos alunos. As atividades acabaram interrompidas devido a pandemia."

    //Co
    document.querySelector(".co-text div h1").innerText = "CO - Computadores"
    document.querySelector(".co-box div :nth-child(1)").innerText = "Os computadores sempre fizeram parte do meu dia a dia. Os primeiros programas com que interagi foram o Campo Minado e o Pinball do Windows 98. Com a internet fui apresentado aos jogos em Flash dos navegadores, e depois me apaixonei por consoles. Quando, finalmente, conheci a programação, minha atenção se voltou para os códigos."
    document.querySelector(".co-box div :nth-child(2)").innerText = "Em 2017, iniciei o curso de Engenharia de Computação na PUC-Rio, no qual tive a oportunidade de me aprofundar em programação e conhecer novas áreas da computação."
    document.querySelector(".co-box div :nth-child(3)").innerText = "Além de desenvolver projetos nas linguagens C, Java, Python, JavaScript e TypeScript, também tive a oportunidade de aprender sobre bancos de dados, redes de computadores, sistemas operacionais, computação gráfica, inteligência artificial e outros tópicos que transformam o mundo."


})

usElem.addEventListener('click', () => {
    //Navbar
    const buttonsContainer = document.querySelector(".buttons-container")
    buttonsContainer.children[0].children[0].innerText = "Home"

    const laguageSelected = document.querySelector(".language-selected")
    laguageSelected.innerHTML = '<span class="fi fi-us"></span>en-US'

    document.querySelector(".br").innerText = "Portuguese"
    document.querySelector(".en").innerText = "English"
    document.querySelector(".es").innerText = "Spanish"

    //About
    document.querySelector(".about-text div h1").innerText = "Hello, welcome to my site."
    document.querySelector(".about-box p").innerHTML = `
        I've built this page so you can know me a little bit better. <br>
        I'm João Pedro, but the site's name is inspired by three passions: <br>
        Physics, Computers and Lisa. <br>
        Lisa is my stray dog. <br>
        Social Medias and contacts: <br><br><br>`

    document.querySelector(".social-media :nth-child(3)").href = "docs/curriculo-2023-JPVercosa-en.pdf"

    //Phy

    document.querySelector(".phy-text div h1").innerText = "PHY - Physics"
    document.querySelector(".phy-box div :nth-child(1)").innerText = "When I finished high school, I was convicted that I would work as physics teacher."
    document.querySelector(".phy-box div :nth-child(2)").innerText = "I had a lot of interest in learning physics, and was sad to watch most of my friends giving up on learning the concepts because of bad teachers didacticism."
    document.querySelector(".phy-box div :nth-child(3)").innerText = "But as I joined the university, I started to learn Computer Engineering, and that decision pushed me away from classrooms."
    document.querySelector(".phy-box div :nth-child(4)").innerText = "Anyway, I managed to volunteer as a physics teacher for three years on a community course offered by the PUC-Rio Church."
    document.querySelector(".phy-box div :nth-child(5)").innerText = "That experience showed me that I really like to teach, and how much the students can learn from different ways of teaching. Unfortanetly, the activites were suspended due to the pandemic."

    //Co
    document.querySelector(".co-text div h1").innerText = "CO - Computers"
    document.querySelector(".co-box div :nth-child(1)").innerText = "The computers have always been part of my daily life. The first interactions were playimg Mine Sweeper and Pinball on Windows 98. With the emergence of the internet, I started to play flash games and gather knowledge on Youtube videos, when I finally got to know programming. And I've started to code."
    document.querySelector(".co-box div :nth-child(2)").innerText = "In 2017 I started the Computer Engineering course at PUC-Rio, where I had the opportunity to delve into programming and discover new areas of computer science. I've learned a lot about the field, and I'm still learning."
    document.querySelector(".co-box div :nth-child(3)").innerText = "In addition to developing projects in C, Java, Python,JavaScript and TypeScript, I've also had the opportunity to learn about databases, computer networks, operating systems, computer graphics, artificial intelligence and other topics that will transform the world today and tomorrow."
})


esElem.addEventListener('click', () => {
    //Navbar
    const buttonsContainer = document.querySelector(".buttons-container")
    buttonsContainer.children[0].children[0].innerText = "Home"

    const laguageSelected = document.querySelector(".language-selected")
    laguageSelected.innerHTML = '<span class="fi fi-es"></span>es-ES'

    document.querySelector(".br").innerText = "Portugués"
    document.querySelector(".en").innerText = "Inglés"
    document.querySelector(".es").innerText = "Español"

    //About
    document.querySelector(".about-text div h1").innerText = "¡Hola es bienvenido!"
    document.querySelector(".about-box p").innerHTML = `
        Yo he construido esta página para que usted me conozca un poco mejor. <br>
        Yo soy João Pedro, pero el nombre del sitio está inspirado por tres pasiones: <br>  
        Física, Computadoras y Lisa. <br>
        Lisa es mi perro chucho. <br>
        Medios sociales y contactos: <br><br><br>`

    document.querySelector(".social-media :nth-child(3)").href = "docs/curriculo-2023-JPVercosa-en.pdf"

    //Phy

    document.querySelector(".phy-text div h1").innerText = "PHY - Física"
    document.querySelector(".phy-box div :nth-child(1)").innerText = "Cuando terminé la escuela secundaria, estaba convencido de que trabajaría como profesor de física."
    document.querySelector(".phy-box div :nth-child(2)").innerText = "Tenía mucho interés en aprender física, y estaba triste de ver a la mayoría de mis amigos renunciar a aprender los conceptos debido a la didáctica de los maestros malos."
    document.querySelector(".phy-box div :nth-child(3)").innerText = "Pero cuando me uní a la universidad, comencé a aprender Ingeniería en Computación, y esa decisión me alejó de las aulas."
    document.querySelector(".phy-box div :nth-child(4)").innerText = "Sin embargo, logré ser profesor de física voluntario durante tres años en un curso comunitario ofrecido por la Iglesia de PUC-Rio."
    document.querySelector(".phy-box div :nth-child(5)").innerText = "Esa experiencia me mostró que realmente me gusta enseñar, y lo mucho que los estudiantes pueden aprender de diferentes formas de enseñar. Desafortunadamente, las actividades se suspendieron debido a la pandemia."

    //Co
    document.querySelector(".co-text div h1").innerText = "CO - Computadoras"
    document.querySelector(".co-box div :nth-child(1)").innerText = "Los computadores siempre han sido parte de mi vida cotidiana. Las primeras interacciones fueron jugar Mine Sweeper y Pinball en Windows 98. Con la aparición de Internet, comencé a jugar juegos flash y a reunir conocimientos en videos de Youtube, cuando finalmente conocí la programación y empecé a codificar."
    document.querySelector(".co-box div :nth-child(2)").innerText = "Después en 2017 comencé el curso de Ingeniería en Computación en PUC-Rio, donde tuve la oportunidad de profundizar en la programación y descubrir nuevas áreas de la ciencia de la computación. He aprendido mucho sobre el campo, y sigo estudiando."
    document.querySelector(".co-box div :nth-child(3)").innerText = "Además de desarrollar proyectos en C, Java, Python, JavaScript y TypeScript, también he tenido la oportunidad de aprender sobre bases de datos, redes de computadoras, sistemas operativos, gráficos por computadora, inteligencia artificial y otros temas que transformarán el mundo hoy y mañana."
})
