import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Conscientização sobre Doenças Não Transmissíveis</title>
      </Head>

      <header className="header">
        <h1>Conscientização sobre Doenças Não Transmissíveis</h1>
        <nav className="nav">
          <a href="#importancia-saude">A Importância da Saúde</a>
          {/* Adicione mais links para diferentes seções se necessário */}
        </nav>
      </header>

      <section id="importancia-saude" className="mainSection">
        <h2>A Importância da Saúde e a Prevenção de Doenças Não Transmissíveis</h2>
        <p>
          A saúde é um pilar fundamental para uma vida plena, especialmente quando se trata da prevenção de doenças não transmissíveis. Estas condições, como doenças cardíacas, diabetes e câncer, têm um impacto significativo na qualidade de vida e exigem uma abordagem proativa.
        </p>
        <p>
          Com a crescente conscientização sobre a importância da prevenção, inovações baseadas em dados, wearables e aplicativos estão capacitando as pessoas a monitorar sua saúde de maneira eficaz, focando especialmente na prevenção de doenças não transmissíveis. Algoritmos de machine learning identificam padrões e riscos potenciais, permitindo intervenções proativas e mudanças no estilo de vida.
        </p>
        <p>
          A automação tornou-se vital, melhorando a eficiência dos procedimentos médicos relacionados a doenças não transmissíveis. Cirurgias robóticas de precisão, sistemas de entrega de medicamentos autônomos e assistentes virtuais para pacientes estão transformando o cenário da saúde, reduzindo riscos e aumentando a consistência nos resultados.
        </p>
        <p>
          A precisão é aprimorada pela genômica e medicina personalizada, permitindo tratamentos sob medida com foco na prevenção e manejo de doenças não transmissíveis. Diagnósticos assistidos por inteligência artificial e imagens médicas avançadas oferecem intervenções mais rápidas e eficazes.
        </p>
        <p>
          Estudantes da FIAP, o desafio inspirador que se apresenta a vocês é moldar o futuro da prevenção e tratamento de doenças não transmissíveis. Como podemos utilizar inteligência artificial, automação e análise de dados para melhorar a prevenção, tornar a assistência médica mais acessível e promover a saúde em geral?
        </p>
        <p>
          O futuro da saúde, especialmente no que diz respeito a doenças não transmissíveis, depende do que vocês, futuros líderes da tecnologia, serão capazes de imaginar e realizar. Com determinação, criatividade e dedicação, vocês podem contribuir significativamente para a construção de um mundo mais saudável e próspero.
        </p>
      </section>
    </div>
  );
}
