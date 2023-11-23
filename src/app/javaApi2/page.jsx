'use client'
import { useEffect, useState } from "react"
export default function javaApi() {
    const [pacientes, setPacientes] = useState([])
    const [medicamentos, setMedicamentos] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/pacientes')
            .then(resp => resp.json())
            .then(resp => setPacientes(resp))
            .catch(error => console.error(error))

        }, [])
    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/medicamentos')
            .then(resp => resp.json())
            .then(resp => setMedicamentos(resp))
            .catch(error => console.error(error))

        }, [])
    return (
        <main className="API">
            <h1 className="TIT">Dados dos Pacientes</h1>
            <table className="consumir__table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Sexo</th>
                        <th>Cpf</th>

                    </tr>
                </thead>
                <tbody className="api_tbody">
                    {pacientes.map(pacient => (
                        <tr key={pacient.id} className="tr">
                            <td className="td">{pacient.pacienteId}</td>
                            <td className="td">{pacient.nome}</td>
                            <td className="td">{pacient.idade}</td>
                            <td className="td">{pacient.sexo}</td>
                            <td className="td">{pacient.cpf}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1 className="TIT2">Dados Dos Medicamentos</h1>
            <table className="consumir__table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Indicações</th>
                    </tr>
                </thead>
                <tbody className="api_tbody">
                    {medicamentos.map(medic => (
                        <tr key={medic.id} className="tr">
                            <td className="td">{medic.medicamentoId}</td>
                            <td className="td">{medic.nomeMedicamento}</td>
                            <td className="td">{medic.tipoMedicamento}</td>
                            <td className="td">{medic.indicacoes}</td>

                        </tr>
                    ))}
                </tbody>
            </table>

        </main>
    )
}