'use client'
import { useEffect, useState } from "react"
export default function javaApi() {
    const [historicoexames, setHistoricoexames] = useState([])
    const [prescricoesmedicas, setPrescricoesmedicas] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/historicoexames')
            .then(resp => resp.json())
            .then(resp => setHistoricoexames(resp))
            .catch(error => console.error(error))
            
    }, [])
    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/prescricoesmedicas')
            .then(resp => resp.json())
            .then(resp => setPrescricoesmedicas(resp))
            .catch(error => console.error(error))
            
    }, [])
    return (
        <main className="API">
            <h1 className="TIT">Histórico de Exames</h1>
            <table className="consumir__table">
                <thead>
                    <tr>
                        <th>Exame Id</th>
                        <th>Paciente Id</th>
                        <th>Tipo de Exame</th>
                        <th>Resultado do Exame</th>
                        <th>Data do Exame</th>

                    </tr>
                </thead>
                <tbody className="api_tbody">
                    {historicoexames.map(hist => (
                        <tr key={hist.id} className="tr">
                            <td className="td">{hist.exameId}</td>
                            <td className="td">{hist.pacienteId}</td>
                            <td className="td">{hist.tipoExame}</td>
                            <td className="td">{hist.resultado}</td>
                            <td className="td">{hist.dataExame}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1 className="TIT2">Prescrioções Médicas</h1>
            <table className="consumir__table">
                <thead>
                    <tr>
                        <th>Prescrição Id</th>
                        <th>Consulta Id</th>
                        <th>Medicamento Id</th>
                        <th>Dosagem</th>
                    </tr>
                </thead>
                <tbody className="api_tbody">
                    {prescricoesmedicas.map(presc => (
                        <tr key={presc.id} className="tr">
                            <td className="td">{presc.prescricaoId}</td>
                            <td className="td">{presc.consultaId}</td>
                            <td className="td">{presc.medicamentoId}</td>
                            <td className="td">{presc.dosagem}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </main>
    )
}