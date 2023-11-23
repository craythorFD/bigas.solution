export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Bem-vindo ao nosso projeto sobre Doenças Não Transmissíveis</h1>
      <img
        src="./img/doença.png" // Substitua pelo caminho da sua imagem
        alt="Imagem relacionada à saúde"
        width={500}
        height={300}
        className="image"
      />
      <h2 className="subtitle">Nosso Objetivo</h2>
      <p className="text">
        A saúde é um dos pilares fundamentais da vida humana, influenciando diretamente nossa qualidade de vida e determinando nossa capacidade de realizar nossos sonhos e aspirações. As doenças não transmissíveis (DNTs) são a principal causa de morte em todo o mundo, e a prevenção e o tratamento eficazes dessas doenças são essenciais para a promoção da saúde global.
      </p>
      <h2 className="subtitle">Inovação e Tecnologia</h2>
      <p className="text">
        Com a inovação e a tecnologia, estamos revolucionando a forma como abordamos as DNTs. Estamos utilizando análises de dados para identificar padrões e riscos potenciais, permitindo intervenções proativas. Estamos automatizando processos médicos para melhorar a eficiência e reduzir erros. E estamos melhorando a precisão dos diagnósticos e tratamentos com a ajuda da inteligência artificial e da medicina personalizada.
      </p>
      <h2 className="subtitle">Junte-se a Nós</h2>
      <p className="callToAction">
        Convidamos você a explorar nosso site para aprender mais sobre DNTs, entender sua importância e descobrir como podemos trabalhar juntos para combater essas doenças. Junte-se a nós nesta jornada para um futuro mais saudável!
      </p>
    </div>
    
    
    
  )
}
