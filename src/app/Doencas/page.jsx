"use client"
import { useEffect, useState } from "react"

import Link from "next/link";


export default function Doencas() { 
 
  return (
    <div className="infoContainer">
      <h1>Doenças Não Transmissíveis (DNT) e Seus Riscos</h1>

      <section>
        <h2>O que são Doenças Não Transmissíveis?</h2>
        <p>
          Doenças Não Transmissíveis (DNT), também conhecidas como doenças crônicas, são condições de longa duração
          geralmente resultantes de fatores genéticos, ambientais e comportamentais. Elas não são causadas por
          microrganismos e não são transmitidas de uma pessoa para outra.
        </p>
        
          <img src="https://img.freepik.com/vetores-gratis/ilustracao-grafica-de-simbolo-de-batimento-cardiaco-vermelho_53876-8061.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699660800&semt=ais" alt="Ilustração de um coração saudável" />
          <p>Ilustração: Coração saudável.</p>
        
      </section>

      <section>
        <h2>Exemplos de Doenças Não Transmissíveis</h2>
        <ul>
          <li>Doenças cardiovasculares (como doença cardíaca e acidente vascular cerebral)</li>
          <li>Câncer</li>
          <li>Diabetes</li>
          <li>Doenças respiratórias crônicas (como doença pulmonar obstrutiva crônica - DPOC)</li>
          <li>Obesidade</li>
        </ul>
        
          <img src="https://www.gov.br/inca/pt-br/assuntos/cancer/como-surge-o-cancer/comportamentodascelulascancerosas4passoshd.jpg" alt="Ilustração de células cancerígenas" width="600px"/>
          <p>Ilustração: Células cancerígenas.</p>
        
      </section>

      <section>
        <h2>Riscos Associados às Doenças Não Transmissíveis</h2>
        <p>
          As DNT estão frequentemente associadas a fatores de risco modificáveis, como dieta inadequada, falta de
          atividade física, tabagismo e consumo excessivo de álcool. Esses fatores podem aumentar a probabilidade de
          desenvolver doenças crônicas e impactar negativamente a qualidade de vida.
        </p>
        
          <img src="https://media.istockphoto.com/id/1208604845/pt/vetorial/healthy-lifestyle-and-self-care-concept.jpg?s=1024x1024&w=is&k=20&c=rWhk9V5bytWqvnhDN2tQ9Nr5RhDIZOMglffGCqfl25I=" alt="Ilustração de um estilo de vida não saudável" width="400px"/>
          <p>Ilustração: Estilo de vida não saudável.</p>
        
      </section>

      <section>
        <h2>Prevenção e Promoção da Saúde</h2>
        <p>
          A prevenção das DNT envolve a adoção de um estilo de vida saudável, incluindo uma dieta equilibrada, atividade
          física regular, abandono do tabagismo e moderação no consumo de álcool. Além disso, exames de saúde regulares
          e a conscientização sobre os fatores de risco são fundamentais.
        </p>
       
          <img src="https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-de-um-estilo-de-vida-saud%C3%A1vel-vetor-67601603.jpg" alt="Ilustração de um estilo de vida saudável" />
          <p>Ilustração: Estilo de vida saudável.</p>
        
      </section>

      <section>
        <h2>Metas de Desenvolvimento Sustentável (ODS) relacionadas à saúde</h2>
        <p>
          As Metas de Desenvolvimento Sustentável (ODS) da ONU incluem objetivos específicos relacionados à saúde, como a
          redução da mortalidade materna e infantil, o controle de doenças transmissíveis e a promoção da saúde geral.
        </p>
        
          <img src="https://media.istockphoto.com/id/1328414688/pt/vetorial/sdgs-cityscape-silhouette-image-mark.jpg?s=612x612&w=0&k=20&c=hJxQkg248Scm4lQdnidXhw70-Db1E0BBaBFA1chHogU=" alt="Ilustração das Metas de Desenvolvimento Sustentável" />
          <p>Ilustração: Metas de Desenvolvimento Sustentável.</p>
        
      </section>

      <p>
        Saiba mais sobre as <Link href="https://conectabrasil.org/#/blogs/details/ods-3-saude-bem-estar" target="_blank">Metas de Desenvolvimento Sustentável relacionadas à saúde</Link>.
      </p>
    </div>
  );
}

