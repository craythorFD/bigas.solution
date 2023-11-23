'use client'
import { useEffect, useState } from "react"
export default function javaApi() {
    const [consultasmedicas, setConsultasmedicas] = useState([])
    const [doencas, setDoencas] = useState([])
    const [login, setlogin] = useState([])
    
    useEffect(() => {
            fetch('http://localhost:8080/demo/webapi/consultasmedicas')
                .then(resp => resp.json())
                .then(resp => setConsultasmedicas(resp))
                .catch(error => console.error(error))
                console.log(consultasmedicas) 
        }, [])
    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/doencas')
            .then(resp => resp.json())
            .then(resp => setDoencas(resp))
            .catch(error => console.error(error))
            
    }, [])
    
    useEffect(() => {
        fetch('http://localhost:8080/demo/webapi/login')
            .then(resp => resp.json())
            .then(resp => setLogin(resp))
            .catch(error => console.error(error))
            
    }, [])
    return (
        <main className="API">
            <h1 className="TIT">Consultas Médicas</h1>
            <table className="consumir__table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Data</th>
                        <th>Tratamento</th>
                        <th>Paciente</th>
                        <th>Id da Doença</th>

                    </tr>
                </thead>
                <tbody className="api_tbody">
                    {consultasmedicas.map(consult => (
                        <tr key={consult.id} className="tr">
                            <td className="td">{consult.consultaId}</td>
                            <td className="td">{consult.dataConsulta}</td>
                            <td className="td">{consult.tratamento}</td>
                            <td className="td">{consult.pacienteId}</td>
                            <td className="td">{consult.doencaId}</td>
                        </tr>
                    ))}
                </tbody>
                        
            </table>
            <h1 className="TIT">Doenças</h1>
            <table className="consumir__table">
                <thead>
                    <tr>
                        <th>Id da Doença</th>
                        <th>Nome da Doença</th>
                        
                    </tr>
                </thead>
                <tbody className="api_tbody">
                    {doencas.map(doe => (
                        <tr key={doe.id} className="tr">
                            <td className="td">{doe.doencaId}</td>
                            <td className="td">{doe.nomeDoenca}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </main>
    )
}