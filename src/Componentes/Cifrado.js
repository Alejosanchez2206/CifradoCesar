import React from "react";
import './Estilo.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

let Abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

class CifradoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            EstadoForm: true,
            TextoencriptarResultado: "",
            TextoDesencriptar: "",
            TextoDesencriptarResultado: "",
        }
    }

    opcionEncritar = () => {
        this.setState({
            EstadoForm: true
        })
    }

    opcionDesencriptar = () => {
        this.setState({
            EstadoForm: false
        })
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    Cifrar = () => {
        let texto = this.state.Textoencriptar;
        let desplazamiento = this.state.desplazamiento;
        console.log(texto, desplazamiento);
        let textoCifrado = "";
        if (desplazamiento > 27 || desplazamiento < 1) {
            alert("El desplazamiento debe estar entre 1 y 27");
        } else {

            for (let i = 0; i < texto.length; i++) {
                if (texto[i] == " ") {
                    textoCifrado += " ";
                } else {
                    textoCifrado += Abecedario[(Abecedario.indexOf(texto[i].toUpperCase()) + parseInt(desplazamiento)) % 27];

                }
            }

            this.setState({
                TextoencriptarResultado: textoCifrado
            })


        }

    }

    Desencriptar = () => {
        let texto = this.state.TextoDesencriptar;
        let desplazamiento = this.state.desplazamiento;
        let textoDesencriptado = "";
        if (desplazamiento > 27 || desplazamiento < 1) {
            alert("El desplazamiento debe estar entre 1 y 27");
        } else {
            for (let i = 0; i < texto.length; i++) {
                if (texto[i] == " ") {
                    textoDesencriptado += " ";
                } else {
                    textoDesencriptado += Abecedario[(Abecedario.indexOf(texto[i].toUpperCase()) - parseInt(desplazamiento)) % 27];
                }
            }
            this.setState({
                TextoDesencriptarResultado: textoDesencriptado
            })
            
        }
    }

    render() {
        return (
            <>
                <div>
                    <h1 className="Titulo">Cifrado Cesar</h1>
                    <div className="Formulario">
                        <form>
                            <div className="BotonesSelecionar">
                                <Button variant="contained" onClick={this.opcionEncritar} color="primary" className="Boton">
                                    Encritar
                                </Button>
                                <Button variant="contained" onClick={this.opcionDesencriptar} color="primary" className="Boton">
                                    Desencriptar
                                </Button>
                            </div>
                            {this.state.EstadoForm ?
                                <>
                                    <div className="Formulario-grupo">

                                        <TextField
                                            type="text"
                                            label="Texto a cifrar"
                                            variant="outlined"
                                            name="Textoencriptar"
                                            value={this.state.Textoencriptar}
                                            onChange={this.inputChange}
                                            multiline
                                            rows={4}
                                        />
                                    </div>
                                    <div className="Formulario-grupo">
                                        <label className="Formulario-label">Desplazamiento: (1 - 27)</label>
                                        <input className="Formulario-input" type="number" name="desplazamiento" value={this.state.desplazamiento} onChange={this.inputChange} id="desplazamiento" />
                                    </div>
                                    <div className="Formulario-grupo">                                       
                                        <Button variant="contained" color="primary" className="Boton" onClick={() => this.Cifrar()}>Cifrar</Button>
                                    </div>
                                    <br></br>
                                    <div className="Formulario-grupo">
                                        <div>
                                            <label className="Formulario-label Titulocifrado">Texto cifrado</label>
                                        </div>
                                        <div className="contenedorTexto">
                                            <label className="Formulario-label">{this.state.TextoencriptarResultado}</label>
                                        </div>
                                    </div>
                                </> :
                                <>
                                    <div className="Formulario-grupo">

                                        <TextField
                                            type="text"
                                            label="Texto a desencriptar"
                                            variant="outlined"
                                            name="TextoDesencriptar"
                                            value={this.state.TextoDesencriptar}
                                            onChange={this.inputChange}
                                            multiline
                                            rows={4}
                                        />
                                    </div>
                                    <div className="Formulario-grupo">
                                        <label className="Formulario-label">Desplazamiento: (1 - 27)</label>
                                        <input className="Formulario-input" type="number" name="desplazamiento" value={this.state.desplazamiento} onChange={this.inputChange} id="desplazamiento" />
                                    </div>
                                    <div className="Formulario-grupo">
                                        <Button variant="contained" color="primary" className="Boton" onClick={() => this.Desencriptar()}>Desencriptar</Button>
                                    </div>
                                    <br></br>
                                    <div className="Formulario-grupo">
                                        <div>
                                            <label className="Formulario-label Titulocifrado">Texto Desencriptado </label>
                                        </div>
                                        <div className="contenedorTexto">
                                            <label className="Formulario-label">{this.state.TextoDesencriptarResultado}</label>
                                        </div>
                                    </div>

                                </>
                            }

                        </form>
                    </div>
                </div>

            </>
        );
    }
}

export default CifradoForm;